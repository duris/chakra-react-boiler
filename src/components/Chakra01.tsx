import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";

export default function Chakra01() {
  return (
    <div>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="30" bg="blue.500" />
        <GridItem w="100%" h="30" bg="blue.500" />
        <GridItem w="100%" h="30" bg="blue.500" />
        <GridItem w="100%" h="30" bg="blue.500" />
        <GridItem w="100%" h="30" bg="blue.500" />
      </Grid>
    </div>
  );
}
