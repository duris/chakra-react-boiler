import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useState } from "react";

export default function RegisterForm() {
  const YupSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(2),
  });

  return (
    <>
      <Text paddingTop={20} fontSize="50px" as="b">
        Login
      </Text>
      <Flex bg="white" align="start" justify="center" w="100%" p={10}>
        <Box bg="white" color="black" p={6} rounded="md" w="100%">
          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: false,
            }}
            validationSchema={YupSchema}
            onSubmit={(values) => {
              //set email password object here
              //useSubmit to check serverside if user exist already etc.
              //Redirect to dashboard
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                  <Field
                    as={Checkbox}
                    id="rememberMe"
                    name="rememberMe"
                    colorScheme="purple"
                  >
                    Remember me?
                  </Field>
                  <Button
                    bgGradient="linear(to-r, #7928CA, #FF0080)"
                    type="submit"
                    colorScheme="pink"
                    width="full"
                    border="none"
                  >
                    Login
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}
