import React from "react";
import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import bgImage from "../images/cicla.jpg";
export default function Header() {
  return (
    <div>
      <Box
        h="40vh"
        w={"90%"}
        m="auto"
        bg="blackAlpha.100"
        textAlign="center"
        bgImage={bgImage}
      >
        <Flex
          justify={"center"}
          alignItems="center"
          direction="column"
          h={"100%"}
        >
          <Heading color="white">DOMINA EL TERRENO</Heading>
          <Flex>
            <Button m={"2"} color={"white"} variant="outline">
              VER DETALLES
            </Button>
            <Button m={"2"} color={"white"} variant="outline">
              VER VIDEOS
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box
        h="45vh"
        w={"30%"}
        ml="66px"
        mt={"35px"}
        bg="blackAlpha.100"
        textAlign="center"
        bgImage={bgImage}
      >
        <Flex
          justify={"center"}
          alignItems="center"
          direction="column"
          h={"100%"}
        >
          <Heading color="white">DOMINA EL TERRENO</Heading>

          <Button m={"2"} w="93%" color={"white"} variant="outline">
            VER DETALLES
          </Button>
          <Button m={"2"} w="93%" color={"white"} variant="outline">
            VER VIDEOS
          </Button>
        </Flex>
      </Box>
    </div>
  );
}
