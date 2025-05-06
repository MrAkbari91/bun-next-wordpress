"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

import { footerLinks, socialLinks } from "../lib/footerData";

const iconMap = {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
};

export default function FooterNav() {
  const logoSrc = process.env.NEXT_PUBLIC_LOGO_URL || "";
  const logoName = process.env.NEXT_PUBLIC_SITE_NAME || "";
  const copyright = process.env.NEXT_PUBLIC_COPYRIGHT || "Dhruv Akbari™";

  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="/"
              // src={logoSrc}
              // alt={logoName}
              name={logoName}
              className="logo"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <FooterTitle
                  title={section.charAt(0).toUpperCase() + section.slice(1)}
                />
                <FooterLinkGroup col>
                  {links.map((link) => (
                    <FooterLink key={link.name} href={link.href}>
                      {link.name}
                    </FooterLink>
                  ))}
                </FooterLinkGroup>
              </div>
            ))}
          </div>
        </div>

        <FooterDivider />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="/"
            by={copyright}
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {socialLinks.map(({ href, icon }, idx) => {
              const IconComponent = iconMap[icon];
              return (
                IconComponent && (
                  <FooterIcon key={idx} href={href} icon={IconComponent} />
                )
              );
            })}
          </div>
        </div>
      </div>
    </Footer>
  );
}
