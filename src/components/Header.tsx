import { Container, Box, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <h1>Hero</h1>
      <Box>
        <nav>
          <a href="/">Home</a>
          <a href="/">Support</a>
          <a href="/">Pricing</a>
        </nav>
      </Box>
    </header>
  );
}
