import { ChakraProvider} from '@chakra-ui/react';
import AvatarUI from './components/Avatar/Avatar';
import theme from './theme/Theme';
import * as S from './styles';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <S.FlexStyled>
        <AvatarUI />
      </S.FlexStyled>
    </ChakraProvider>
  );
}

export default App;
