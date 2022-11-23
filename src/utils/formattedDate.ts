import { formattedTime, formattedYear } from 'utils';

export const formattedDate = (data: string): string =>
  `${formattedYear(data)} ${formattedTime(data)}`;
