const io = window.io || undefined;

export const connect = () => {
  try {
    return io();
  } catch (ioNotBoundErr) {
    throw new Error('IO is not available on window');
  }
};
