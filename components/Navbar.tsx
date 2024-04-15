"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const components: { title: string; href: string }[] = [
  {
    title: "Leveluk Kangen 8",
    href: "/product/Leveluk-Kangen-8",
  },
  {
    title: "Leveluk JR4",
    href: "/product/Leveluk-JR4",
  },
  {
    title: "Leveluk SUPER 501",
    href: "/product/Leveluk-SUPER-501",
  },
  {
    title: "Leveluk SD 501",
    href: "/product/Leveluk-SD-501",
  },
  {
    title: "Leveluk SD 501 Platinum",
    href: "/product/Leveluk-SD-501-Platinum",
  },
  {
    title: "Anespa DX",
    href: "/product/Anespa-DX",
  },
];

const Navbar = () => {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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
          "p-4 border-y flex justify-center bg-blue-900 z-10 sticky -top-0.5 transition-all",
          isScrolled && "bg-white/70 backdrop-blur"
        )}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
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
                      <a
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
                      </a>
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
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
