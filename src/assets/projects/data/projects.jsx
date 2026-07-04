import honeyronautsGif from "../assets/projects/honeyronauts.gif";
import toribashGif from "../assets/projects/toribash-ai.gif";
import breakbeatGif from "../assets/projects/breakbeat-ai.gif";
import hanziGif from "../assets/projects/hanzi-app.gif";
import princessFinderGif from "../assets/projects/princess-finder.gif";
import princessGlassGif from "../assets/projects/princess-glass.gif";
import princessITunesGif from "../assets/projects/princess-itunes.gif";

export const projects = [
  {
    title: "Honeyronauts",
    category: "Dream Interface",
    description:
      "Android dream journal and lucid dreaming companion built around sleep tracking, dream notes and future ESP32-S3 hardware.",
    tags: ["React", "Capacitor", "Android", "ESP32-S3"],
    image: honeyronautsGif,
  },
  {
    title: "Toribash AI",
    category: "AI Locomotion",
    description:
      "Experimental imitation-learning pipeline using replay datasets, GRU models, Lua runners and automated evaluation loops.",
    tags: ["Python", "PyTorch", "Lua", "GRU"],
    image: toribashGif,
  },
  {
    title: "BreakbeatAI",
    category: "Audio Intelligence",
    description:
      "Automatic drum recognition, sample slicing and intelligent breakbeat variation generation.",
    tags: ["Python", "DSP", "Audio", "AI"],
    image: breakbeatGif,
  },
  {
    title: "Hanzi App",
    category: "Learning Tool",
    description:
      "Mandarin learning application using active recall, character practice, vocabulary progression and local statistics.",
    tags: ["React", "Vite", "Chinese", "UX"],
    image: hanziGif,
  },
  {
    title: "PrincessFinder",
    category: "Desktop Tool",
    description:
      "Custom Linux file explorer experiment focused on fast navigation, visual clarity and workflow automation.",
    tags: ["Python", "Linux", "UI", "Desktop"],
    image: princessFinderGif,
  },
  {
    title: "PrincessGlass",
    category: "Interface Experiment",
    description:
      "Visual interface experiment exploring glassmorphism, desktop aesthetics and custom interaction patterns.",
    tags: ["UI", "Design", "Linux", "Prototype"],
    image: princessGlassGif,
  },
  {
    title: "Princess iTunes",
    category: "Music Interface",
    description:
      "Music library interface inspired by classic media players, rebuilt as a personal workflow and design experiment.",
    tags: ["Music", "UI", "Desktop", "Prototype"],
    image: princessITunesGif,
  },
];