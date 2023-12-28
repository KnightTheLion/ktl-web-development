import {
    Button,
    ChakraProvider,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Textarea,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { FiAlertTriangle } from "react-icons/fi";
  import theme from "@/config/theme";
  
  const inputStyle = {
    borderRadius: "6px",
    background: "none",
    border: "1px solid darkgray",
    width: "100%",
  };
  
  const inputButton = {
    borderRadius: "6px",
    border: "1px solid darkgray",
    padding: "5px",
    width: "100px",
  };
  
  import Link from "next/link";
  import { sendContactForm } from "@/lib/api";
  
  const initValues = { name: "", email: "", subject: "", message: "" };
  
  const initState = { isLoading: false, values: initValues };
  
  const ContactForm = () => {
    const toast = useToast();
    const [contactForm, setContactForm] = useState(initState);
    const [touched, setTouched] = useState({});
  
    const { values, isLoading, error } = contactForm;
  
    const onBlur = ({ target }) =>
      setTouched((prev) => ({ ...prev, [target.name]: true }));
  
    const handleChange = ({ target }) =>
      setContactForm((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));
  
    const onSubmit = async () => {
      setContactForm((prev) => ({
        ...prev,
        isLoading: true,
      }));
      try {
        await sendContactForm(values);
        setTouched({});
        setContactForm(initState);
        toast({
          title: "Message sent.",
          status: "success",
          duration: 2000,
          position: "top",
        });
      } catch (error) {
        setContactForm((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    };
  
    return (
      <Container
        mt={12}
        className=" font-sulphur text-zinc-200 flex justify-around gap-10 max-[1200px]:flex max-[850px]:flex-col max-[400px]:flex-col"
      >
        <ChakraProvider theme={theme}></ChakraProvider>
        <div className="w-2/5 max-[400px]:w-full max-[850px]:w-full">
          <Heading className="text-2xl text-center">Contact Us</Heading>
          <div className="flex justify-center items-center">
            {error && (
              <div className="flex items-center justify-center">
                <span className="relative inline-flex">
                  <span className=" inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm  rounded-md text-red-800 ">
                    <span className="flex justify-center items-center gap-2">
                      <FiAlertTriangle />
                      {error}
                    </span>
                  </span>
                  <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-700"></span>
                  </span>
                </span>
              </div>
            )}
          </div>
          <FormControl isRequired mb={5} isInvalid={touched.name && !values.name}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
              style={inputStyle}
            />
            <FormErrorMessage className="text-red-700 text-sm">
              Required
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.email && !values.email}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
              style={inputStyle}
            />
            <FormErrorMessage className="text-red-700 text-sm">
              Required
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
              style={inputStyle}
            />
            <FormErrorMessage className="text-red-700 text-sm">
              Required
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            mb={5}
            isInvalid={touched.message && !values.message}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type="text"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
              style={inputStyle}
            />
            <FormErrorMessage className="text-red-700 text-sm">
              Required
            </FormErrorMessage>
          </FormControl>
          <Button
            className="hover:bg-zinc-700"
            style={inputButton}
            isLoading={isLoading}
            disabled={
              !values.name || !values.email || !values.subject || !values.message
            }
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
        
      </Container>
    );
  };
  
  export default ContactForm;
  