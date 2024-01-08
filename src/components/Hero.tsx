// Hero.tsx
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="container mx-auto flex max-w-4xl px-10
     flex-col-reverse md:flex-row md:items-center"
    >
      <div className="md:w-3/4">
        <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
          Discover Qtag
        </h2>
        <p className="mt-4 text-gray-600">
          Dive into a world where pet safety meets technology. Our innovative QR
          code dog tags blend style with functionality, ensuring your furry
          friend is always a scan away from home.
        </p>
        <p className="mt-2 text-gray-600">
          From vibrant colors to customizable designs, each tag tells a story -
          your pet's story. Welcome to the future of pet care with Qtag.
        </p>
      </div>
      <div className="flex w-full justify-center md:w-1/2">
        <Image
          width={300}
          height={300}
          className="rounded-lg shadow-md"
          src="/hero-img.png"
          alt="Discover Qtag"
        />
      </div>
    </section>
  );
};

export default Hero;
