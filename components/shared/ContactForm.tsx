import { useState } from "react";
import { sendMail } from "@/lib/mail"; // Assuming mail.ts is in the same directory
import { Button } from "../ui/button";
import Image from "next/image";
import { useToast } from "@chakra-ui/react";

const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate if all fields are filled
      if (
        formData.name &&
        formData.email &&
        formData.subject &&
        formData.message
      ) {
        await sendMail({
          to: "josh@ktlweb.dev", // Replace with your email address
          name: formData.name,
          subject: formData.subject,
          body: `<p>${formData.message}</p>`,
        });
        toast({
            title: "Message sent.",
            status: "success",
            duration: 2000,
            position: "top",
          });
      } else {
        // Handle empty fields, display an error message or prevent form submission
        console.log("Please fill in all the fields");
      }
    } catch (error) {
      // Handle error while sending email
      toast({
        title: "Message failed.",
        status: "error",
        duration: 2000,
        position: "top",
      });
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className="flex-center flex-col mt-1">
        <div className="flex justify-center items-center">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={235}
            height={55}
          />
        </div>
        <div className="p-2">
          <Image
            src="assets/images/mail.svg"
            alt="email contact"
            width={30}
            height={30}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex-center flex-col w-full gap-1"
        >
          <div className="flex flex-col w-full">
            <label className="text-sky-700 pb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sky-700 pb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sky-700 pb-1">Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sky-700 pb-1">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea"
            />
          </div>
          <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-700">
            Send Email
          </Button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
