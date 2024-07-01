export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const datePart = date.toLocaleDateString('en-US', options);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const timePart = date.toLocaleTimeString('en-US', timeOptions);

  return `${datePart} ${timePart}`;
};
