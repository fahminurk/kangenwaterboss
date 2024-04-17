"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const locales = ["en", "id"] as const;
  const { Link } = createSharedPathnamesNavigation({ locales });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col p-4 font-bold bg-gradient-to-t bg-blue-900">
        <div className="flex flex-col justify-center items-center">
          <img src="/enagic.png" alt="logo" className="w-20 h-20" />
          <p className="text-2xl md:text-4xl text-white">KANGEN WATER BOSS</p>
        </div>
      </div>
      <div
        id="navbar"
        className={cn(
          "p-4 border-y flex justify-between w-full bg-blue-900 z-10 sticky -top-0.5 transition-all",
          isScrolled && "bg-white/70 backdrop-blur"
        )}
      >
        <div />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Enagic</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none "
                        href="/about"
                      >
                        <img
                          src="/enagicblue.png"
                          alt=""
                          className="h-20 w-20"
                        />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          About
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          What makes Enagic different?
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/5-water-types" title="The 5 Water Types">
                    The human body is comprised of over 70% water.
                  </ListItem>
                  <ListItem
                    href="/what-is-kangen-water"
                    title="What is Kangen Water?"
                  >
                    Kangen means "return to origin" in Japanese.
                  </ListItem>
                  <ListItem
                    href="/becomes-kangen-water"
                    title="Becomes Kangen Water"
                  >
                    How your tap water becomes Kangen Water.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <Link href="/product" passHref legacyBehavior>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Product
              </NavigationMenuLink>
            </Link>
            <NavigationMenuItem>
              <Link href="/contact" passHref legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div
          className={cn(
            "flex justify-end gap-1 items-center",
            isScrolled ? "text-black" : "text-white"
          )}
        >
          <Link href="/" locale="en" className="hover:text-white/50">
            EN
          </Link>
          <div className="w-0.5 h-full bg-white" />
          <Link href="/" locale="id" className="hover:text-white/50">
            ID
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  const locales = ["en", "id"] as const;
  const { Link } = createSharedPathnamesNavigation({ locales });
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href as string}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
