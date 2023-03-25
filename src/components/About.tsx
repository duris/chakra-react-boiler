import { Container, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <header>
      <h1>
        <Link to="/">Hero</Link>
      </h1>
      <Box>
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
    </header>
  );
}
