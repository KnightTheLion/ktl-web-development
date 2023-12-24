import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Image
          src="/assets/images/logo.svg"
          width={128}
          height={38}
          alt="logo"
        />
        <p>© 2023 KNIGHT THE LION. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
