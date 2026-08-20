import { GetBlogBySlug } from "@/api";
import { Metadata } from "next";

// Helper
function truncateDescription(text: string, maxLength = 170) {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const news = await GetBlogBySlug(id);

    if (!news) {
      const fallbackDesc = "The requested news or insights could not be found.";

      return {
        title: "News & Insights Not Found | Astera Real Estate",
        description: fallbackDesc,
        alternates: {
          canonical: `https://www.asterarealestate.com/news&insights/${id}`,
        },
        openGraph: {
          title: "News & Insights Not Found | Astera Real Estate",
          description: fallbackDesc,
          url: `https://www.asterarealestate.com/news&insights/${id}`,
        },
        twitter: {
          card: "summary_large_image",
          title: "News & Insights Not Found | Astera Real Estate",
          description: fallbackDesc,
        },
      };
    }

    const title = `${news.title} | Astera Real Estate`;

    const rawDescription =
      news.description ||
      "Latest news and insights on Dubai real estate market, trends, and investment opportunities.";

    const description = truncateDescription(rawDescription, 170);

    return {
      title,
      description,
      alternates: {
        canonical: `https://www.asterarealestate.com/news&insights/${id}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.asterarealestate.com/news&insights/${id}`,
        images: news.images?.[0]?.url
          ? [news.images[0].url]
          : ["/images/common/og-image.jpg"],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: news.images?.[0]?.url
          ? [news.images[0].url]
          : ["/images/common/og-image.jpg"],
      },
    };
  } catch (error) {
    const fallbackDesc =
      "Latest news and insights on Dubai real estate market, trends, and investment opportunities.";

    return {
      title: "News & Insights | Astera Real Estate",
      description: truncateDescription(fallbackDesc, 170),
      alternates: {
        canonical: `https://www.asterarealestate.com/news&insights/${id}`,
      },
      openGraph: {
        title: "News & Insights | Astera Real Estate",
        description: truncateDescription(fallbackDesc, 170),
        url: `https://www.asterarealestate.com/news&insights/${id}`,
      },
      twitter: {
        card: "summary_large_image",
        title: "News & Insights | Astera Real Estate",
        description: truncateDescription(fallbackDesc, 170),
      },
    };
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
