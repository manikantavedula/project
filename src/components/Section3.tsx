import { useState, useEffect } from "react";
import { Box, Button, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";

const Section3 = () => {
  const [json] = useState<any>({
    products: [
      {
        id: 201,
        name: "Nulla",
        price: 207,
        compare_at_price: 400,
        categoryId: 1,
        rate: 2.44,
        content: "Culpa sed tenetur incidunt quia veniam sed molliti",
        review: 78,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 202,
        name: "Corporis",
        price: 271,
        compare_at_price: 400,
        categoryId: 1,
        rate: 2.18,
        content: "Nam incidunt blanditiis odio inventore. Nobis volu",
        review: 67,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 203,
        name: "Minus",
        price: 295,
        compare_at_price: 400,
        categoryId: 1,
        rate: 0.91,
        content: "Quod reiciendis aspernatur ipsum cum debitis. Quis",
        review: 116,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 204,
        name: "Qui",
        price: 280,
        compare_at_price: 400,
        categoryId: 1,
        rate: 3.11,
        content: "Occaecati dolore assumenda facilis error quaerat. ",
        review: 78,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 209,
        name: "Similique",
        price: 262,
        compare_at_price: 400,
        categoryId: 1,
        rate: 0.29,
        content: "Autem blanditiis similique saepe excepturi at erro",
        review: 44,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 220,
        name: "Soluta",
        price: 109,
        compare_at_price: 400,
        categoryId: 1,
        rate: 0.28,
        content: "Quos accusamus distinctio voluptates ducimus neque",
        review: 34,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 223,
        name: "Quos",
        price: 247,
        compare_at_price: 400,
        categoryId: 1,
        rate: 4.74,
        content: "Error voluptate recusandae reiciendis adipisci nec",
        review: 188,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 224,
        name: "Sunt",
        price: 297,
        compare_at_price: 400,
        categoryId: 1,
        rate: 4.38,
        content: "Tempora sed explicabo quae recusandae vitae debiti",
        review: 63,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 225,
        name: "Nemo",
        price: 143,
        compare_at_price: 400,
        categoryId: 1,
        rate: 1.06,
        content: "Id pariatur at modi esse distinctio error. Dolores",
        review: 116,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 226,
        name: "Quo",
        price: 150,
        compare_at_price: 400,
        categoryId: 1,
        rate: 3.07,
        content: "Explicabo distinctio labore eius. Culpa provident ",
        review: 157,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 227,
        name: "Nobis",
        price: 195,
        compare_at_price: 400,
        categoryId: 1,
        rate: 1.68,
        content: "Reprehenderit iste quos amet. Natus consequatur in",
        review: 30,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 228,
        name: "Explicabo",
        price: 253,
        compare_at_price: 400,
        categoryId: 1,
        rate: 0.7,
        content: "Nihil magni libero sapiente voluptate. Perspiciati",
        review: 11,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 229,
        name: "Hic",
        price: 178,
        compare_at_price: 400,
        categoryId: 1,
        rate: 4.83,
        content: "Ut assumenda soluta esse officia. Quos quaerat sus",
        review: 78,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 230,
        name: "Occaecati",
        price: 199,
        compare_at_price: 400,
        categoryId: 1,
        rate: 3.17,
        content: "Aut quam nisi libero distinctio. Temporibus rerum ",
        review: 103,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 231,
        name: "Consequatur",
        price: 152,
        compare_at_price: 400,
        categoryId: 2,
        rate: 1.74,
        content: "Iste repudiandae nostrum ea iste voluptate ducimus",
        review: 77,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 232,
        name: "Assumenda",
        price: 236,
        compare_at_price: 400,
        categoryId: 2,
        rate: 2.89,
        content: "Sint aperiam voluptatum laudantium laborum at debi",
        review: 126,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 233,
        name: "Placeat",
        price: 115,
        compare_at_price: 400,
        categoryId: 2,
        rate: 4.7,
        content: "Temporibus reiciendis inventore ratione asperiores",
        review: 21,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 235,
        name: "Facilis",
        price: 130,
        compare_at_price: 400,
        categoryId: 2,
        rate: 0.64,
        content: "In sequi cumque quisquam corrupti doloribus suscip",
        review: 118,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 236,
        name: "Ratione",
        price: 117,
        compare_at_price: 400,
        categoryId: 2,
        rate: 3.62,
        content: "Corrupti sint occaecati doloribus maiores. Exceptu",
        review: 30,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 237,
        name: "Non",
        price: 230,
        compare_at_price: 400,
        categoryId: 2,
        rate: 2.28,
        content: "Exercitationem debitis enim eum nemo necessitatibu",
        review: 112,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 238,
        name: "Quaerat",
        price: 274,
        compare_at_price: 400,
        categoryId: 2,
        rate: 1.97,
        content: "A similique facilis facilis. Excepturi repudiandae",
        review: 68,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 239,
        name: "Fugiat",
        price: 167,
        compare_at_price: 400,
        categoryId: 2,
        rate: 3.67,
        content: "Maiores eveniet dolores laudantium quae doloribus ",
        review: 53,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 240,
        name: "Voluptas",
        price: 278,
        compare_at_price: 400,
        categoryId: 2,
        rate: 1.86,
        content: "Quas a at officia quod in quod. Impedit deserunt t",
        review: 199,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 314,
        name: "Repellendus",
        price: 285,
        compare_at_price: 400,
        categoryId: 5,
        rate: 4.46,
        content: "Alias maiores soluta ab earum asperiores praesenti",
        review: 177,
        imageUrl: "https://dummyimage.com/400x350",
      },
      {
        id: 315,
        name: "Quibusdam",
        price: 209,
        compare_at_price: 400,
        categoryId: 6,
        rate: 0.21,
        content: "Assumenda debitis voluptatem magnam temporibus mol",
        review: 125,
        imageUrl: "https://dummyimage.com/400x350",
      },
    ],
  });

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
        {json.products &&
          json.products.length !== 0 &&
          json.products.map((v: any, i: any) => (
            <Box key={i} display="inline-block" textAlign="center">
              <Image src={`${v.imageUrl}`} alt={v.name} w="80%" m="auto" />
              <Text fontSize="xs" textDecoration="line-through">
                ${v.compare_at_price}
              </Text>
              <Text fontWeight="bold" color="blue">
                ${v.price}
              </Text>
              <Text fontWeight="bold" fontSize="xs">
                {v.title}
              </Text>
              <Link
                href={`${v.imageUrl}`}
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
