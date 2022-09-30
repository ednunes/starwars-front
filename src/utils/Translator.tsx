import { Trans } from 'react-i18next';

const Translator = ({ children }: { children: JSX.Element | string }) => {
  return <Trans>{children}</Trans>;
};

export default Translator;
