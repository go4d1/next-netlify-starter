import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CFRgpt.com AI for Healthcare Compliance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{`
        li {
          list-style-type: none;
          margin: 0.4em 0;
        }
      `}</style>

      <main>
        <Header title="CFRgpt.com" />
        <p className="description">AI for Healthcare Compliance</p>
        <ul class="home">
          <li>
            <a href="/usecases.html">AI Use Cases in Healthcare Compliance</a>
          </li>
          <li>
            <a href="/requirements.html">Requirements and Implementation</a>
          </li>

          <li>
            <a href="/examples.html">Practical Examples</a>
          </li>
          <li>
            <a href="/about.html">About Us</a>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
