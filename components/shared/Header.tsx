'use client'

import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center md:justify-between justify-center">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={240}
            height={53.14}
            alt="KTL logo"
          />
        </Link>

        <div className="md:flex justify-end gap-3 hidden">
          <Dialog>
            <DialogTrigger>
              <div className="h-11 rounded-full px-8 bg-sky-500 hover:bg-sky-700 flex-center text-md text-white">Contact</div>
            </DialogTrigger>
            <DialogContent>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
