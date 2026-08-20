import type { Metadata } from "next";
import { GetBuyBySlug } from "@/api";

type Props = {
  params: Promise<{ slug: string }>;
};
function truncateDescription(text: string, maxLength = 170) {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // const slug = params.slug;
  const { slug } = await params;
  try {
    const property = await GetBuyBySlug(slug);

    if (!property) {
      return {
        title: "Property Not Found | Astera Real Estate",
        description:
          "The requested luxury property could not be found in Dubai.",
      };
    }

    const title = `${property.name} | Luxury Property in Dubai – Astera Real Estate`;
    const rawDescription =
      property.description ||
      `Discover ${property.name} – a premium ${
        property.propertyType?.toLowerCase() || "property"
      } in ${
        property.location || "Dubai"
      } with excellent investment potential.`;

    const description = truncateDescription(rawDescription, 170);
    return {
      title,
      description,
      alternates: {
        canonical: `https://www.asterarealestate.com/buy/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.asterarealestate.com/buy/${slug}`,
        images: property.images?.[0]?.url
          ? [property.images[0].url]
          : ["/og-buy.jpg"],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: property.images?.[0]?.url
          ? [property.images[0].url]
          : ["/og-buy.jpg"],
      },
    };
  } catch (error) {
    console.error("Metadata generation error:", error);
    return {
      title: "Luxury Properties in Dubai | Astera Real Estate",
      description:
        "Explore premium villas, apartments, and investment properties in Dubai's top locations.",
    };
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
