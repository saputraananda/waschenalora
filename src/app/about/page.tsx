import { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali lebih dekat Alora Group, visi & misi kami, nilai-nilai korporat PRECISE, serta program peningkatan kualitas tim seperti Alora Award, Alora Outing, dan Alora Academy.',
  openGraph: {
    title: 'Tentang Kami | Alora Group',
    description: 'Kenali lebih dekat Alora Group, visi & misi kami, nilai-nilai korporat, serta program peningkatan kualitas tim.',
    url: 'https://wascenalora.com/about',
    siteName: 'Alora Group',
    locale: 'id_ID',
    type: 'website',
  }
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://wascenalora.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tentang Kami",
        "item": "https://wascenalora.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
