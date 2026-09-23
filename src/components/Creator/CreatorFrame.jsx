import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { destinations } from './destinations';
import './creator.css';

const CreatorFrame = ({ pathLabel, title, children, backTo = destinations.links, backLabel = 'Links' }) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return (
    <div className="creator-page">
      <div className="creator-column">
        <header className="creator-topbar">
          <Link to={destinations.home} className="creator-domain">
            cameronlim.com
          </Link>
          <span>{pathLabel}</span>
        </header>
        <Link to={backTo} className="creator-back">
          ← {backLabel}
        </Link>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default CreatorFrame;
