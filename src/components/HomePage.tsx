import {
  Container,
  Box,
  Text,
  VStack,
  Flex,
  Center,
  Square,
  Show,
  Hide,
  Heading,
  Grid,
  GridItem,
  Spacer,
  Button,
} from "@chakra-ui/react";
import Header from "./Header";

export default function HomePage() {
  return (
    <>
      <Box width="100%" bg="red.300" p={1}>
        <Flex maxW="4xl" justifyContent="end" m="0 auto">
          <Box p={2}>
            <Button>Hello</Button>
          </Box>
        </Flex>
      </Box>
      <Box as="section" m={10} maxW="4xl">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          pb={10}
        >
          Welcome to Chakra UI
        </Text>
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
        <Box p={10} margin="30px 0" background="orange" color="white">
          Box Component
        </Box>
      </Box>
      <Box as="section" my={10} w="100%" maxW="4xl">
        <Grid
          gap={5}
          p={2}
          gridTemplateColumns={{ sm: "1fr", md: "1fr 1fr 1fr 1fr" }}
          background="antiquewhite"
        >
          <GridItem p={10} margin="30px 0" background="orange" color="white">
            Box Component
          </GridItem>
          <GridItem p={10} margin="30px 0" background="orange" color="white">
            Box Component
          </GridItem>
          <GridItem p={10} margin="30px 0" background="orange" color="white">
            Box Component
          </GridItem>
          <GridItem p={10} margin="30px 0" background="orange" color="white">
            Box Component
          </GridItem>
        </Grid>
      </Box>
      <Flex flexWrap="wrap" w="100%" justifyContent="center">
        <Box w="4xl">
          <Heading py={6}>Experience</Heading>
          <Flex
            color="white"
            height="500px"
            direction={{ xs: "column", sm: "column", md: "row" }}
          >
            <Hide below="sm">
              <Center w="100px" bg="green.500" flex={1}>
                <Show below="lg">
                  <Box p={10}>
                    This text appears at the "sm" value screen width or greater.
                  </Box>
                </Show>
                <Show above="lg">
                  <Box p={10}>
                    This text appears at the "lg" value screen width or greater.
                  </Box>
                </Show>
              </Center>
            </Hide>

            <Square bg="blue.900" flex={3}>
              <Text alignSelf="start" p={12}>
                Box 2
              </Text>
            </Square>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
