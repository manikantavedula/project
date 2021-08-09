import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Text } from "@chakra-ui/react";

const Section2 = () => {
  const [isBigScreen] = useMediaQuery("(min-width: 620px)");
  const animation = {
    "data-aos": "fade-up",
    "data-aos-delay": "50",
    "data-aos-duration": "500",
    "data-aos-easing": "ease-in",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "top-center",
    "data-aos-anchor": ".trigger-animation2",
  };

  return (
    <Flex w="100vw" h="100vh" className="trigger-animation2">
      <Box
        bgImage="img1.jpg"
        width="100%"
        height="100%"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        pos="relative"
        textAlign={isBigScreen ? "right" : "center"}
      >
        <Box
          pos="absolute"
          top={isBigScreen ? "45%" : "50%"}
          left={isBigScreen ? "60%" : "50%"}
          transform="translate(-50%, -50%)"
          w={isBigScreen ? "50%" : "75%"}
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

export default Section2;
