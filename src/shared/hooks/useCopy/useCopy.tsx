import { useEffect, useState } from 'react';

export const fallbackCopy = (text: string) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
};

export const useCopy = (text: string) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let checkedTimeout: ReturnType<typeof setTimeout> | null = null;
    if (checked) {
      checkedTimeout = setTimeout(() => setChecked(false), 3000);
    }
    return () => {
      if (checkedTimeout) clearTimeout(checkedTimeout);
    };
  }, [checked]);

  const onClick = () => {
    setChecked(true);
    fallbackCopy(text);
  };

  return { checked, onClick };
};
