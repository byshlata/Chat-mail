export type { AppDispatchType, AppRootStore } from './store';

export { store } from './store';

export {
  selectorIsProgress,
  selectorErrorMessage,
  selectorMessages,
  selectorUserName,
  selectorIsAppStart,
  selectorCountUnreadMessage,
  selectorUsers,
  selectorAvtar,
} from './selector';

export { logout, setMessage, clear } from './slice';

export { loginUser, readMessage, checkMessage, sendMessage } from './thunk';
