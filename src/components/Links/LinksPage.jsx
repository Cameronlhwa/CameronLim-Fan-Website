import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../Creator/destinations';
import './LinksPage.css';

const PROFILE_IMAGE = `${import.meta.env.BASE_URL}profile.jpg`;

const profile = {
  name: 'Cameron Lim',
  subtitle: 'Student, Creator, Builder',
  image: PROFILE_IMAGE,
  imageAlt: 'Cameron Lim',
  bio: [
    'I make videos, build things, and document the process.',
    'This page is where you can find my content, reach out, and see what I’m working on.',
  ],
};

const credibility = {
  stats: [
    { value: '125K+', label: 'YouTube' },
    { value: '15K+', label: 'Instagram' },
  ],
  partners:
    'Past partners include Intel, NordVPN, ESR, Notion AI, Skillshare, and more.',
};

const links = [
  {
    id: 'youtube',
    title: 'YouTube',
    subtitle: 'Videos, vlogs, and ideas',
    href: destinations.youtube,
    icon: 'youtube',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    subtitle: 'Behind the scenes and short-form content',
    href: destinations.instagram,
    icon: 'instagram',
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    subtitle: 'Short-form content',
    href: destinations.tiktok,
    icon: 'tiktok',
  },
  {
    id: 'work',
    title: 'Work With Me',
    subtitle: 'Brand partnerships, sponsorships, and business inquiries',
    href: destinations.work,
    icon: 'briefcase',
  },
  {
    id: 'rates',
    title: 'Deliverable Rates',
    subtitle: 'Pricing, packages, and what I offer',
    href: destinations.rates,
    icon: 'document',
  },
  {
    id: 'lingo',
    title: 'LingoIsland',
    subtitle: 'A Mandarin-learning project I’m building',
    href: destinations.lingoIsland,
    icon: 'globe',
  },
  destinations.gear && {
    id: 'gear',
    title: 'My Gear',
    subtitle: 'Camera, tools, and creator setup',
    href: destinations.gear,
    icon: 'camera',
  },
].filter(Boolean);

const about = {
  heading: 'A little about me',
  paragraphs: [
    'I’m Cameron, a student, creator, and builder. I make videos about life, productivity, tech, and the things I’m figuring out along the way. I also love building projects on the internet, especially ones that help people learn and grow.',
    'Right now, one of the projects I’m building is LingoIsland, a Mandarin-learning project I’m especially excited about.',
  ],
  interests: [
    'Waterloo student',
    'Content creator',
    'Building on the internet',
    'Language learning',
  ],
};

const footerSocials = [
  { id: 'youtube', label: 'YouTube', href: destinations.youtube, icon: 'youtube' },
  { id: 'instagram', label: 'Instagram', href: destinations.instagram, icon: 'instagram' },
  { id: 'tiktok', label: 'TikTok', href: destinations.tiktok, icon: 'tiktok' },
  { id: 'email', label: 'Work with me', href: destinations.work, icon: 'mail' },
];

const signoff = 'Thanks for stopping by~';

const isNavigable = (href) => /^(https?:\/\/|mailto:|\/)/.test(href);

