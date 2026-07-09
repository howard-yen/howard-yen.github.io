import type { Metadata } from 'next';
import publications from '@/data/publications.json';
import React from 'react';

export const metadata: Metadata = {
  title: 'Publications',
};

interface LinkInfo {
  name: string;
  url: string;
}

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  links: LinkInfo[];
  highlight?: string;
}

function Linked({ name, url }: { name: string; url: string }) {
  if (!url || url.trim() === '') return null;
  return (
    <a className="external" href={url} target="_blank" rel="noopener noreferrer">
      [{name}]
    </a>
  );
}

function BoldedText({ text, shouldBeBold }: { text: string; shouldBeBold: string }) {
  const parts = text.split(shouldBeBold);
  return (
    <span>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index !== parts.length - 1 && <b>{shouldBeBold}</b>}
        </React.Fragment>
      ))}
    </span>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <div className="card">
      <b>{pub.title}</b>
      <br />
      <BoldedText text={pub.authors} shouldBeBold="Howard Yen" />.
      <br />
      <i>{pub.venue}</i>, {pub.year}.
      {pub.highlight && (
        <span style={{ color: 'var(--color-accent)' }}>&nbsp;{pub.highlight}.</span>
      )}
      <br />
      {pub.links.map((link) => (
        <Linked key={link.name} name={link.name} url={link.url} />
      ))}
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <div>
      <h2 className="page-title">Publications</h2>
      <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        * denotes equal contribution.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {(publications as Publication[]).map((pub, index) => (
          <PublicationCard key={index} pub={pub} />
        ))}
      </div>
    </div>
  );
}
