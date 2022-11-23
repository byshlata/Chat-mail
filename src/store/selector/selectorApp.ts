import { AppRootStore } from '../store';

import { MessageByServerType } from 'types';

export const selectorIsProgress = (state: AppRootStore): boolean => state.app.isProgress;

export const selectorIsAppStart = (state: AppRootStore): boolean => state.app.isAppStart;

export const selectorErrorMessage = (state: AppRootStore): MessageByServerType =>
  state.app.messageByResponse;
