import Link from "next/link";
import ImageById from "./ImageById";

export default function BlogCard({ post, categories }) {
  const categoryNames = post.categories
    .map((id) => categories[id])
    .filter(Boolean);

console.log("post image url", post.featured_media);
  return (
    <div className="flex relative sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="flex flex-col flex-auto rounded-lg bg-white shadow dark:bg-neutral-700">
        <div
          className={`relative overflow-hidden bg-cover bg-no-repeat h-[161px] rounded-t-lg ${
            !post.image_url ? "" : "bg-[#101f26]"
          }`}
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <Link href={`/post/${post.slug}`}>
            {post.featured_media && (
              <ImageById
                id={post.featured_media}
              />
            )}
          </Link>
        </div>
        <div className="relative flex-auto px-6 pt-6 ">
          <span className="bg-blue-200 text-xs font-medium text-blue-800 text-center p-1 rounded-full px-2 dark:bg-blue-900 dark:text-white absolute -translate-y-1/2 top-0">
            {categoryNames.map((name) => (
              <Link
                key={name}
                href={`/category/${name}`}
                className="text-sm mr-2"
              >
                #{name}
              </Link>
            ))}
          </span>
          <Link href={`/post/${post.slug}`}>
            <h5
              className="mb-2 text-md font-bold text-neutral-800 dark:text-gray-100 line-clamp-2"
              title={post.title.rendered}
            >
              {post.title.rendered}
            </h5>
          </Link>
          <p
            className="mb-4 text-sm text-neutral-600 dark:text-gray-300 line-clamp-4"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          ></p>
        </div>
        <div className="text-sm px-6 py-4 text-gray-400 border-t border-gray-300 dark:border-gray-600">
          <p>Last updated {new Date(post.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
