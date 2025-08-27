"use client";

import { useEffect, useState, type JSX } from "react";
import { motion } from "motion/react";
import { Mail } from "lucide-react"; // icons
import XIcon from "/icons/x.jpg";
import LinkedinIcon from "/icons/linkedin.jpeg";

type Profile = {
  name: string;
  avatar?: string;
  link: string;
  bio?: string;
  icon?: JSX.Element | JSX.Element[];
};

export default function ContactMe() {
  const [github, setGithub] = useState<Profile | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/MrRohit-01")
      .then((res) => res.json())
      .then((data) =>
        setGithub({
          name: data.name || "GitHub",
          avatar: data.avatar_url,
          link: data.html_url,
          bio: data.bio || "Check out my GitHub!",
        })
      );
  }, []);

  const socials: Profile[] = [
    github || {
      avatar: "https://unavatar.io/github/MrRohit-01",
      link: "https://github.com/MrRohit-01",
      name: "GitHub",
      bio: "Check out my GitHub!",
    },
    {
      icon: (
        <img
          src={LinkedinIcon}
          alt="LinkedIn"
          className="object-cover rounded-full w-21 h-21"
        />
      ),
      link: "https://www.linkedin.com/in/rohit-kumar-barada-a193b4235/",
      name: "LinkedIn",
      bio: "Let's connect on LinkedIn!",
    },
    {
      icon: (
        <img
          src={XIcon}
          alt="Twitter / X"
          className="object-cover rounded-full w-21 h-21"
        />
      ),
      link: "https://x.com/rohit_ku_1",
      name: "Twitter / X",
      bio: "Follow me on Twitter!",
    },
    {
      icon: <Mail size={36} className="text-red-500" />,
      link: "mailto:rohitku01@gmail.com",
      name: "Gmail",
      bio: "Send me an email!",
    },
  ];

  return (
    <div className="min-h-screen text-gray-100 flex flex-col items-center justify-center py-16 px-6">
      <h1 className="text-5xl font-bold mb-12 text-center">Contact Me</h1>

      <div className="flex flex-wrap gap-8 w-full max-w-6xl justify-center">
        {socials.map((social, i) => (
          <motion.a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl overflow-hidden shadow-lg border border-[#44444E] cursor-pointer bg-[#2A2A3C] flex flex-col items-center p-6 w-64"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {social.avatar ? (
              <img
                src={social.avatar}
                alt={social.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-gray-700"
              />
            ) : (
              <div className="w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full mb-4">
                {social.icon}
              </div>
            )}

            <h2 className="text-xl font-semibold">{social.name}</h2>
            <p className="text-sm text-gray-400 text-center mt-2">
              {social.bio}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
