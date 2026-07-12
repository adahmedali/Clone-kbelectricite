import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { secteurs, secteurBySlug } from "@/data/secteurs";
import { SecteurDetail } from "@/components/detail/SecteurDetail";

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = secteurBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/secteurs/${data.slug}` },
  };
}

export default async function SecteurSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = secteurBySlug(slug);
  if (!data) notFound();
  return <SecteurDetail data={data} />;
}
