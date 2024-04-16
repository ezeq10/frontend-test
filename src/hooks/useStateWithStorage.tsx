import { useEffect, useState } from "react";

export type StateWithStorage<T> = [T, (newValue: T) => void];

export default function useStateWithStorage<T>(key: string, defaultValue: T): StateWithStorage<T> {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
