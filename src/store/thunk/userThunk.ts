import { createAsyncThunk } from '@reduxjs/toolkit';

import { API } from 'api';
import { MessageSendType, ReadMessageType } from 'types';
import { UserType } from 'types/UserType';
import { setErrorResponse } from 'utils';

export const loginUser = createAsyncThunk(
  'userSlice/loginUser',
  async (name: string, { rejectWithValue }): Promise<UserType | Function> => {
    try {
      const res = await API.login(name);

      return Promise.resolve({
        name,
        messages: res.messages,
        counterNewMessage: res.counterNewMessage,
        users: res.users,
        avatar: res.avatar,
      });
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);

export const readMessage = createAsyncThunk(
  'userSlice/readMessage',
  async (payload: ReadMessageType, { rejectWithValue }) => {
    try {
      return await API.readMessage(payload);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);

export const checkMessage = createAsyncThunk(
  'userSlice/checkMessage',
  async (name: string, { rejectWithValue }) => {
    try {
      return await API.checkMessage(name);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);

export const sendMessage = createAsyncThunk(
  'userSlice/sendMessage',
  async (payload: MessageSendType, { rejectWithValue }) => {
    try {
      return await API.sendMessage(payload);
    } catch (e) {
      return setErrorResponse(e, rejectWithValue);
    }
  },
);
