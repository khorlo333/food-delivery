import Image from "next/image";
import LoginPage from "./login/Login";
import UploadCloudinary from "../../components/CloudinaryUpload";
import Logo from "./_components/Logo";
import Header from "./_components/Header";
import FooterLogo from "./_components/Logo footer";
import Footer from "./_components/Footer";
import FoodCard from "./_components/FoodCard";

export default function Home() {
  return (
    <div className="w-100% h-full flex flex-col gap-4">
      {/* <LoginPage /> */}
      <Header />
      {/* <UploadCloudinary /> */}
      <div className="bg-secondary h-screen">
        <Image
          width={2880}
          height={1140}
          alt="hero"
          src="https://res.cloudinary.com/dlvvsmj6j/image/upload/v1739975289/apbwkwgdzarkbglj21jr.png"
          className="w-full mb-3"
        />
        <div className="bg-primary">
          <h1 className="text-white">Category</h1>
        </div>
      </div>
      <div className="bg-slate-500 w-full ">
        <FoodCard name={"Appetizers"} />
        <FoodCard name={"Salads"} />
      </div>
      <Footer />
    </div>
  );
}
