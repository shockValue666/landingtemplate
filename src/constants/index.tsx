import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../../public/profile-pictures/user1.jpg";
import user2 from "../../public/profile-pictures/user2.jpg";
import user3 from "../../public/profile-pictures/user3.jpg";
import user4 from "../../public/profile-pictures/user4.jpg";
import user5 from "../../public/profile-pictures/user5.jpg";
import user6 from "../../public/profile-pictures/user6.jpg";

export const navItems = [
  { label: "API Calls", href: "#" },
  { label: "Payments Database", href: "#" },
  { label: "Gambling Games", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Alice Thompson",
    company: "Crypto Solutions",
    text: "SolanaTX transformed our transaction process. The API is incredibly easy to use and integrates seamlessly with our platform.",
    image: user1,
  },
  {
    user: "Mark Evans",
    company: "Blockchain Innovators",
    text: "The payment database feature has been a game-changer for us. Real-time updates and advanced analytics have made managing transactions effortless.",
    image: user2,
  },
  {
    user: "Samantha Lee",
    company: "GameHub",
    text: "Offering provably fair gambling games through SolanaTX has significantly boosted user engagement on our platform.",
    image: user3,
  },
  // {
  //   user: "Ronee Brown",
  //   company: "Fusion Dynamics",
  //   text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  //   image: user4,
  // },
  // {
  //   user: "Michael Wilson",
  //   company: "Visionary Creations",
  //   text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  //   image: user5,
  // },
  // {
  //   user: "Emily Davis",
  //   company: "Synergy Systems",
  //   text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  //   image: user6,
  // },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Coin Swaps",
    description:
      "Instantly swap coins with our simple API call. Efficient and secure transactions made easy.",
  },
  {
    icon: <ShieldHalf />,
    text: "Comprehensive Payment Records",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <Fingerprint />,
    text: "Real-Time Updates",
    description:
      "Stay up-to-date with real-time updates on all payment activities.",
  },
  {
    icon: <BatteryCharging />,
    text: "Advanced Analytics",
    description:
      "Gain insights into payment trends and user behavior with our advanced analytics tools.",
  },
  {
    icon: <PlugZap />,
    text: "Gambling Games",
    description:
      "Offer your users a fair gaming experience with our provably fair gambling games API.",
  },
  {
    icon: <GlobeLock />,
    text: "Seamless Integration",
    description:
      "Easily integrate our gambling games into your platform with minimal effort.",
  },
];

export const checklistItems = [
  {
    title: "Provably Fair Games",
    description:
      "Offer your users a fair gaming experience with our provably fair gambling games API.",
  },
  {
    title: "Swap any coin on Raydium",
    description:
      "Minimal transaction time, highly efficient and secure. Instantly swap coins with our simple API call.",
  },
  {
    title: "Wide Variety of Games",
    description:
      "Choose from a wide range of gambling games, including slots, poker, and roulette.",
  },
  {
    title: "Seamless Integration",
    description:
      "Easily integrate our gambling games into your platform with minimal effort.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic API access",
      "1,000 transactions/month",
      "Community support",
      // "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$50",
    features: [
      "Advanced API access",
      "10,000 transactions/month",
      "Email Support",
      // "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "Contact us",
    features: [
      "Unlimited API access",
      "Dedicated Support",
      "Custom Integrations",
      // "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];