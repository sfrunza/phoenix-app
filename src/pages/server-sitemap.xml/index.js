import { getServerSideSitemap } from 'next-sitemap';
import { cities } from 'views/LandingPage/components/Cities/data';

export const getServerSideProps = async (ctx) => {
  const fields = cities.map((city) => ({
    loc: `https://www.gophoenixmoving.com/${city.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
