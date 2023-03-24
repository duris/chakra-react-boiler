import { Container, Box, Text } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <h1>Hero</h1>
      <Box width="100%" height={32}>
        <Container>
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production
        </Container>
      </Box>
    </div>
  );
}
