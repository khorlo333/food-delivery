import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="flex flex-col gap-3 text-white">
      <Image
        width={40}
        height={40}
        alt="logo"
        src="https://res.cloudinary.com/dlvvsmj6j/image/upload/v1739974771/cqpoxwrkvc9xlnhwaafj.png"
      />
      <div>
        <h2>
          Nom<span className="text-[#ef4444]">Nom</span>
        </h2>
        <p>Swift delivery</p>
      </div>
    </div>
  );
}
