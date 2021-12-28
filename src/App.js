import "./styles.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";
import BoxContainer from "./components/BoxContainer";
import BitCoinBg from "./assets/bitcoin-bg.jpg";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        backgroundImage={`url(${BitCoinBg}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));`}
        height="100vh"
        backgroundPosition="center"
        backgroundSize="cover"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        backgroundBlendMode="overlay"
      >
        <BoxContainer />
      </Box>
    </ChakraProvider>
  );
}
