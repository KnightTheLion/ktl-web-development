import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Image
          src="/assets/images/footer-logo.svg"
          width={125}
          height={27.68}
          alt="logo"
        />
        <p className="p-medium-14 text-sky-700">© 2023 KNIGHT THE LION. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
