import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useMediaQuery } from './useMediaQuery';

function usePreferDarkmode() {
  return useMediaQuery<boolean>(
    ['(prefers-color-scheme: dark)'],
    [true],
    false
  );
}

export function useDarkmode() {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    'dark-mode-enabled',
    false
  );

  const preferDarkmode = usePreferDarkmode();

  const enabled = enabledState ?? preferDarkmode;

  useEffect(() => {
    const className = 'dark-mode';
    const applicationBody = window.document.body;

    if (enabled) {
      applicationBody.classList.add(className);
    } else {
      applicationBody.classList.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabledState];
}
