"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Button } from "@/app/ui/button";
import {
  Hamburger,
  Logo,
  NavUnderlineMobile,
  TimesIcon,
} from "@/app/assets/svg";
import { useRouter } from "next/navigation";
import { NavUnderline } from "@/app/assets/svg";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import JoinTelegram from '@/app/assets/community/telegram.png';

interface NavLink {
  label: string;
  path?: string;
  type: "dropdown" | "text" | "button";
  buttonType?: "shaped-disabled" | "outlined" | "shaped" | "text";
  disabled?: boolean;
  subLinks?: {
    path: string;
    icon?: JSX.Element;
    background?: string;
    title: string;
    subtitle: string;
  }[];
}

const navLinksLeft: NavLink[] = [
  {
    label: "Community",
    type: "dropdown",
    subLinks: [
      {
        title: "Telegram",
        subtitle: "Join our community on Telegram",
        path: "https://t.me/JoinAllinOneEco",
        background: 'linear-gradient(112deg,rgba(4,20,29,0.40)_14.96%,rgba(14,127,184,0.40)_85.38%)',
        icon: <Image src={JoinTelegram} alt="Telegram and Join logos stacked together" className="ml-auto max-h-[120px] w-auto" />
      },
    ],
  },
  // {
  //   label: "Community",
  //   path: "/community",
  //   type: "text",
  // },
  {
    label: "Whitepaper",
    path: "/whitepaper",
    type: "button",
    buttonType: "text",
  },
  // {
  //   label: "Products",
  //   type: "dropdown",
  //   subLinks: [
  //     {
  //       title: "Link 1",
  //       subtitle: "Link 1 subtitle",
  //       path: "/",
  //     },
  //   ],
  // },
];
const navLinksRight: NavLink[] = [
  {
    label: "Join Whitelisting",
    path: "/whitelisting",
    type: "button",
    buttonType: "shaped",
    disabled: false,
  },
  {
    label: "Join Presale",
    path: "/",
    type: "button",
    buttonType: "shaped-disabled",
    disabled: true,
  },
];
export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={clsx("transition-all duration-300 ease-in-out w-full z-50")}
      >
        <div className="h-20 w-full flex flex-col items-center justify-center">
          <div className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex justify-between items-center">
            <ul className="hidden lg:flex gap-5 items-center w-2/5">
              {navLinksLeft.map((navLink, idx) =>
                navLink.type === "dropdown" ? (
                  <NavigationMenu key={`${navLink} ${idx}`}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={`${
                            pathname === navLink.path ||
                            pathname ===
                              (navLink.subLinks && navLink?.subLinks[idx]?.path)
                              ? "text-[#F2E6E0]"
                              : "hover:text-hoverPrimary"
                          } text-[#F2E6E0] hover:text-hoverPrimary flex items-center text-[15px] p-0 uppercase font-semibold`}
                        >
                          {navLink.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="w-fit min-w-[180px] p-5">
                          {navLink.subLinks &&
                            navLink.subLinks.map((subLink, idx) => (
                              <NavigationMenuLink
                                key={idx}
                                className="transition duration-200 group"
                              >
                                <a
                                  href={subLink.path}
                                  target="_blank"
                                  className={`flex flex-col w-fit min-w-[314px] rounded-[15px] px-5 pt-6 pb-2 transition duration-200 border border-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.50)] bg-[${subLink.background}]`}
                                >
                                  <h3 className="text-[15px] mb-[5px] font-semibold">
                                    {subLink.title}
                                  </h3>
                                  <p className="text-xs">
                                    {subLink.subtitle}
                                  </p>
                                  {subLink.icon}
                                </a>
                              </NavigationMenuLink>
                            ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : navLink.type === "button" ? (
                  <Button
                    key={`${navLink} ${idx}`}
                    variant={navLink.buttonType}
                    className="font-semibold !uppercase text-[15px] transition-colors min-h-10 !h-fit"
                    disabled={
                      navLink?.disabled && navLink.disabled ? true : false
                    }
                    onClick={() => {
                      router.push(`${navLink.path}`);
                    }}
                  >
                    {navLink.label}
                  </Button>
                ) : (
                  <Link
                    key={idx}
                    href={navLink.path ? navLink.path : "/"}
                    className={`${
                      pathname === navLink.path
                        ? "text-[#F2E6E0] hover:text-hoverPrimary"
                        : ""
                    } flex items-center text-[#F2E6E0] hover:text-hoverPrimary font-semibold transition-colors uppercase`}
                  >
                    {navLink.label}
                  </Link>
                ),
              )}
            </ul>
            <Link
              href="/"
              className="flex translate-y-4 translate-x-[14px] mx-auto lg:mx-0 z-50"
            >
              <Logo className="h-[60px] md:h-full" />
            </Link>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="translate-y-2.5 hover:scale-90 active:scale-100 transition duration-200"
              >
                <Hamburger />
              </button>
            </div>
            <ul className="hidden lg:flex justify-end gap-5 items-center w-2/5">
              {navLinksRight.map((navLink, idx) => (
                <Button
                  key={idx}
                  variant={navLink.buttonType}
                  disabled={navLink.disabled}
                  className="font-semibold"
                  onClick={() => {
                    router.push(`${navLink.path}`);
                  }}
                >
                  {navLink.label}
                </Button>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center overflow-hidden z-50">
          <NavUnderline />
        </div>
        <div className="flex md:hidden justify-center items-center overflow-hidden z-50">
          <NavUnderlineMobile />
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background text-whitePrimary w-full fixed top-0 left-0 h-screen z-50 flex flex-col items-center justify-center transition-transform duration-300">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-8 right-4 sm:right-8 md:right-[50px] hover:scale-90 active:scale-100 transition duration-200"
            >
              <TimesIcon />
            </button>
            <ul className="flex flex-col gap-5 items-center">
              {navLinksRight.map((navLink, idx) => (
                <Button
                  key={idx}
                  variant={navLink.buttonType}
                  disabled={navLink.disabled}
                  className="font-semibold text-lg w-full text-center"
                  onClick={() => {
                    router.push(`${navLink.path}`);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {navLink.label}
                </Button>
              ))}
              {navLinksLeft.map((navLink, idx) => (
                <Link
                  key={idx}
                  href={navLink.path ? navLink.path : "/"}
                  className={`${
                    pathname === navLink.path
                      ? "text-[#F2E6E0] hover:text-hoverPrimary"
                      : ""
                  } flex items-center text-[#F2E6E0] hover:text-hoverPrimary font-semibold transition-colors uppercase`}
                >
                  {navLink.label}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};
