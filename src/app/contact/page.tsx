"use client";

import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/constants";
import { Linkedin, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, []);

  const renderIcon = (icon: string) => {
    if (icon === "twitter") {
      return <Image src="/icons/x-icon.svg" alt="twitter-icon" width={24} height={24} className="h-6 w-6 text-white" />;
    }
    if (icon === "github") {
      return (
        <Image src="/icons/github-icon.svg" alt="github-icon" width={24} height={24} className="h-6 w-6 text-primary" />
      );
    }

    return <Linkedin className="h-6 w-6 text-primary" />;
  };

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-secondary-400">
            Have a question or want to get in touch? Fill out the form below or reach out to us using the contact
            information provided.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium text-xl">Contact Details</h3>
              <div className="flex items-center gap-4">
                <MailIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-secondary-400">
                    <a className="hover:underline" href="mailto:msmuhammadsaad78@gmail.com">
                      msmuhammadsaad78@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-secondary-400">
                    <a className="hover:underline" href="tel:+923167483813">
                      +92 (316) 748-3813
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-xl">Social Links</h3>
              {socialLinks.map(({ href, label, icon }) => (
                <div className="flex items-center gap-4" key={href}>
                  {renderIcon(icon)}
                  <div>
                    <h3 className="font-medium">{label}</h3>
                    <p className="text-secondary-400">
                      <a className="hover:underline" href={href}>
                        {href}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <form className="space-y-4" ref={formRef} action={"https://formspree.io/f/mnnajlbp"} method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required name="sender_name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="Enter your email" name="sender_email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} placeholder="Enter your message" required name="sender_message" />
              </div>
              <SubmitButton className="w-full bg-theme-primary hover:bg-theme-primary/50 text-white">
                Submit
              </SubmitButton>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
