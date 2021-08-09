import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";

interface Reverse {
  reverse: boolean;
}

const Section5 = ({ reverse }: Reverse) => {
  const [isBigScreen] = useMediaQuery("(min-width: 620px)");
  const animation = {
    "data-aos-offset": "300",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
    "data-aos-easing": "ease-in",
    "data-aos-once": "true",
    "data-aos-anchor-placement": "top-center",
  };

  return (
    <SimpleGrid
      columns={{ md: 2, lg: 2 }}
      spacing="10"
      p="10"
      justifyContent="center"
      alignItems="center"
      style={{ direction: reverse ? "rtl" : "ltr" }}
    >
      <Box data-aos={`fade-${!reverse ? "right" : "left"}`} {...animation}>
        <Image src="./img1.jpg" w="100%" h="100%" alt="Section 5" />
      </Box>

      <Box
        textAlign={isBigScreen ? (!reverse ? "right" : "left") : "center"}
        data-aos={`fade-${reverse ? "right" : "left"}`}
        {...animation}
      >
        <Text fontSize="xl" fontWeight="bold" mb="5" p={3}>
          Lorem ipsum is simply dummy text
        </Text>

        <Text fontSize="sm" p={3}>
          {`Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`}
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default Section5;
