import { BaseInterfaceRepository } from '../repositories/base/base.interface.repository';

import { FriendRequestEntity } from '../entities/friend-request.entity';

export interface FriendRequestsRepositoryInterface
  extends BaseInterfaceRepository<FriendRequestEntity> {}