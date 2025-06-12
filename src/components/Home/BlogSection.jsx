import React from "react";
import BlogPosts from "../BlogPosts"; // existing component
export default function BlogSection({ posts }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-3xl font-extrabold mb-12">From Our Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPosts key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
