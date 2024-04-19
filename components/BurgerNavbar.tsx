import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "./ui/button";
import { CiMenuKebab } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { Link, usePathname, useRouter } from "@/navigation";
import { useTranslations } from "next-intl";

const BurgerNavbar: React.FC<{ isScrolled: boolean; locale: string }> = ({
  isScrolled,
  locale,
}) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Navbar");
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: string) => {
    router.push(pathname, { locale: e });
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          className={cn(
            "rounded-full p-2 text-white md:hidden",
            open && "bg-white text-black",
            isScrolled && "bg-blue-900"
          )}
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
        >
          <CiMenuKebab className="h-8 w-8" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <div className="w-14" />
            <img src="/enagic_independent.png" alt="" className="h-16" />
            <Select onValueChange={handleChange} defaultValue={locale}>
              <SelectTrigger className="max-w-max bg-blue-900 text-white">
                <SelectValue defaultValue={locale} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="id">ID</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DrawerHeader>
        <DrawerFooter className="">
          <Link
            href={"/"}
            onClick={() => setOpen(!open)}
            className="bg-blue-900 text-white rounded-lg px-3 py-4 font-medium transition-all hover:bg-blue-900/90 cursor-pointer"
          >
            Home
          </Link>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Enagic</AccordionTrigger>
              <AccordionContent>
                <Link href={"/about"} onClick={() => setOpen(!open)}>
                  <p className="font-bold">{t("About.title")}</p>
                  <p className="font-light">{t("About.desc")}</p>
                </Link>
              </AccordionContent>
              <AccordionContent>
                <Link href={"/5-water-types"} onClick={() => setOpen(!open)}>
                  <p className="font-bold">{t("types.title")}</p>
                  <p className="font-light">{t("types.desc")}</p>
                </Link>
              </AccordionContent>
              <AccordionContent>
                <Link
                  href={"/what-is-kangen-water"}
                  onClick={() => setOpen(!open)}
                >
                  <p className="font-bold">{t("kangen.title")}</p>
                  <p className="font-light">{t("kangen.desc")}</p>
                </Link>
              </AccordionContent>
              <AccordionContent>
                <Link
                  href={"/becomes-kangen-water"}
                  onClick={() => setOpen(!open)}
                >
                  <p className="font-bold">{t("becomes.title")}</p>
                  <p className="font-light">{t("becomes.desc")}</p>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href={"/product"}
            onClick={() => setOpen(!open)}
            className="bg-blue-900 text-white rounded-lg px-3 py-4 font-medium transition-all hover:bg-blue-900/90 cursor-pointer"
          >
            Product
          </Link>
          <Link
            href={"/contact"}
            onClick={() => setOpen(!open)}
            className="bg-blue-900 text-white rounded-lg px-3 py-4 font-medium transition-all hover:bg-blue-900/90 cursor-pointer"
          >
            Contact
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BurgerNavbar;
