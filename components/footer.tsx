"use client";

import React from "react";
import {
  FaBlog,
  FaGithub,
  FaHashnode,
  FaInstagram,
  FaLinkedinIn,
  FaRss,
  FaXTwitter,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";
import { ThemeSwitch } from "./theme-switch";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon, size = 18 }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={size} />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-4 transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} size={19} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} size={19} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} size={19} />
      <SocialLink href={socialLinks.blog} icon={FaHashnode} size={19} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-1 xl:mx-auto xl:w-full mt-4 p-4  border dark:border-border/60 border-b-0 rounded-bl-none rounded-br-none rounded-lg">
      <div className="flex justify-between">
        <div>
        <time className="text-sm">© {YEAR}</time>{" "}
          <a
            className="hover:underline appearance-none text-sm"
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Techlism
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <SocialLinks />
          <ThemeSwitch/>
        </div>
      </div>
      
    </footer>
  );
}
