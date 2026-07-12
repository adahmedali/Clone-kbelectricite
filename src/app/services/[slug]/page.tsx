import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/data/services";
import { ServiceDetail } from "@/components/detail/ServiceDetail";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/services/${data.slug}` },
  };
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = serviceBySlug(slug);
  if (!data) notFound();
  return <ServiceDetail data={data} />;
}
