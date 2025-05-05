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
        <h1 className="text-3xl font-bold mb-2">{post.title.rendered}</h1>
        {/* post feature image */}
        {post.featured_media && (
          <div className="relative w-full m-auto mb-4">
            <ImageById
              id={post.featured_media}
              cssClass="mb-4 rounded-lg shadow-lg mx-auto"
              loading="lazy"
            />
          </div>
        )}
        {/* post content */}
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-semibold text-white">Publish Date :</span>{" "}
          {new Date(post.date).toLocaleDateString()}
        </p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </main>
    </>
  );
}
