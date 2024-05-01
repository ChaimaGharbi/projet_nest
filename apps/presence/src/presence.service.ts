import { Injectable } from '@nestjs/common';
import { ActiveUser } from './interfaces/ActiveUser.interface';
import { RedisService } from '@app/shared';
@Injectable()
export class PresenceService {
  constructor(private readonly cache: RedisService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getActiveUser(id: number) {
    const user = await this.cache.get(`user ${id}`);

    return user as ActiveUser | undefined;
  }
}
