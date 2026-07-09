import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div>
      <h2 className="page-title">Blog</h2>
      {posts.length === 0 ? (
        <p>Coming soon!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="card">
                <h3 style={{ margin: '0 0 0.25rem 0' }}>{post.title}</h3>
                <time style={{ fontSize: '0.85rem', color: '#666' }}>{post.date}</time>
                {post.summary && (
                  <p style={{ margin: '0.5rem 0 0 0', color: '#444' }}>{post.summary}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
