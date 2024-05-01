import { Controller, UseInterceptors } from '@nestjs/common';
import { PresenceService } from './presence.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { SharedService } from '@app/shared';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { RedisService } from '@app/shared/services/redis.service';

@Controller()
export class PresenceController {
  constructor(
    private readonly redisService: RedisService,
    private readonly presenceService: PresenceService,
    private readonly sharedService: SharedService,
  ) {}

  @MessagePattern({ cmd: 'get-presence' })
  @UseInterceptors(CacheInterceptor)
  async getUser(@Ctx() context: RmqContext) {
    this.sharedService.acknowledgeMessage(context);
    const cache = await this.redisService.get('presence');
    if (cache) {
      console.log('Getting from cache');

      return cache;
    }

    const f = await this.presenceService.getHello();
    this.redisService.set('presence', f);
    return f;
  }

  @MessagePattern({ cmd: 'get-active-user' })
  async getActiveUser(
    @Ctx() context: RmqContext,
    @Payload() payload: { id: number },
  ) {
    this.sharedService.acknowledgeMessage(context);

    return await this.presenceService.getActiveUser(payload.id);
  }
}
