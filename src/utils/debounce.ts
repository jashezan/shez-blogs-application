export const debounce = (fn: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout;
  const debounced = (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
          fn.apply(this, args);
      }, timeout);
  };
  return debounced;
};