import { Subtitle } from '~/components/StyledComponents/styles';
import Translator from '~/components/Translator';
import { ErrorContainer } from './style';

export default function ErrorMessage() {
  return (
    <ErrorContainer>
      <Subtitle>
        <Translator>generical.error_message</Translator>
      </Subtitle>
    </ErrorContainer>
  );
}
