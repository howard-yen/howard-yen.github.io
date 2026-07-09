import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = getPostBySlug(params.slug);
  return { title: frontmatter.title };
}

const mdxComponents = {};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getPostBySlug(params.slug);

  return (
    <article className="blog-post">
      <h1>{frontmatter.title}</h1>
      <time style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
        {frontmatter.date}
      </time>
      <div className="blog-content">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  );
}
