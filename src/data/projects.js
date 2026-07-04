import honeyronautsGif from "../assets/projects/honeyronauts.gif";
import toribashGif from "../assets/projects/toribash-ai.gif";
import breakbeatGif from "../assets/projects/breakbeat-ai.gif";
import hanziGif from "../assets/projects/hanzi-app.gif";
import princessFinderGif from "../assets/projects/princess-finder.gif";
import princessGlassGif from "../assets/projects/princess-glass.gif";
import princessITunesGif from "../assets/projects/princess-itunes.gif";

export const projects = [
  {
    slug: "honeyronauts",
    title: "Honeyronauts",
    category: "Dream Interface",
    year: "2026 — Present",
    type: "Personal Research",
    platform: "Android / Web",
    description:
      "Android dream journal and lucid dreaming companion built around sleep tracking, dream notes and future ESP32-S3 hardware.",
    tags: ["React", "Capacitor", "Android", "ESP32-S3"],
    image: honeyronautsGif,
    objectPosition: "center 100px",
    architecture: ["React", "Capacitor", "Android", "Local Data", "ESP32-S3", "Lucid Mask"],
    roadmap: [
      { label: "Dream journal", done: true },
      { label: "Android prototype", done: true },
      { label: "Dream statistics", done: true },
      { label: "Sleep tracking", done: false },
      { label: "ESP32-S3 integration", done: false },
      { label: "Lucid dreaming mask", done: false },
    ],
    caseStudy: {
      lead:
        "A dream journaling application exploring lucid dreaming, sleep tracking and future wearable sleep interfaces.",
      overview:
        "Honeyronauts started as a personal dream journal and evolved into a broader experiment around dream interfaces. The goal is to create a soft, fast and beautiful tool that still feels usable immediately after waking up.",
      problem:
        "Most dream journaling apps feel generic and disconnected from the strange, fragile state of waking memory.",
      solution:
        "Honeyronauts focuses on speed, atmosphere and structure: capture the dream quickly, keep the interface calm, then turn repeated notes into useful patterns.",
      approach:
        "The app is built with React and Capacitor so the same interface can run as a web prototype and Android app while staying ready for future hardware experiments.",
      nextSteps:
        "The next phase is improving Android polish, adding deeper sleep statistics and preparing communication with ESP32-S3 hardware.",
    },
  },
  {
    slug: "toribash-ai",
    title: "Toribash AI",
    category: "AI Locomotion",
    year: "2026 — Present",
    type: "AI Research",
    platform: "Python / Toribash",
    description:
      "Experimental imitation-learning pipeline using replay datasets, GRU models, Lua runners and automated evaluation loops.",
    tags: ["Python", "PyTorch", "Lua", "GRU"],
    image: toribashGif,
    architecture: ["Replays", "Dataset", "GRU", "PyTorch", "Lua Runner", "Evaluation"],
    roadmap: [
      { label: "Replay extraction", done: true },
      { label: "Sequence dataset", done: true },
      { label: "GRU training", done: true },
      { label: "Lua evaluation runner", done: true },
      { label: "Stable walking", done: false },
      { label: "Parkour navigation", done: false },
    ],
    caseStudy: {
      lead:
        "An AI locomotion experiment trying to teach a Toribash character how to move from real player replays.",
      overview:
        "Toribash AI is a long-running research project about movement, imitation and unstable bodies. It uses player replay data to generate motion inside a physics-heavy game where small joint errors quickly become falls.",
      problem:
        "Learning locomotion is hard because every action affects balance, momentum and future recovery.",
      solution:
        "The project builds a pipeline around replay parsing, sequence datasets, neural prediction and automated in-game evaluation.",
      approach:
        "Python prepares datasets, PyTorch trains GRU models, and Lua scripts evaluate generated movement directly inside Toribash.",
      nextSteps:
        "The next goal is stabilizing walk behavior, merging motion branches and moving toward parkour-like navigation from point A to point B.",
    },
  },
  {
    slug: "breakbeat-ai",
    title: "BreakbeatAI",
    category: "Audio Intelligence",
    year: "2026 — Present",
    type: "Audio Tool",
    platform: "Desktop",
    description:
      "Automatic drum recognition, sample slicing and intelligent breakbeat variation generation.",
    tags: ["Python", "DSP", "Audio", "AI"],
    image: breakbeatGif,
    architecture: ["Audio File", "Auto Slice", "Drum Detection", "Pattern Grid", "Variation Engine"],
    roadmap: [
      { label: "Waveform preview", done: true },
      { label: "Auto slicing", done: true },
      { label: "Kick / snare / hat detection", done: true },
      { label: "Random variations", done: true },
      { label: "Cleaner drum classification", done: false },
      { label: "Tracker workflow", done: false },
    ],
    caseStudy: {
      lead:
        "An audio tool for slicing drum breaks, recognizing hits and generating new rhythmic variations.",
      overview:
        "BreakbeatAI explores how classic breakbeat workflows can become more intelligent without losing their hands-on tracker feeling.",
      problem:
        "Random breakbeat generation often destroys groove because it does not understand which slices are kicks, snares or hats.",
      solution:
        "The tool analyzes slices first, labels the drum material and then generates variations while respecting the role of each hit.",
      approach:
        "The prototype combines audio analysis, slice detection, hit classification and grid-based rhythmic manipulation.",
      nextSteps:
        "Next steps include better classification, fewer duplicate slices and deeper integration with a tracker-style interface.",
    },
  },
  {
    slug: "hanzi-app",
    title: "Hanzi App",
    category: "Learning Tool",
    year: "2026 — Present",
    type: "Education App",
    platform: "Web / Android",
    description:
      "Mandarin learning application using active recall, character practice, vocabulary progression and local statistics.",
    tags: ["React", "Vite", "Chinese", "UX"],
    image: hanziGif,
    objectPosition: "center 100px",
    architecture: ["Vocabulary JSON", "React", "Quiz Engine", "Local Stats", "Android Export"],
    roadmap: [
      { label: "Read mode", done: true },
      { label: "Write mode", done: true },
      { label: "Vocabulary levels", done: true },
      { label: "Local statistics", done: true },
      { label: "Reading texts", done: false },
      { label: "Better Android polish", done: false },
    ],
    caseStudy: {
      lead:
        "A Mandarin learning app designed around active recall, characters and progressive vocabulary.",
      overview:
        "Hanzi App is a personal learning tool built to make Chinese vocabulary practice more visual, more focused and less overwhelming.",
      problem:
        "Many language apps hide the structure of vocabulary and do not give enough control over what is being learned.",
      solution:
        "The app separates reading, writing and vocabulary browsing while tracking progress locally.",
      approach:
        "React and Vite power the interface, while vocabulary datasets and localStorage keep the app simple and portable.",
      nextSteps:
        "Next steps include richer reading content, better color-coded translations and a smoother Android build.",
    },
  },
  {
    slug: "princessfinder",
    title: "PrincessFinder",
    category: "Desktop Tool",
    year: "2026",
    type: "Linux Tool",
    platform: "Desktop",
    description:
      "Custom Linux file explorer experiment focused on fast navigation, visual clarity and workflow automation.",
    tags: ["Python", "Linux", "UI", "Desktop"],
    image: princessFinderGif,
    architecture: ["Python", "Filesystem", "Sidebar", "Panels", "Drag & Drop"],
    roadmap: [
      { label: "File navigation", done: true },
      { label: "Sidebar", done: true },
      { label: "Visual interface", done: true },
      { label: "Live updates", done: false },
      { label: "Advanced drag behavior", done: false },
    ],
    caseStudy: {
      lead:
        "A custom Linux file explorer experiment built around personal workflow and visual navigation.",
      overview:
        "PrincessFinder explores what a file manager can feel like when it is designed as a personal tool rather than a generic system utility.",
      problem:
        "Default file managers are powerful but often visually flat and not tailored to specific creative workflows.",
      solution:
        "The project experiments with custom panels, sidebar behavior, navigation and desktop-like interactions.",
      approach:
        "The prototype is built in Python with attention to filesystem behavior, UI layering and workflow automation.",
      nextSteps:
        "Next steps include live file updates, improved drag-and-drop and stronger integration with external apps like VS Code.",
    },
  },
  {
    slug: "princessglass",
    title: "PrincessGlass",
    category: "Interface Experiment",
    year: "2026",
    type: "UI Prototype",
    platform: "Desktop",
    description:
      "Visual interface experiment exploring glassmorphism, desktop aesthetics and custom interaction patterns.",
    tags: ["UI", "Design", "Linux", "Prototype"],
    image: princessGlassGif,
    architecture: ["Visual System", "Glass UI", "Desktop Layer", "Interaction Prototype"],
    roadmap: [
      { label: "Glass visual style", done: true },
      { label: "Desktop prototype", done: true },
      { label: "Interaction tests", done: true },
      { label: "Reusable components", done: false },
    ],
    caseStudy: {
      lead:
        "A visual experiment around glass-like interfaces, atmosphere and personal desktop aesthetics.",
      overview:
        "PrincessGlass is about interface feeling: transparency, softness, depth and the emotional side of desktop tools.",
      problem:
        "Many desktop interfaces feel purely functional and leave little space for personal visual identity.",
      solution:
        "The project explores glassmorphism and layered UI to make tools feel more expressive without becoming unreadable.",
      approach:
        "It focuses on visual prototyping, spacing, material effects and interaction details.",
      nextSteps:
        "Next steps include refining the design language and turning the experiment into reusable interface components.",
    },
  },
  {
    slug: "princess-itunes",
    title: "Princess iTunes",
    category: "Music Interface",
    year: "2026",
    type: "Music UI",
    platform: "Desktop",
    description:
      "Music library interface inspired by classic media players, rebuilt as a personal workflow and design experiment.",
    tags: ["Music", "UI", "Desktop", "Prototype"],
    image: princessITunesGif,
    architecture: ["Music Library", "Classic UI", "Browsing", "Playback Prototype"],
    roadmap: [
      { label: "Library interface", done: true },
      { label: "Classic media player feel", done: true },
      { label: "Visual prototype", done: true },
      { label: "Playback integration", done: false },
      { label: "Better library navigation", done: false },
    ],
    caseStudy: {
      lead:
        "A music library interface inspired by classic media players and personal collections.",
      overview:
        "Princess iTunes is a nostalgic interface experiment around music ownership, library browsing and older media player aesthetics.",
      problem:
        "Modern music apps often prioritize feeds and recommendations over the feeling of owning and exploring a library.",
      solution:
        "The project rebuilds a library-first experience with a more personal and visual interface.",
      approach:
        "It explores layout, browsing patterns and classic media player ergonomics as a desktop prototype.",
      nextSteps:
        "Next steps include polishing library navigation and exploring real playback integration.",
    },
  },
];
