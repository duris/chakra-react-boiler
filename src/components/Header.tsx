import { Flex, Spacer, Heading, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Flex width="4xl">
        <div>
          <Heading>
            <Link to="/">Hero</Link>
          </Heading>
        </div>
        <Spacer />

        <Center>
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
        </Center>
      </Flex>
    </header>
  );
}
