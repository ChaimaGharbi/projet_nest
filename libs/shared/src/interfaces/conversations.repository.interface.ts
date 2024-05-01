import { BaseInterfaceRepository } from '../repositories/base/base.interface.repository';

import { ConversationEntity } from '../entities/conversation.entity';

export interface ConversationsRepositoryInterface
  extends BaseInterfaceRepository<ConversationEntity> {
  findConversation(
    userId: number,
    friendId: number,
  ): Promise<ConversationEntity | undefined>;
}
