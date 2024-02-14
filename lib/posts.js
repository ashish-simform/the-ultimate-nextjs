import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Newsletter from "@/app/components/NewsLetter";

const rootDir = path.join(process.cwd(), "content");

const components = {
  h1: props => (
    <h1 {...props} className="text-emerald-400">
      {props.children}
    </h1>
  ),
  Newsletter: Newsletter,
};

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDir, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
    },
  });

  return { content, frontmatter, slug: realSlug };
}

export async function getAllPosts() {
  const files = fs.readdirSync(rootDir);

  let posts = [];

  for (const file of files) {
    const post = await getPostBySlug(file);
    posts.push(post);
  }

  return posts;
}
