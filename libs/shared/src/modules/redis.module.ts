import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { redisStore } from 'cache-manager-redis-yet';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisService } from '../services/redis.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        store: await redisStore({
          url: configService.get('REDIS_URI'),
          ttl: 0,
        }),
      }),
      isGlobal: true,
      inject: [ConfigService],
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
