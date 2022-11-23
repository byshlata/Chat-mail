export const formattedTime = (data: string): string =>
  new Date(data).toLocaleTimeString('ru', {
    hour: 'numeric',
    minute: '2-digit',
  });
