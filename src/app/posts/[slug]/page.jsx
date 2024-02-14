import React from "react";
import { getAllPosts, getPostBySlug } from "../../../../lib/posts";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

const page = async ({ params }) => {
  const { slug } = params;

  const { content, frontmatter } = await getPostBySlug(slug);

  return (
    <div>
      <hr />
      <br />
      <h2 className="text-xl">{frontmatter.title}</h2>
      <br />

      <div className="mt-12 ml-12 prose">{content}</div>
    </div>
  );
};

export default page;
