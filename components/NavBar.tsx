"use client";
import { HomeIcon, User2, MenuIcon } from "lucide-react";
import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const onChange = (open: boolean) => {
    setisOpen(open);
  };
  return (
    <>
      <header className="sticky top-0 bg-white mb-3">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setisOpen(!isOpen);
                }}
              >
                <MenuIcon />
              </Button>

              <div className="ml-4 flex lg:ml-0 pr-2 border-r">
                <Link href="/">
                  home
                </Link>
                <Link href="/">
                  home
                </Link>
                <Link href="/">
                  home
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
      <Sheet open={isOpen} onOpenChange={onChange}>
        <SheetTrigger></SheetTrigger>
        <SheetContent
          side="left"
          className="sticky top-0 h-screen w-56 text-gray-800 p-4 border-r"
        >
          <div className="flex items-center mb-4 space-x-1">
            <img
              alt="Company Logo"
              height="30"
              src="/placeholder.svg"
              style={{
                aspectRatio: "30/30",
                objectFit: "cover",
              }}
              width="30"
            />
            <h1 className="text-lg font-medium">Dme</h1>
          </div>
          <nav className="space-y-2">
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <HomeIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </button>
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <User2 className="w-4 h-4" />
              <span className="text-sm font-medium">Accounts</span>
            </button>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavBar;
