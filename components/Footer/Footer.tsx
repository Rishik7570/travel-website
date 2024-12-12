import { FC } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

type QuickLink = {
  title: string;
  href: string;
};

type ContactInfo = {
  location: string;
  phone: string;
  email: string;
};

interface FooterProps {
  quickLinks?: QuickLink[];
  contactInfo?: ContactInfo;
}

const Footer: FC<FooterProps> = ({
  quickLinks = [
    { title: "Take Climate Action", href: "/action" },
    { title: "Projects", href: "/projects" },
    { title: "Why Us", href: "/why-us" },
    { title: "About Us", href: "/about" },
  ],
  contactInfo = {
    location: "Forest Gump Oy Nuusialaistentie 4 LT 00280 Helsinki",
    phone: "0123 456 789",
    email: "info@tree4climate.com",
  },
}) => {
  return (
    <footer className="relative w-full mt-40">
      <div className="absolute left-0 top-[-80px] z-10 h-48 w-1/2">
        {/* Background Image Container */}
        <div className="relative h-full w-full">
          {/* Background Image */}
          <Image
            src="/assets/footer_bg.svg"
            alt="Footer background"
            className="w-[70%] h-auto"
            width={100}
            height={100}
            priority
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center top-[52px] w-[70%]">
            <div className="px-8">
              <h2 className="mb-4 text-5xl font-bold text-white text-center">
                Stay Connected
              </h2>
              <p className="mb-4 text-white text-center">
                Get updates on our restorative initiatives sent straight to your
                inbox.
              </p>
              <div className="relative flex justify-center">
                <div className="flex w-full max-w-md items-center rounded-lg bg-transparent border border-white p-1">
                  <div className="flex items-center pl-3">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter email id..."
                    className="flex-1 border-none bg-transparent px-3 py-2 outline-none placeholder:text-white"
                  />
                  <button className="rounded-lg bg-white px-6 py-2 font-semibold text-black transition hover:bg-yellow-600">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="min-h-[300px] bg-[#1F2724] pt-4">
        <div className="container mx-auto grid grid-cols-2">
          <div className="col-span-1"></div>

          {/* Right side */}
          <div className="col-span-1 grid grid-cols-2 gap-8 p-8">
            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={-index}>
                    <a
                      href={link.href}
                      className="text-white hover:text-yellow-500"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">Contact Us</h3>
              <div className="space-y-2 text-white">
                <p>
                  <span className="text-yellow">Location : </span>
                  <br />
                  {contactInfo.location}
                </p>
                <p>
                  <span className="text-yellow">Phone : </span>
                  <br />
                  {contactInfo.phone}
                </p>
                <p>
                  <span className="text-yellow">Email : </span>
                  <br />
                  {contactInfo.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4">
          <div className="container mx-auto px-8 text-white">
            <p>
              Copyright © 2024{" "}
              <span className="text-yellow">Trees4climate</span>. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
