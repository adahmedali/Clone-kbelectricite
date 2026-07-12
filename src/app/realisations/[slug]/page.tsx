import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { realisations, realisationBySlug } from "@/data/realisations";
import { RealisationDetail } from "@/components/detail/RealisationDetail";

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = realisationBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/realisations/${data.slug}` },
  };
}

export default async function RealisationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = realisationBySlug(slug);
  if (!data) notFound();
  return <RealisationDetail data={data} />;
}
