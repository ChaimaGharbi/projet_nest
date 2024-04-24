import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from './user.entity';

@Entity('friend-request')
export class FriendRequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.friendRequestCreator)
  creator: UserEntity;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.friendRequestReceiver)
  receiver: UserEntity;
}