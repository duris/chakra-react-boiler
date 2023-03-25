import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Header from "./Header";

export default function Dashboard({
  userEmail,
  setUserEmail,
}: {
  userEmail: string;
  setUserEmail: any;
}) {
  return (
    <>
      <Heading fontSize={50} padding={12}>
        {userEmail ? userEmail : "Dashboard"}
      </Heading>

      <Container minH="100vh">
        <Grid
          h="200px"
          templateRows="repeat(2, 200px)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={2} bg="papayawhip" />
          <GridItem colSpan={4} bg="tomato" />
        </Grid>
      </Container>
    </>
  );
}
