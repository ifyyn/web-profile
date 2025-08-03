const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to simplify your functional components.",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "React",
  },
  {
    id: 2,
    title: "Tailwind CSS vs. Traditional CSS",
    excerpt:
      "Comparing the utility-first approach of Tailwind with traditional CSS methodologies.",
    date: "April 28, 2023",
    readTime: "7 min read",
    category: "CSS",
  },
  {
    id: 3,
    title: "Building a REST API with Node.js",
    excerpt:
      "A step-by-step guide to creating your first REST API using Node.js and Express.",
    date: "March 10, 2023",
    readTime: "10 min read",
    category: "Backend",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-5xl text-[#f6c432] font-semibold tracking-wide uppercase">
            Blog
          </h2>
          <p className="mt-2 text-lg leading-8 font-extrabold tracking-tight text-accent sm:text-lg">
            Latest Posts
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Thoughts, tutorials, and insights about web development.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-black border border-gray-700 hover:border-secondary transition-all duration-300"
            >
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-secondary text-white">
                    {post.category}
                  </p>
                  <a href="#" className="block mt-2">
                    <h3 className="text-xl font-semibold text-[#f6c432] hover:text-secondary">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-300">
                      {post.excerpt}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">Author</span>
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-secondary">
                      <img src="./images/profile1.png" />
                    </div>
                  </div>
                  <div className="ml-3 text-[#f6c432]">
                    <p className="text-sm text-white font-medium text-accent">
                      You
                    </p>
                    <div className="flex space-x-1 text-sm text-[#f6c432]">
                      <time dateTime="2020-03-16">{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-yellow-300"
          >
            Read All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
