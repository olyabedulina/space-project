import { useMemo } from 'react';

export const useUniqueId = () => {
  const uniqueId = useMemo(() => getUniqueId(), []);
  return uniqueId;
};

export const getUniqueId = () => {
  return Math.random().toString(36).substr(2, 10);
};
