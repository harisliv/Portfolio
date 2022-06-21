import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";

type PortfolioHeaderProps = {
  githubLink?: string;
  externalLink?: string;
};

export const PortfolioHeader = ({
  githubLink,
  externalLink,
}: PortfolioHeaderProps) => {
  return (
    <header>
      <svg
        width="50"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#23ce6b "
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <div className="project-links">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        )}
        {externalLink && (
          <a href={externalLink} target="_blank" rel="noreferrer">
            <img src={externalLinkIcon} alt="exteral link" />
          </a>
        )}
      </div>
    </header>
  );
};
