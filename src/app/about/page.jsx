import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">This is a blog built using Next.js and WordPress as a headless CMS. We share curated stories from the world of travel and exploration through WanderCity.</p>
      </main>
      <Footer />
    </>
  );
}
