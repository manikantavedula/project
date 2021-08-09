import * as S from "./components";
import { VStack } from "@chakra-ui/layout";
import AOS from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

const App = () => {
  if (typeof window === "undefined") {
    return null;
  }

  AOS.init();

  return (
    <VStack overflow="hidden">
      <S.Section1 />
      <S.Section2 />
      <S.Section3 />
      <S.Section4 />
      <S.Section5 reverse={false} />
      <S.Section5 reverse={true} />
      <S.Section5 reverse={false} />
      <S.Section5 reverse={true} />
      <S.Section6 />
    </VStack>
  );
};

export default App;
