import {
  Container,
  Box,
  Text,
  Flex,
  Spacer,
  Heading,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
