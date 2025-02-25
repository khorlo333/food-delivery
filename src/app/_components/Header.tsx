import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex w-full h-[60px] justify-between items-center px-[60px] bg-primary">
      <Link href="http://localhost:3000/">
        <Logo />
      </Link>

      <div className="flex gap-3">
        <Link href="http://localhost:3000/login/">
          <Button variant="secondary" className="rounded-[20px]">
            Sign up
          </Button>
        </Link>
        <Button className="bg-[#ef4444] rounded-[20px]">Log in</Button>
      </div>
    </div>
  );
}
