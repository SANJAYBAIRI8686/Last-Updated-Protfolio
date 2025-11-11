import React from 'react';
import './Footer.css';

// Import social media icons
import linkedinIcon from '../assets/Social Media/linkedin.png';
import githubIcon from '../assets/Social Media/github.png';
import twitterIcon from '../assets/Social Media/twitter.png';
import redditIcon from '../assets/Social Media/reddit.png';
import resumePdf from '../assets/SANJAY BSK.pdf';

const IconLink = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="footer-icon lg">
    {children}
  </a>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 0 0-3.162 19.49c.5.092.683-.217.683-.482 0-.237-.009-.866-.013-1.7-2.779.604-3.366-1.34-3.366-1.34-.454-1.155-1.11-1.464-1.11-1.464-.907-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.086 2.91.831.091-.646.35-1.086.636-1.336-2.22-.252-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0 1 12 6.844c.851.004 1.708.115 2.507.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.698 1.028 1.59 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.31.68.921.68 1.857 0 1.34-.012 2.421-.012 2.75 0 .267.18.579.69.48A10 10 0 0 0 12 2Z"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3h14ZM8.34 18v-7.34H5.67V18h2.67ZM7 9.41A1.55 1.55 0 1 0 7 6.31a1.55 1.55 0 0 0 0 3.1ZM20 18v-4.18c0-2.23-1.19-3.27-2.77-3.27a2.4 2.4 0 0 0-2.17 1.19h-.03v-1H12.4V18h2.67v-3.68c0-.97.18-1.9 1.38-1.9s1.2 1.12 1.2 1.97V18H20Z"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="mailto:bairisanjaykumar1298@gmail.com" className="footer-email">
            bairisanjaykumar1298@gmail.com
          </a>
          <a href={resumePdf} className="footer-resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        
        <div className="footer-right">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/bairisanjay70754/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://reddit.com/" target="_blank" rel="noopener noreferrer">
              <img src={redditIcon} alt="Reddit" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
