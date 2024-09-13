import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaLightbulb,
} from "react-icons/fa";

export const contentTemplates = [
  {
    name: "Youtube Video Des", //YOUTUbe
    desc: "An AI tool that generate content",
    category: "Youtube",

    icon: FaYoutube,
    aiPromp:
      "Give me youtube video description idea based on give video description and title and give me in rich text editor format",
    slug: "youtube-descriiton",
    form: [
      {
        label: "Youtube Video Description Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter Youtube Video Description Outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Idea", //YT video idea
    desc: "An AI tool to generate YouTube video idea based on given description",
    category: "YouTube",

    icon: FaLightbulb,
    aiPromp: "Give me a few examples of given video niche and outline topic",
    slug: "generate-youtube-video-idea",
    form: [
      {
        label: "Youtube Video Description Title",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Video  Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Hashtags", //IG
    desc: "An AI tool to generate Instagram hastags content",
    category: "Instagram",

    icon: FaInstagram,
    aiPromp: "Give me a few examples of instagram hashtags on given niche",
    slug: "generate-instagram-description",
    form: [
      {
        label: "Youtube Video Description Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Tiktok Hashtags", //TikTok
    desc: "An AI tool to generate TikTok keyword idea based on your content",
    category: "TikTok",

    icon: FaTiktok,
    aiPromp: "Give me a few examples of keywords on given niche",
    slug: "generate-tiktok-hashtags",
    form: [
      {
        label: "Enter Your Post Niche ",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter post outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Linkedin Post", //LinkedIn
    desc: "An AI tool to generate LinkedIn Post idea based on your content",
    category: "Linkedin",

    icon: FaLinkedin,
    aiPromp: "Give me a few examples of LinkedIn Post idea on given topic",
    slug: "generate-likedin-post",
    form: [
      {
        label: "Enter topic for LinkedIn Post",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Linkedin Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];
