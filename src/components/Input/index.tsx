import { debounce } from 'debounce';
import { useRef, useState } from 'react';
import * as S from './styles';

export default function Input({ resource, setFilter }) {
  const [value, setValue] = useState('');
  const debouncedSave = useRef(
    debounce((nextValue) => {
      console.log(nextValue);
      setFilter(resource, nextValue);
    }, 1000),
  ).current;

  const handleChange = (nextValue) => {
    setValue(nextValue);
    debouncedSave(nextValue);
  };

  return (
    <S.Input placeholder='Search...' value={value} onChange={(e) => handleChange(e.target.value)} />
  );
}
