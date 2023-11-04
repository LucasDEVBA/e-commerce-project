"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src={"/Top-Banner01.png"}
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Banner Inicial"
      />
    </div>
  );
}
