import { debounce } from 'debounce';
import { useRef, useState } from 'react';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <S.Input
      placeholder={`${t('generical.search')}...`}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