const Icon = ({ name }) => {
  const common = {
    viewBox: '0 0 24 24',
    'aria-hidden': 'true',
    focusable: 'false',
  };

  switch (name) {
    case 'youtube':
      return (
        <svg {...common} fill="currentColor">
          <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.75 15.5V8.9l6.3 3.3-6.3 3.3z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...common} fill="currentColor">
          <path d="M14.4 3.2c.35 2.15 1.7 3.85 3.9 4.35v2.45c-1.45-.08-2.75-.55-3.9-1.35v6.15c0 3.15-2.55 5.7-5.7 5.7S3 18 3 14.8c0-3.05 2.4-5.55 5.4-5.7v2.55c-1.5.15-2.7 1.4-2.7 2.95 0 1.65 1.35 3 3 3s3-1.35 3-3V3.2h2.7z" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5.6A1.6 1.6 0 0 1 9.6 4h4.8A1.6 1.6 0 0 1 16 5.6V7" />
          <path d="M3 12.5h18" />
        </svg>
      );
    case 'document':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3.4h6.6L19 8.8V20a1.4 1.4 0 0 1-1.4 1.4H7A1.4 1.4 0 0 1 5.6 20V4.8A1.4 1.4 0 0 1 7 3.4z" />
          <path d="M13.5 3.6V9H19" />
          <path d="M8.5 13h7M8.5 16.4h4.6" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8.6" />
          <path d="M3.4 12h17.2" />
          <path d="M12 3.4c2.3 2.4 3.5 5.3 3.5 8.6s-1.2 6.2-3.5 8.6c-2.3-2.4-3.5-5.3-3.5-8.6s1.2-6.2 3.5-8.6z" />
        </svg>
      );
    case 'camera':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 8.2h2.8l1.3-2h7.8l1.3 2H20a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 19.2H4A1.5 1.5 0 0 1 2.5 17.7v-8A1.5 1.5 0 0 1 4 8.2z" />
          <circle cx="12" cy="13.4" r="3.1" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7.2 12 13l8-5.8" />
        </svg>
      );
    case 'chevron':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6.5 15 12l-6 5.5" />
        </svg>
      );
    default:
      return null;
  }
};

const SmartLink = ({ href, className, children, label }) => {
  const external = /^https?:\/\//.test(href);
  const internal = href.startsWith('/') && !href.startsWith('//');

  if (internal) {
    return (
      <Link to={href} className={className} aria-label={label}>
        {children}
      </Link>
    );
  }

  if (!isNavigable(href)) {
    return (
      <a
        href="#"
        className={className}
        aria-label={label}
        onClick={(event) => event.preventDefault()}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
};

const LinkCard = ({ item }) => (
  <SmartLink href={item.href} className="links-card">
    <span className="links-card-icon">
      <Icon name={item.icon} />
    </span>
    <span className="links-card-copy">
      <span className="links-card-title">{item.title}</span>
      <span className="links-card-subtitle">{item.subtitle}</span>
    </span>
    <span className="links-card-chevron">
      <Icon name="chevron" />
    </span>
  </SmartLink>
);

const LinksPage = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Cameron Lim — Links';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="links-page">
      <div className="links-column">
        <header className="links-topbar links-rise">
          <Link to={destinations.home} className="links-domain">
            cameronlim.com
          </Link>
          <span className="links-path">/links</span>
        </header>

        <main>
          <section className="links-profile links-rise" style={{ animationDelay: '70ms' }} aria-labelledby="links-name">
            <div className="links-avatar-frame">
              <img
                className="links-avatar"
                src={profile.image}
                alt={profile.imageAlt}
              />
            </div>
            <h1 id="links-name" className="links-name">{profile.name}</h1>
            <p className="links-subtitle">{profile.subtitle}</p>
            <div className="links-bio">
              {profile.bio.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>

          <section className="links-proof links-rise" style={{ animationDelay: '140ms' }} aria-label="Creator highlights">
            <ul className="links-stats">
              {credibility.stats.map((stat) => (
                <li key={stat.label} className="links-stat">
                  <span className="links-stat-value">{stat.value}</span>
                  <span className="links-stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
            <p className="links-partners">{credibility.partners}</p>
          </section>

          <nav className="links-list links-rise" style={{ animationDelay: '200ms' }} aria-label="Creator links">
            {links.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </nav>

          <section className="links-about links-rise" style={{ animationDelay: '280ms' }} aria-labelledby="links-about-heading">
            <h2 id="links-about-heading">{about.heading}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="links-interests">
              {about.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="links-footer links-rise" style={{ animationDelay: '360ms' }}>
          <div className="links-socials">
            {footerSocials.map((item) => (
              <SmartLink
                key={item.id}
                href={item.href}
                className="links-social"
                label={item.label}
              >
                <Icon name={item.icon} />
              </SmartLink>
            ))}
          </div>
          <p className="links-signoff">{signoff}</p>
        </footer>
      </div>
    </div>
  );
};

export default LinksPage;
