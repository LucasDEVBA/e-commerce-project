import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-accent">
      <div className="flex items-center gap-8 bg-accent px-8 py-4">
        <Image
          src={"/logo-dfa.svg"}
          alt="logo Duty Free Americas"
          width={120}
          height={120}
        />
        <p className="text-[0.825rem] font-semibold">
          © 2023 Duty Free Americas
        </p>
      </div>
      <div className="flex justify-between px-4">
        <p className="text-[0.625rem] font-semibold">
          Desenvolvido utilizando NextJS
        </p>

        <p className="text-[0.625rem] font-semibold">@Lucas Costa</p>
      </div>
    </div>
  );
};

export default Footer;
