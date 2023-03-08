import { ChakraProvider } from '@chakra-ui/react'
import GlobalState from './GlobalState/GlobalState';
import Router from './routes/Router';
function App() {
  return (
    <GlobalState>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
