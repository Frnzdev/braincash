"use client";

import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useUserCredit } from "@/hooks/queries/use-user-get-credit";
import { authClient } from "@/lib/auth-client";

import { Button } from "../ui/button";
import InstallPWAButton from "../install-pwa";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;
  const { data: credit } = useUserCredit(userId);

  if (!session) {
    return (
      <header className="flex items-center justify-between p-3 dark:bg-[#1C1C1C]">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={85} height={85} alt="logo BrainCash" />
          <h1 className="text-xl font-bold">BrainCash</h1>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <Button className="w-full" variant="outline" asChild>
            <Link href="/authentication" className="flex items-center gap-2">
              <LogIn /> Login
            </Link>
          </Button>
          <InstallPWAButton />
          <ModeToggle />
        </div>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between p-3 dark:bg-[#1C1C1C]">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" width={85} height={85} alt="logo BrainCash" />
        <h1 className="text-xl font-bold">BrainCash</h1>
      </Link>

      <div className="ml-auto flex items-center gap-3">
        <div className="flex items-center rounded-full bg-green-500 p-3">
          <p className="flex items-center text-2xl font-bold text-white">
            <Image
              src="/dolares.png"
              alt="Icon credits"
              width={40}
              height={40}
            />
            {credit}
          </p>
        </div>
        <InstallPWAButton />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
