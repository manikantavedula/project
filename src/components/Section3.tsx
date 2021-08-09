import { useState, useEffect } from "react";
import { Box, Button, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";

const url = "https://shopnewage.com/collections/home-bar/products/";

const Section3 = () => {
  const [json, setJson] = useState<any>([]);

  useEffect(() => {
    let json = [
      "home-bar-display-cabinet-21-61005",
      "home-bar-2-door-with-drawer-cabinet-21-61004",
      "home-bar-3-drawer-cabinet-21-61003",
      "home-bar-wall-wine-rack-cabinet-21-61000",
      "home-bar-double-display-cabinet-42-61022",
      "home-bar-wine-storage-cabinet-21-61023",
    ];

    let data: any = [];

    json.forEach((d: any, i: any) => {
      async function get() {
        try {
          const res = await axios.get(`${url}${d}.json`);
          return res.data.product;
        } catch (error) {
          console.error(error);
        }
      }

      get().then((res) => {
        data.push(res);
        setJson((prevData: any) => [...prevData, res]);
      });
    });
  }, []);

  useEffect(() => {
    console.log(json);
  }, [json]);

  return (
    <>
      <Box p={10} textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Shop Home Bars
        </Text>
        <Text>Choose from a variety of different styles to suit your home</Text>
      </Box>

      <SimpleGrid
        columns={{ md: 2, lg: 3 }}
        spacing="10"
        p="10"
        pt="0"
        justifyContent="center"
        alignItems="center"
      >
        {json &&
          json.length !== 0 &&
          json.map((v: any, i: any) => (
            <Box key={i} display="inline-block" textAlign="center">
              <Image src={v.image.src} alt={v.title} w="80%" m="auto" />
              <Text fontSize="xs" textDecoration="line-through">
                ${v.variants[0].compare_at_price}
              </Text>
              <Text fontWeight="bold" color="blue">
                ${v.variants[0].price}
              </Text>
              <Text fontWeight="bold" fontSize="xs">
                {v.title}
              </Text>
              <Link
                href={`${url}${v.handle}`}
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <Button colorScheme="blue" size="sm" mt="5" fontSize="xs">
                  BUY NOW &gt;
                </Button>
              </Link>
            </Box>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Section3;
