"use client";
import Image from 'next/image'
import Link from 'next/link';
import CompareHero from '@/public/images/heroimage.png'
import Rating from '../Rating';
import Testimonials from '../Testimonials';
import TrustedBy from '../TrustedBy';
import ComparisonTable from '../ComparisonTable';
import TemplateDesign from '../TemplateDesign';
import TemplateLibrary from '../TemplateList';



import { _loadFromJson, _loadFromJsonComparison, _transformDataToPostPageView } from '../../../utils/helper';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import MoveBack from '@/components/MoveBack';
import Loading from '@/components/Loading';


interface CallToAction {
  text: string;
  link: string;
}

interface Product {
  logo: string;
  name: string;
  provider: string;
  description: string;
  heroimage: string; // Added to match the provided object structure
}

interface ContentSection {
  content: string;
}

interface Proof {
  screenshot: string;
  youtubevideo: string;
}

interface ComparisonFeature {
  feature: string;
  feature_value: {
    Item: boolean;
    Notion: boolean;
  };
}

interface FilterBySlugType {
  id: string;
  product: Product;
  overview?: ContentSection; // Made optional in case not all entries have this
  howItWorks?: ContentSection; // Made optional in case not all entries have this
  configuration?: ContentSection; // Made optional in case not all entries have this
  proof?: Proof; // Made optional in case not all entries have this
  comparison_table: ComparisonFeature[]; // Added to match the provided object structure
}



export default function ComparisonAgainst() {


  const [filterBySlug, setFilterBySlug] = useState<FilterBySlugType | null>(null);
  const [postPageView, setPostPageView] = useState<any[]>([]);
  const pathname = usePathname();
  const [searchParams]: any = useSearchParams();

  useEffect(() => {
    const slug = pathname.split('/').pop();

    if (slug) {
      const fetchData = async () => {
        const content = await _loadFromJsonComparison();
        const filteredContent = content.find((item: { id: string }) => item.id === slug) as FilterBySlugType;
        if (filteredContent) {
          setFilterBySlug(filteredContent);
          const transformedData = _transformDataToPostPageView(filteredContent);
          setPostPageView(transformedData);
        }
      };
      fetchData();
    }
  }, [pathname, searchParams]);

  if (!filterBySlug) {
    return <Loading />;
  }


  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-20 md:pb-20">

          <div className="max-w-xl mx-auto text-center pb-12 md:pb-20 pt-12">
            <Image src={filterBySlug?.product?.heroimage}
              alt={filterBySlug?.product?.name}
              width={150}
              height={300}
              loading='eager'
              className="w-100 rounded p-8 mb-8 m-auto" />


            <h1 className="h1 mb-4">Tired of <b>{filterBySlug?.product?.name}</b>? <br /> Say hi to supersalesagro</h1>
            <p className="text-xl text-gray-600">{filterBySlug?.product?.description}</p>
            <button className="text-white bg-gray-900 rounded w-fit p-2 mt-4 px-4">Get Started</button>
          </div>

          <TrustedBy />
          <ComparisonTable id={filterBySlug?.id} />
          <Rating />
          <TemplateDesign />
          <Testimonials />
          <TemplateLibrary />

        </div>
      </div>
    </section>
  )
}