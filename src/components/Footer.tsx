import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <Image
              src="/foodi.png" // Path to your image
              alt="Foodi Logo"
              width={130} // Adjust to your desired width
              height={30} // Adjust to your desired height
              className="object-contain"
            />
            <p className="text-gray-600">
              Savor the artistry where <br /> every dish is a culinary <br />{" "}
              masterpiece
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Useful Links</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/about" className="hover:text-green-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/event" className="hover:text-green-500">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-green-500">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-green-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Menu Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Main Menu</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-green-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-green-500">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-green-500">
                  Menus
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-green-500">
                  Reservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="mailto:example@email.com"
                  className="hover:text-green-500"
                >
                  mk7275374@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+923313007384" className="hover:text-green-500">
                  +92 331 300 7384
                </Link>
              </li>
              <li>Follow Us:</li>
              {/* Social Media Icons */}
              <div className="flex space-x-4 text-gray-500">
                <FaFacebook className="w-6 h-6 cursor-pointer hover:text-green-500" />
                <FaTwitter className="w-6 h-6 cursor-pointer hover:text-green-500" />
                <FaInstagram className="w-6 h-6 cursor-pointer hover:text-green-500" />
              </div>
            </ul>
          </div>
        </div>
        <div className="justify-center">
          {/* Copyright Section */}
          <div className="mt-8 text-center text-[#555555] text-xl">
            Copyright &copy; {new Date().getFullYear()} Foodi | All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
