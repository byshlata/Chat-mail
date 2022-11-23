import axios, { AxiosError } from 'axios';

export const setErrorResponse = (e: any, rejectWithValue: Function): Function => {
  const err = e as Error | AxiosError<{ error: string }>;

  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.message : err.message;
    return rejectWithValue(error);
  }
  if (e instanceof Error) {
    return rejectWithValue(err.message);
  }

  return rejectWithValue(err);
};
