import { debounce } from 'debounce';
import { useRef, useState } from 'react';
import * as S from './styles';

export default function Input({
  resource,
  setFilter,
}: {
  resource: string;
  setFilter: (resource: string, nextValue: string) => void;
}) {
  const [value, setValue] = useState('');
  const debouncedSave = useRef(
    debounce((nextValue: string) => {
      setFilter(resource, nextValue);
    }, 1000),
  ).current;

  const handleChange = (nextValue: string) => {
    setValue(nextValue);
    debouncedSave(nextValue);
  };

  return (
    <S.Input placeholder='Search...' value={value} onChange={(e) => handleChange(e.target.value)} />
  );
}
