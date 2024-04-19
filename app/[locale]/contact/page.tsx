"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const page = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const t = useTranslations("Contact");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.current) {
      return toast.error("Something went wrong");
    }

    const formData = new FormData(form.current);
    const name = formData.get("from_name") as string;
    const email = formData.get("from_email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return toast.error("Please fill in all fields");
    }

    emailjs
      .sendForm("service_gurnsc2", "template_kpeoyjq", form.current, {
        publicKey: "y60qGeWlSaVMhAgKy",
      })
      .then(() => {
        toast.success("email sent");
      })
      .catch((err) => {
        toast.error(err.text);
      });
  }

  return (
    <div className=" flex flex-col gap-10 py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center gap-5">
            <img src="/arie.jpg" alt="" className="w-52 h-52 object-cover" />
            <div className="flex flex-col flex-1 justify-center items-center">
              <p className="font-bold text-xl md:text-4xl">ARIE SUBIJANTO</p>
              <p className="text-sm md:text-base font-light">
                DISTRIBUTOR - 6A
              </p>
            </div>
          </div>

          <p className="text-justify font-light">{t("title")}</p>
          <p className="font-bold">{t("desc")}</p>
          <p className="text-justify font-light">
            Jl. Tiban BTN Blok S No. 57, Tiban Indah, Sekupang, Kota Batam,
            Kepulauan Riau, Indonesia.
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5 p-5 rounded-lg bg-blue-900"
        >
          <div className="flex flex-col gap-2">
            <label className="text-white">Name</label>
            <Input type="text" name="from_name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white">Email</label>
            <Input type="email" name="from_email" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white">Message</label>
            <Textarea name="message" />
          </div>
          <Button
            type="submit"
            value="Send"
            className="w-full bg-white text-black hover:bg-white/50"
          >
            Submit
          </Button>
        </form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.8739635112297!2d103.9808015759949!3d1.119586046791428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98b8b6a67e76f%3A0x4d23d6e77bb3eb59!2sKangen%20water%20Batam%20Joss!5e0!3m2!1sen!2sid!4v1713250984655!5m2!1sen!2sid"
        className="w-full"
        height="600"
        loading="lazy"
      />
    </div>
  );
};

export default page;
