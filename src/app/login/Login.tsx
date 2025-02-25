import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className=" w-[416px] h-[288px] absolute top-[326px] left-[100px] flex flex-col gap-6">
      <Button variant="outline" className="w-5">
        <ChevronLeft />
      </Button>
      <div>
        <h2 className="font-bold">Create your account</h2>
        <p>Sign up to explore your favorite dishes.</p>
      </div>
      <Input />
      <Button variant="ghost" className="bg-slate-400 text-white">
        Let's Go
      </Button>
      <p className="self-center">
        Already have an account?{" "}
        <span className="text-blue-500 cursor-pointer">Log in</span>
      </p>
    </div>
  );
}
