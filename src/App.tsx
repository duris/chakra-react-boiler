import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);
  const [userEmail, setUserEmail] = useState<string>("");

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="signup" element={<SignUp />} />
            <Route
              path="signin"
              element={
                <SignIn userEmail={userEmail} setUserEmail={setUserEmail} />
              }
            />
            <Route
              path="dashboard"
              element={
                <Dashboard userEmail={userEmail} setUserEmail={setUserEmail} />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
