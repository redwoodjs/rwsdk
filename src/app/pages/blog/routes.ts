import { route, index } from "rwsdk/router";
import BlogList from "./BlogList";
import BlogPage from "./BlogPage";
import { blogPosts, BlogPostSlug } from "src/data/blog/manifest";
import { notFound } from "src/utils/notFound";

export const blogRoutes = [
  index(BlogList),
  route("/:slug", [
    async ({ params }) => {
      const slug = params.slug;
      if (!blogPosts.some((post) => post.slug === slug)) {
        return notFound();
      }
    },
    BlogPage,
  ]),
];
