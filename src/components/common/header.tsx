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

  return (
    <header className="flex flex-wrap items-center justify-between p-3 dark:bg-[#1C1C1C]">
      {/* Logo */}
      <Link href="/" className="flex flex-shrink-0 items-center gap-2">
        <Image
          src="/logo.png"
          width={60}
          height={60}
          alt="logo BrainCash"
          className="sm:h-[85px] sm:w-[85px]"
        />
        <h1 className="text-lg font-bold sm:text-xl">BrainCash</h1>
      </Link>

      <div className="ml-auto flex flex-wrap items-center gap-3">
        {session ? (
          <div className="flex max-w-[150px] min-w-0 items-center gap-2 rounded-full bg-green-500 p-2 sm:p-3">
            <Image
              src="/dolares.png"
              alt="Icon credits"
              width={30}
              height={30}
              className="flex-shrink-0 sm:h-10 sm:w-10"
            />
            <p className="min-w-0 truncate text-lg font-bold text-white sm:text-2xl">
              {credit}
            </p>
          </div>
        ) : (
          <Link href="/authentication">
            <Button variant="outline" className="flex items-center gap-2">
              <LogIn />
              Login
            </Button>
          </Link>
        )}

        <InstallPWAButton />
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
