import {
  Calendar,
  Home,
  Mail,
  Pencil,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

// Data config with lucide-react icons
const DATA = {
  navbar: [
    { href: "#", icon: Home, label: "Home" },
    { href: "#", icon: Pencil, label: "Blog" },
    { href: "#", icon: Calendar, label: "Calendar" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "#",
        icon: Github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Linkedin,
      },
      Twitter: {
        name: "Twitter",
        url: "#",
        icon: Twitter,
      },
      YouTube: {
        name: "YouTube",
        url: "#",
        icon: Youtube,
      },
      Email: {
        name: "Send Email",
        url: "mailto:you@example.com",
        icon: Mail,
      },
    },
  },
};

export function DockDemo() {
  return (
    <div className="flex flex-col items-center justify-center">

  <TooltipProvider>
        <Dock direction="middle">
          {/* Navbar Icons */}
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full" />

          {/* Social Icons */}
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full py-2" />

          {/* Mode Toggle */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                {/* <ModeToggle className="rounded-full" /> */}
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
