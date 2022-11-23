import { createSlice } from '@reduxjs/toolkit';

import { StatusMessage } from '../../enums/statusMessage';
import {
  MessageResponseType,
  MessageType,
  Nullable,
  UserInBaseType,
  UserType,
} from '../../types';
import { checkMessage, loginUser, readMessage } from '../thunk/userThunk';

type InitialStateType = {
  avatar: string;
  messages: MessageType[];
  users: UserInBaseType[];
  countUnreadMessage: number;
  name: Nullable<string>;
};

export const initialState: InitialStateType = {
  avatar: '',
  messages: [],
  users: [],
  countUnreadMessage: 0,
  name: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserType;
      state.messages = payload.messages;
      state.name = payload.name;
      state.avatar = payload.avatar;
      state.users = payload.users.map(user => ({ value: user }));
      state.countUnreadMessage = payload.messages.filter(
        message => message.status === StatusMessage.Unread,
      ).length;
    });

    builder.addCase(checkMessage.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserType;

      if (payload.counterNewMessage) {
        state.messages = [...payload.messages, ...state.messages];
      }

      state.users = payload.users.map(user => ({ value: user }));
      if (payload.messages.length) {
        state.countUnreadMessage = payload.counterNewMessage;
      }
    });

    builder.addCase(readMessage.fulfilled, (state, action) => {
      const messagePayload = action.payload as unknown as MessageResponseType;
      state.messages.forEach((message, index) => {
        if (message._id === messagePayload.message._id) {
          state.messages[index] = messagePayload.message;
          state.countUnreadMessage -= 1;
        }
      });
    });
  },
});

export const { logout } = userSlice.actions;
