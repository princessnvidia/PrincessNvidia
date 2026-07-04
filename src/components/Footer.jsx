import githubLogo from "../assets/icons/github-mark-black.svg";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>Let’s build strange tools.</h2>

      <p>
        Available for freelance prototypes, creative coding, AI experiments and
        unusual interfaces.
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

        <a className="button secondary" href="mailto:violette.hoarau54@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}
