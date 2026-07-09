import socialMedia from '@/data/social-media.json';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="social-row">
        {Object.entries(socialMedia).map(([name, info]) => (
          <a
            key={name}
            className="social-link"
            href={info.url}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/SocialMedia/${info.image}`}
              alt={name}
              width="25"
              height="25"
              style={{ filter: 'invert(1)' }}
            />
          </a>
        ))}
      </div>
      <p className="footer-text">
        Howard Yen &middot; Last updated: July 2026
      </p>
    </footer>
  );
}
