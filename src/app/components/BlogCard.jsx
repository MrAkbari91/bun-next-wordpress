import Link from "next/link";
import ImageById from "./ImageById";

export default function BlogCard({ post, categories }) {
  const categoryNames = post.categories
    .map((id) => categories[id])
    .filter(Boolean);

  const categorySlugs = post.categories
    .map((id) => categories[id])
    .filter(Boolean)
    .map((name) => name.toLowerCase());

  return (
    <div className="relative flex p-4 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="flex max-w-sm flex-col rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div
          className={`relative h-48 overflow-hidden rounded-t-lg bg-cover bg-no-repeat ${
            !post.image_url ? "" : "bg-[#101f26]"
          }`}
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <Link href={`/post/${post.slug}`}>
            {post.featured_media && (
              <div className="relative h-64 w-full">
                <ImageById id={post.featured_media} />
              </div>
            )}
          </Link>
        </div>
        <div className="relative flex-auto px-6 pt-6">
          <span className="absolute top-0 -translate-y-1/2 rounded-full bg-blue-200 p-1 px-2 text-center text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-white">
            {categoryNames.map((name) => (
              <Link
                key={name}
                href={`/category/${categorySlugs}`}
                className="mx-2 text-sm"
                title={name}
                dangerouslySetInnerHTML={{ __html: name }}
              />
            ))}
          </span>
          <Link href={`/post/${post.slug}`}>
            <h5
              className="text-md mb-2 line-clamp-3 min-h-20 font-bold text-neutral-800 dark:text-gray-100"
              title={post.title.rendered}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </Link>
          <p
            className="mb-4 line-clamp-4 text-sm text-neutral-600 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
        <div className="border-t border-gray-300 px-6 py-4 text-sm text-gray-400 dark:border-gray-600">
          <p>Last updated {new Date(post.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
