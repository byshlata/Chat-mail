export const formattedYear = (data: string): string =>
  new Date(data).toLocaleDateString('ru');
