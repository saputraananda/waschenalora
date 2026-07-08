import { Metadata } from 'next';
import { CareersClient } from './CareersClient';

export const metadata: Metadata = {
  title: 'Karir',
  description: 'Bergabunglah dengan Alora Group dan jadilah bagian dari perjalanan kami menuju keunggulan dalam layanan commercial laundry dan cleaning service.',
  openGraph: {
    title: 'Karir | Alora Group',
    description: 'Temukan peluang karir menarik di Alora Group. Tumbuh dan berkembang bersama tim profesional kami.',
    url: 'https://wascenalora.com/careers',
    siteName: 'Alora Group',
    locale: 'id_ID',
    type: 'website',
  }
};

export default function CareersPage() {
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
        "name": "Karir",
        "item": "https://wascenalora.com/careers"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CareersClient />
    </>
  );
}
