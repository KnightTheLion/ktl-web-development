import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="wrapper border border-green-600 sm:border-red-500 md:border-yellow-500 lg:border-black xl:border-purple-500 grid grid-cols-1 w-full">
        <div className="flex flex-col justify-center p-2 gap-2 text-center">
          <h1 className="text-6xl xl:text-7xl font-bold ">
            Knight
            The 
            Lion
          </h1>
          <h2 className="text-2xl font-semibold">
            Web Development / Web Design
          </h2>
        </div>
        <div className="flex justify-center py-5 md:py-10">
          <Image
            src="/assets/images/hero.webp"
            alt="hero"
            width={1000}
            height={1000}
            className="hero"
          />
          <div className="flex flex-col justify-center gap-3 p-5 ">
            <h3 className="h3-bold">Joshua Mitchell</h3>
            <a href="mailto:josh@ktlweb.dev" className="p-regular-20">
              <div className="flex gap-3">
                <Image
                  src="assets/images/mail.svg"
                  alt="email contact"
                  width={28}
                  height={28}
                />
                <span>josh@ktlweb.dev</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
