import api from '@/app/lib/api';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default async function SinglePost({ params }) {
  const { slug } = params;
  const res = await api.get(`/posts?slug=${slug}`);
  const post = res.data[0];

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2">{post.title.rendered}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </main>
      <Footer />
    </>
  );
}
