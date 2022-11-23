import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MessageApp } from '../../enums/messageApp';
import { MessageServer } from '../../enums/messageServer';
import { MessageByServerType, UserType } from '../../types';
import { createMessageNew } from '../../utils/createMessageNew';
import { createMessageWhile } from '../../utils/createMessageWhile';
import { checkMessage, loginUser } from '../thunk/userThunk';

type InitialStateType = {
  messageByResponse: MessageByServerType;
  isAppStart: boolean;
  isProgress: boolean;
};

export const initialState: InitialStateType = {
  messageByResponse: { textMessage: '', typeMessage: undefined },
  isAppStart: false,
  isProgress: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMessage: state => {
      state.messageByResponse = {
        typeMessage: MessageServer.Success,
        textMessage: MessageApp.SendMessage,
      };
    },
    clear: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(loginUser.rejected, state => {
      state.isAppStart = true;
    });

    builder.addCase(checkMessage.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserType;
      if (payload.messages.length === 1) {
        state.messageByResponse = {
          typeMessage: MessageServer.Success,
          textMessage: createMessageNew(payload.messages[0].from),
        };
      }

      if (payload.messages.length > 1) {
        state.messageByResponse = {
          typeMessage: MessageServer.Success,
          textMessage: MessageApp.NewMessage,
        };
      }
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      const payload = action.payload as unknown as UserType;

      if (payload.counterNewMessage) {
        state.messageByResponse = {
          typeMessage: MessageServer.Success,
          textMessage: createMessageWhile(payload.counterNewMessage),
        };
      }
      state.isAppStart = true;
    });

    builder.addMatcher(
      action => action.type.endsWith('/pending'),
      state => {
        state.isProgress = true;
      },
    );

    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action: PayloadAction<string>) => {
        state.isProgress = false;
        state.messageByResponse.textMessage = action.payload;
        state.messageByResponse.typeMessage = MessageServer.Error;
      },
    );

    builder.addMatcher(
      action => action.type.endsWith('/fulfilled'),
      state => {
        state.isProgress = false;
      },
    );
  },
});

export const { setMessage, clear } = appSlice.actions;
