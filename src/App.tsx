import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chakra01 from "./components/Chakra01";
import HeroSection from "./components/HeroSection";
import RegisterForm from "./components/RegisterForm";
import { InfoPanel } from "./components/InfoPanel";
import { Box, Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
