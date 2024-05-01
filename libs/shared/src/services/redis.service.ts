import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async get(key: string) {
    console.log('Getting from cache');
    return this.cache.get(key);
  }

  async set(key: string, value: any) {
    console.log('Setting in cache');
    return this.cache.set(key, value);
  }

  async del(key: string) {
    console.log('Deleting from cache');
    return this.cache.del(key);
  }
  async reset() {
    console.log('reset the cache');
    await this.cache.reset();
  }
}
