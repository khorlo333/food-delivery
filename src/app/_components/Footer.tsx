import { FacebookIcon, InstagramIcon } from "lucide-react";
import FooterLogo from "./Logo footer";

export default function Footer() {
  return (
    <div className="w-full justify-between h-[355px] bg-primary text-white  flex flex-col">
      <div className="flex w-full gap-8 h-[92px] bg-[#ef4444] text-white items-center justify-center mt-8">
        {Array.from(Array(8)).map((_: any, index: any) => {
          return (
            <div key={index} className="h-9 text-[30px] text-nowrap">
              {"Fresh fast delivered"}
            </div>
          );
        })}
      </div>
      <div className="flex gap-[220px]">
        <FooterLogo />
        <div>
          <h2>NOMNOM</h2>
          <p>Home</p>
          <p>Contact us</p>
          <p>Delivery zone</p>
        </div>
        <div>
          <h2>MENU</h2>
          <p>Appetizers</p>
          <p>Salads</p>
          <p>Pizzas</p>
          <p>Lunch favorites</p>
          <p>Main dishes</p>
        </div>
        <div>
          <h2> </h2>
          <p>Side dish</p>
          <p>Brunch</p>
          <p>Dessserts</p>
          <p>Beverages</p>
          <p>Fish & Sea foods</p>
        </div>
        <div>
          <h2>FOLLOW US</h2>
          <div className="flex">
            <FacebookIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
