import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";

const Section4 = () => {
  const itemLen = [1, 2];
  const width = "350px";
  const imgUrl = "./img1.jpg";
  const animation = {
    "data-aos": "fade-up",
    "data-aos-offset": "100",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
    "data-aos-easing": "ease-in",
    "data-aos-once": "false",
    "data-aos-anchor-placement": "bottom-center",
  };

  return (
    <SimpleGrid columns={{ lg: 2 }} spacing="10">
      {itemLen.map((v: any, i: any) => (
        <Box textAlign="center" w={width} mt="5" key={i}>
          <Image src={imgUrl} w={width} {...animation} alt="Section 4" />

          <Text fontSize="xl" fontWeight="bold" mb="5" p={3} {...animation}>
            Lorem ipsum is simply dummy text
          </Text>

          <Text p={3} {...animation}>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Section4;
