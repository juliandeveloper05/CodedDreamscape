import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar"; // Asegúrate de tener la ruta correcta

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar /> {/* Agrega la Navbar aquí */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
