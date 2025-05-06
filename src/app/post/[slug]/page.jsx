import ImageById from "@/app/components/ImageById";
import api from "@/app/lib/api";

export default async function SinglePost({ params }) {
  const { slug } = params;
  const res = await api.get(`/posts?slug=${slug}`);
  const post = res.data[0];
  if (!post) {
    return <div className="container mx-auto p-4">Post not found</div>;
  }

  return (
    <>
      <main className="container mx-auto p-4">
        <h1
          className="my-9 text-center text-3xl font-bold text-white"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h1>
        {/* post feature image */}
        {post.featured_media && (
          <div className="relative m-auto mb-4 w-full">
            <ImageById
              id={post.featured_media}
              cssClass="mb-4 rounded-lg shadow-lg mx-auto"
              loading="lazy"
            />
          </div>
        )}
        {/* post content */}
        <p className="mb-4 text-sm text-gray-500">
          <span className="font-semibold text-white">Publish Date :</span>{" "}
          {new Date(post.date).toLocaleDateString()}
        </p>
        <div
          className=" max-w-none news-post prose prose-invert prose-a:text-blue-500 prose-a:decoration-blue-500 prose-a:underline prose-a:decoration-2 prose-a:transition-all hover:prose-a:decoration-4"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </main>
    </>
  );
}
