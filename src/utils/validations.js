export const isValidInput = (input, length = 1) =>
  !!input && input.trim().length >= length;
