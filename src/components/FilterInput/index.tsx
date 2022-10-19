import { debounce } from 'debounce';
import { useRef, useState } from 'react';
import * as S from './styles';
import { useTranslation } from 'react-i18next';

export default function FilterInput({
  resource,
  setFilter,
}: {
  resource: string;
  setFilter: (resource: string, nextValue: string) => void;
}) {
  const { t } = useTranslation();
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
    <S.FilterInput
      placeholder={`${t('generical.search')}...`}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
