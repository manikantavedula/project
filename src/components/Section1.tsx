import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Text } from "@chakra-ui/react";

const Section1 = () => {
  const [isBigScreen] = useMediaQuery("(min-width: 620px)");
  const animation = {
    "data-aos": "fade-up",
    "data-aos-delay": "50",
    "data-aos-duration": "500",
    "data-aos-easing": "ease-in",
    "data-aos-once": "true",
    "data-aos-anchor-placement": "top-center",
    "data-aos-anchor": ".trigger-animation1",
  };

  return (
    <Flex w="100vw" h="100vh" className="trigger-animation1">
      <Box
        bgImage="img1.jpg"
        width="100%"
        height="100%"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        textAlign="center"
        pos="relative"
      >
        <Box
          pos="absolute"
          top={isBigScreen ? "25%" : "50%"}
          left="50%"
          transform="translate(-50%, -50%)"
          w="75%"
        >
          <Text
            color="#fff"
            fontSize="2xl"
            fontWeight="bold"
            mb="5"
            p={3}
            {...animation}
          >
            Lorem ipsum is simply dummy text
          </Text>

          <Text color="#fff" p={3} {...animation}>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Section1;
