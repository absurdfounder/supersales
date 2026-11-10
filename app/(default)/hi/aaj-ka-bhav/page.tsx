import type { Metadata } from 'next'
import Link from 'next/link'
import SectionShell from '@/components/ui/SectionShell'
import PixelButton from '@/components/ui/PixelButton'
import { WHATSAPP_CHANNEL_URL } from '@/lib/site-links'

const SITE = 'https://supersalesagro.com'
const PATH = '/hi/aaj-ka-bhav'

export const metadata: Metadata = {
  title: 'आजादपुर मंडी सेब का भाव | Super Sales Agro',
  description:
    'आजादपुर मंडी में सेब, दशहरी आम, किन्नू, नाशपाती, भगवा अनार और अमरूद का थोक भाव। सुबह की पुष्टि के बाद। सुपर सेल्स एग्रो, दिल्ली।',
  alternates: { canonical: `${SITE}${PATH}` },
  openGraph: {
    title: 'आजादपुर मंडी सेब का भाव | Super Sales Agro',
    description:
      'आजादपुर और शिमला का सेब भाव, दशहरी, भगवा अनार। सुबह का रेट व्हाट्सऐप और मंडी रेट पेज पर।',
    url: `${SITE}${PATH}`,
    locale: 'hi_IN',
    type: 'website',
    siteName: 'Super Sales Agro',
  },
}

const lines = [
  {
    name: 'सेब',
    detail: 'रॉयल डिलीशियस, ए-ग्रेड। शिमला मंडी का रेट और आजादपुर का रेट अलग-अलग हैं। बॉक्स का वजन और काउंट उसी सुबह का होता है।',
    href: '/apples',
  },
  {
    name: 'शिमला सेब',
    detail: 'शिमला सेब का रेट प्रति किलो शिमला की मंडी का है। दिल्ली पहुँचने के बाद आजादपुर का भाव दूसरा होता है।',
    href: '/apples/shimla',
  },
  {
    name: 'रॉयल डिलीशियस',
    detail: 'ए-ग्रेड शिमला और आजादपुर दोनों बुक पर। सोलन की लाइन रेड गोल्ड, बी-ग्रेड है।',
    href: '/apples/royal-delicious',
  },
  {
    name: 'सोलन सेब',
    detail: 'सोलन मंडी का रेट रेड गोल्ड, बी-ग्रेड। शिमला के ए-ग्रेड से अलग।',
    href: '/apples/solan',
  },
  {
    name: 'किन्नौर सेब',
    detail: 'किन्नौर का भाव तभी जब कार्टन फर्श पर हों। वरना कोई किन्नौर रेट नहीं छपता।',
    href: '/apples/kinnaur',
  },
  {
    name: 'नरकंडा',
    detail: 'नरकंडा एप्पल मंडी का फल आजादपुर नीलामी में। यह पहाड़ का टूर पेज नहीं।',
    href: '/apples/narkanda',
  },
  {
    name: 'दशहरी आम',
    detail: 'सीजन में आजादपुर से पका दशहरी। सीजन के बाहर पुराना रेट आज का रेट नहीं है।',
    href: '/mangoes/dasheri',
  },
  {
    name: 'किन्नू',
    detail: 'दिल्ली का रेट आजादपुर का है। अबोहर उत्पादक मंडी है। प्रीमियम लाइन 48 काउंट से ऊपर।',
    href: '/kinnow',
  },
  {
    name: 'बग्गी गोला',
    detail: 'शिमला की नाशपाती। आजादपुर के विलियम्स इम्पोर्ट से अलग भाव।',
    href: '/pears/baggi-gola',
  },
  {
    name: 'विलियम्स',
    detail: 'इम्पोर्टेड नाशपाती, आजादपुर फर्श से। यह सारे इम्पोर्टेड फल का पेज नहीं।',
    href: '/pears/williams',
  },
  {
    name: 'भगवा अनार',
    detail: 'बड़ा साइज, आजादपुर से। टेबल, एरिल और एक्सपोर्ट अलग स्पेक हैं।',
    href: '/pomegranate/bhagwa',
  },
  {
    name: 'लखनऊ अमरूद',
    detail: 'हरा अमरूद, आजादपुर का छपा हुआ रेट। इलाहाबाद आने पर अलग भाव।',
    href: '/guavas/lucknow',
  },
  {
    name: 'नागपुर संतरा',
    detail: 'मीडियम, आजादपुर का थोक। नागपुर शहर का फार्म रेट नहीं।',
    href: '/oranges/nagpur',
  },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'hi',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'आजादपुर मंडी में सेब का भाव क्या है?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'सुबह फर्श की पुष्टि के बाद रेट पेज और व्हाट्सऐप चैनल पर जाता है। पुराना नंबर आज का भाव नहीं है।',
      },
    },
    {
      '@type': 'Question',
      name: 'शिमला और आजादपुर का सेब रेट एक है?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'नहीं। शिमला उत्पादक मंडी है। आजादपुर दिल्ली की थोक मंडी है। सुपर सेल्स एग्रो दोनों का रेट अलग रखता है।',
      },
    },
  ],
}

