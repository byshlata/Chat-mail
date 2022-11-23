import { AppRootStore } from '../store';

import { StatusMessage } from 'enums';
import { MessageType, Nullable, UserInBaseType } from 'types';

export const selectorMessages = (state: AppRootStore): MessageType[] =>
  state.user.messages;

export const selectorUserName = (state: AppRootStore): Nullable<string> =>
  state.user.name;

export const selectorCountUnreadMessage = (state: AppRootStore): number =>
  state.user.messages.reduce(
    (a, b) => (b.status === StatusMessage.Unread ? a + 1 : a),
    0,
  );

export const selectorUsers = (state: AppRootStore): UserInBaseType[] => state.user.users;

export const selectorAvtar = (state: AppRootStore): string => state.user.avatar;
