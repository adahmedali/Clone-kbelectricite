import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { zones, zoneBySlug } from "@/data/zones";
import { ZoneDetail } from "@/components/detail/ZoneDetail";

export function generateStaticParams() {
  return zones.map((z) => ({ slug: z.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = zoneBySlug(slug);
  if (!data) return {};
  return {
    title: `Électricien à ${data.name} (${data.cp}) — Pro San Electricité`,
    description: `Électricien à ${data.name} : ${data.lead}`.slice(0, 180),
    alternates: { canonical: `/zones/${data.slug}` },
  };
}

export default async function ZoneSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = zoneBySlug(slug);
  if (!data) notFound();
  return <ZoneDetail data={data} />;
}
