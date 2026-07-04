import { motion } from "framer-motion";
import githubLogo from "../assets/icons/github-mark-black.svg";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="heroContent"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="pill">✦ Available for freelance experiments</div>

        <h1>
          Building experimental software for{" "}
          <span>AI, audio, dreams and interfaces.</span>
        </h1>

        <p>
          Independent creative developer exploring artificial intelligence,
          music technology, dream interfaces, Linux tools and unusual software.
        </p>

        <div className="heroButtons">
          <a
            className="button primary"
            href="https://github.com/princessnvidia"
            target="_blank"
            rel="noreferrer"
            >
            <img
                src={githubLogo}
                alt="GitHub"
                style={{ width: 38, height: 38 }}
            />
            GitHub
          </a>

          <a className="button secondary" href="mailto:tonmail@example.com">
            Contact
          </a>
        </div>
      </motion.div>

      <motion.aside
        className="statusCard"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <p className="statusTitle">STATUS</p>
        <div>
          <span className="dot" />
          Building Honeyronauts v2
        </div>
        <div>Location — France</div>
        <div>Focus — AI / Audio / Dreams</div>
        <div>Mode — Independent R&amp;D</div>
      </motion.aside>
    </section>
  );
}
