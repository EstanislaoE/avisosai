import React from "react";
import { CategoryProps } from "./categories";
import { cn } from "@/lib/utils";

export const CategoryItem = ({ name, value }: CategoryProps) => {
  return (
    <button
      className={cn(
        "py-2 px-4 text-sm border rounded-full flex items-center cursor-pointer"
      )}
    >
      {name}
    </button>
  );
};
