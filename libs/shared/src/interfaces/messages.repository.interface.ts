import { BaseInterfaceRepository } from '../repositories/base/base.interface.repository';

import { MessageEntity } from '../entities/message.entity';

export interface MessagesRepositoryInterface
  extends BaseInterfaceRepository<MessageEntity> {}