import { ChakraProvider, Flex} from '@chakra-ui/react';
import AvatarUI from './components/Avatar/Avatar';
import theme from './theme/Theme';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        bgColor={'#171717'}
        width='100%'
        height='100%'
      >
        <AvatarUI />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
