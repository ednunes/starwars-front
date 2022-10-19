import { Title } from '~/components/StyledComponents/styles';
import Translator from '~/components/Translator';
import { ErrorContainer } from './style';

export default function ErrorMessage() {
  return (
    <ErrorContainer>
      <Title>
        <Translator>generical.error_message</Translator>
      </Title>
    </ErrorContainer>
  );
}
