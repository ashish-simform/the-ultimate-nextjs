import React from "react";
import { getAllPosts, getPostBySlug } from "../../../../lib/posts";
import Wallpaper from "../../../../public/images/wallpaper.jpg";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = params;
  const { content, frontmatter } = await getPostBySlug(slug);
  //optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [ ];
  

  return {
    title: `${frontmatter.title} by ${frontmatter.author}`,
  };
}

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
      <Image src={Wallpaper} alt="wallpaper" className="object-cover h-96" />
      <h2 className="text-xl">{frontmatter.title}</h2>
      <br />

      <div className="mt-12 ml-12 prose">{content}</div>
    </div>
  );
};

export default page;