export default function HindiRatePage() {
  return (
    <div lang="hi">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SectionShell eyebrow="आज का भाव" eyebrowNumber="01" bgClass="bg-white" className="pt-16 md:pt-[4.5rem]">
        <div className="pb-10 pt-2 md:pb-14">
          <nav aria-label="Breadcrumb" className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-slate-900">आज का भाव</span>
          </nav>
          <h1 className="type-h2 mb-4 max-w-3xl">आजादपुर मंडी सेब का भाव</h1>
          <p className="type-body mb-4 max-w-3xl">
            सुपर सेल्स एग्रो 1982 से आजादपुर की न्यू सब्जी मंडी में फल का थोक करता है। सेब का भाव शिमला का अलग है और
            दिल्ली का अलग। किलो और बॉक्स दोनों पर बात होती है। सुबह फर्श चेक होने से पहले हम पुराना रेट आज का रेट लिखकर
            नहीं छोड़ते।
          </p>
          <p className="type-body mb-8 max-w-3xl">
            पत्ता: ए-285, न्यू सब्जी मंडी, आजादपुर, दिल्ली 110034। नीलामी लाइसेंस बी-4881। फोन +91-9899262264। सब्जी का
            सरकारी भाव एपीएमसी जारी करता है। यह पेज फल का है।
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-4">
            <PixelButton href="/todays-mandi-rates">अंग्रेज़ी रेट पेज</PixelButton>
            <PixelButton href={WHATSAPP_CHANNEL_URL} external tone="dark">
              व्हाट्सऐप चैनल
            </PixelButton>
          </div>
        </div>
      </SectionShell>

      <SectionShell eyebrow="फल" eyebrowNumber="02" bgClass="bg-white">
        <ul className="grid gap-px bg-slate-200 pb-10 sm:grid-cols-2 md:pb-14">
          {lines.map((line) => (
            <li key={line.href} className="bg-white">
              <Link href={line.href} className="block px-4 py-5 transition hover:bg-slate-50">
                <span className="font-funneldisplay text-lg font-bold text-slate-900">{line.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-slate-600">{line.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell eyebrow="पूछताछ" eyebrowNumber="03" bgClass="bg-white">
        <div className="max-w-3xl pb-12 md:pb-16">
          <h2 className="mb-3 font-funneldisplay text-2xl font-bold text-slate-900">आजादपुर मंडी में सेब का भाव क्या है?</h2>
          <p className="type-body mb-8">
            सुबह की पुष्टि के बाद रेट पेज और व्हाट्सऐप पर। रॉयल डिलीशियस ए-ग्रेड शिमला और आजादपुर दोनों पर है। जब तक
            आज का कार्ड नहीं चढ़ा, डेस्क से लॉट पूछें।
          </p>
          <h2 className="mb-3 font-funneldisplay text-2xl font-bold text-slate-900">शिमला और आजादपुर का रेट एक है?</h2>
          <p className="type-body mb-8">
            नहीं। शिमला उत्पादक मंडी है। आजादपुर दिल्ली की थोक मंडी है। माल ढुलाई और ग्रेड इन दोनों के बीच बैठते हैं।
          </p>
          <PixelButton href="/#contact_us">डेस्क से बात करें</PixelButton>
        </div>
      </SectionShell>
    </div>
  )
}
