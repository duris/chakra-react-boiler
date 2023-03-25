import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      bg="purple.800"
      color="white"
      width="100%"
      justifyContent="center"
      display="flex"
      p={10}
      mt={20}
    >
      <Flex as="footer" width="4xl">
        <Box maxWidth="4xl">
          <nav>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashbaord</Link>
            </li>
          </nav>
        </Box>
      </Flex>
    </Box>
  );
}
