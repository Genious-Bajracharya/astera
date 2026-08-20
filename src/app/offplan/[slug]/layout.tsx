import { Metadata } from "next";
import { GetOffplanBySlug } from "@/api";

function truncateDescription(text: string, maxLength = 170) {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // const slug = await params.slug;
  const { slug } = await params;
  try {
    const property = await GetOffplanBySlug(slug);

    if (!property) {
      return {
        title: "Offplan Not Found",
        description: "The requested offplan property could not be found.",
        alternates: {
          canonical: `https://www.asterarealestate.com/offplan/${slug}`,
        },
        openGraph: {
          title: "Offplan Not Found | Astera Real Estate",
          description:
            "The requested offplan property could not be found in Dubai.",
          url: `https://www.asterarealestate.com/offplan/${slug}`,
        },
      };
    }
    let title = `${property.name} | Astera Real Estate`;

    let rawDescription =
      property.description ||
      `Discover ${property.name} – a premium offplan property in ${
        property.location || "Dubai"
      } with excellent investment potential.`;

    let description = truncateDescription(rawDescription, 170);

    // Creek Bay by Emaar
    if (
      property.name.toLowerCase().includes("creek bay") ||
      slug.includes("creek-bay")
    ) {
      title = "Creek Bay by Emaar | Waterfront Apartments | Astera Real Estate";
      description =
        "Creek Bay by Emaar offers 1 - 3 bed waterfront apartments with Burj Khalifa views at Dubai Creek Harbour. Flexible payment plan. 10 mins to Dubai Airport. Enquire now.";
    }

    // Creek Haven Dubai
    else if (
      property.name.toLowerCase().includes("creek haven") ||
      slug.includes("creek-haven")
    ) {
      title =
        "Creek Haven Dubai | 1-3 BR Apartments by Emaar | Astera Real Estate";
      description =
        "Buy off-plan at Creek Haven by Emaar. Infinity pool, padel court, yoga deck & more. 10 mins to Dubai Airport. Trusted developer. Flexible payment plan. Book a Free Consultation.";
    } else if (
      property.name.toLowerCase().includes("hado") ||
      slug.includes("hado")
    ) {
      title =
        "Hado by Beyond | 1-4 BR Apartments | Siora Masterplan – Dubai Islands";
      description =
        "Invest in Hado by Beyond — Japanese-inspired design, 3.2m ceilings, wellness spa, chef's kitchen & The Cove pool.Blue Flag beach access. 10 mins to Gold Souq Metro. Book a Free Consultation";
    } else if (
      property.name.toLowerCase().includes("fairmont residences") ||
      slug.includes("fairmont-residences")
    ) {
      title = "Fairmont Solara Tower | Luxury Apartments | Astera Real Estate";
      description =
        "Own a Fairmont-branded residence in the heart of Downtown Dubai. 55-floor, 277m tower offering 1-5 BR luxury apartments & ultra-luxury penthouses. Book a Free Consultation";
    } else if (
      property.name.toLowerCase().includes("golf vale") ||
      slug.includes("golf-vale")
    ) {
      title =
        "Golf Vale by Emaar | 1-3BR Apartments & Townhouses – Astera Real Estate";
      description =
        "Buy off-plan at Golf Vale, Emaar South - Direct golf course views, infinity pool & world-class amenities. Near Expo City&Al Maktoum Airport. Strong capital growth potential";
    } else if (
      property.name.toLowerCase().includes("vela viento") ||
      slug.includes("vela-viento")
    ) {
      title =
        "VELA Viento by OMNIYAT | Ultra-Luxury Apartments Astera Real Estate";
      description =
        "Own one of only 95 residences at VELA Viento — Foster + Partners architecture, Gilles & Boissier interiors, Burj Khalifa views & 100m infinity sky pool. Enquire now";
    } else if (
      property.name.toLowerCase().includes("sakura gardens") ||
      slug.includes("sakura-gardens")
    ) {
      title =
        "Sakura Gardens Dubai | Off-Plan Luxury Homes  starting from just 800K AED";
      description =
        "Discover Sakura Gardens in Dubai, a premium off-plan villas & residences with attractive payment plans. Invest in Dubai real estate with Astera today.";
    } else if (
      property.name.toLowerCase().includes("lumena by omniyat") ||
      slug.includes("lumena-by-omniyat")
    ) {
      title = "Lumena by Omniyat Dubai | Luxury Off-Plan";
      description =
        "Explore Lumena by Omniyat – ultra-luxury residences in Dubai with premium amenities and flexible payment options.";
    } else if (
      property.name.toLowerCase().includes("symphony by imtiaz") ||
      slug.includes("symphony-by-imtiaz")
    ) {
      title = "Symphony by Imtiaz Dubai | Luxury Apartments";
      description =
        "Discover Symphony by Imtiaz – premium off-plan apartments in Dubai designed for modern luxury living.";
    } else if (
      property.name.toLowerCase().includes("sobha orbis") ||
      slug.includes("sobha-orbis")
    ) {
      title = "Sobha Orbis Dubai | Luxury Off-Plan Homes";
      description =
        "Invest in Sobha Orbis Dubai – elegant off-plan residences with world-class amenities and strong ROI potential.";
    } else if (
      property.name.toLowerCase().includes("saas hills residences") ||
      slug.includes("saas-hills-residences")
    ) {
      title = "Saas Hills Residences Dubai | Off-Plan Villas";
      description =
        "Explore Saas Hills Residences – luxury villas in Dubai offering scenic views, premium living and flexible payment plans.";
    }

    return {
      title,
      description,
      alternates: {
        canonical: `https://www.asterarealestate.com/offplan/${slug}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.asterarealestate.com/offplan/${slug}`,
        images: property.images?.[0]?.url
          ? [property.images[0].url]
          : ["/images/common/og-image.jpg"],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: property.images?.[0]?.url
          ? [property.images[0].url]
          : ["/images/common/og-image.jpg"],
      },
    };
  } catch (error) {
    return {
      title: "Offplan Properties | Astera Real Estate",
      description: "Discover luxury offplan properties in Dubai",
    };
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
