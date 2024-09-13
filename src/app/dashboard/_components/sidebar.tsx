"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { CreditCard, History, WandSparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuList = [
  {
    name: "Magic(ai) Tools",
    icon: WandSparkles,
    path: "/dashboard",
  },
  {
    name: "Output(Ads) history",
    icon: History,
    path: "/dashboard/history",
  },
  {
    name: "Upgrade",
    icon: CreditCard,
    path: "/dashboard/upgrade",
  },
];

export const Sidebar = () => {
  const path = usePathname();

  console.log("path:", path);

  return (
    <div className="p-4 md:p-6 bg-white w-full h-screen flex flex-col">
      <Logo />
      <div className="mt-8 flex-1 flex flex-col">
        {menuList.map((menu) => (
          <Link
            href={menu.path}
            key={menu.name}
            className={cn(
              "flex gap-2 mb-2 p-4 hover:bg-primary hover:text-white cursor-pointer rounded-lg items-center",
              path == menu.path && "bg-primary text-white"
            )}
          >
            <menu.icon className="h-5 w-5 md:h-6 md:w-6"></menu.icon>
            <h2 className="text-base md:text-lg">{menu.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
