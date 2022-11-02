import { Title } from '~/components/StyledComponents/styles';
import Translator from '~/components/Translator';
import { ErrorContainer } from './style';

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <ErrorContainer>
      <Title>
        <Translator>{message}</Translator>
      </Title>
    </ErrorContainer>
  );
}
