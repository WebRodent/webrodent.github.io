import '../styles/globals.css'
import "../styles/tailwind.css";
import "../styles/slick.css";
import { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    return (
      <div className="bg-gradient-primary min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
