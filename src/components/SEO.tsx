import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function SEO({
  title = 'Big Daddys Burgerhouse Passau | Ungarische Spezialitäten & Burger seit 2009',
  description = 'Big Daddys Burgerhouse in Passau: Authentische ungarische Küche mit Gulasch, Pörkölt, Lángos, Halászlé & Premium Burger. Seit 2009 mit Leidenschaft und Qualität. Jetzt bestellen!',
  keywords = 'Big Daddys Burgerhouse, Burger Passau, Ungarisches Restaurant Passau, Gulasch Passau, Pörkölt, Lángos, Halászlé, Restaurant Passau, Street Food Passau, Burgerhouse Passau, Ungarische Spezialitäten',
  canonical = 'https://bigdaddys-burgerhouse.de',
  ogTitle,
  ogDescription,
  ogImage = 'https://bigdaddys-burgerhouse.de/og-image.jpg',
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonical);
    }

    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:image', ogImage, true);

    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage]);

  return null;
}
