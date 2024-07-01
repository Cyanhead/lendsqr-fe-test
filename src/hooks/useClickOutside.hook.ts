import { useEffect, RefObject } from 'react';

const useClickOutside = (
  refs: RefObject<HTMLElement>[],
  handler: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        refs.every(
          ref => ref.current && !ref.current.contains(e.target as Node)
        )
      ) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, handler]);
};

export default useClickOutside;
