import { useTranslation } from 'react-i18next';

const Translator = ({ children }: { children: string }) => {
  const { t } = useTranslation();

  return <>{t(children)}</>;
};

export default Translator;
