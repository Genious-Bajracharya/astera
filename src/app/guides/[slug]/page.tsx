// "use client";
// import BuyerGuide from "@/components/guide/buyerguide";
// import SellerGuide from "@/components/guide/sellerguide";
// import AreaGuide from "@/components/guide/areaguide";
// import Connect from "@/components/guide/connect";
// import Seller from "@/components/common/seller/seller";
// import { useParams } from "next/navigation";

// const GuideDetail = () => {
//   const { slug } = useParams();
//   const guide = slug as string;

//   const renderGuide = () => {
//     switch (guide.toLowerCase()) {
//       case "buyerguide":
//         return <BuyerGuide />;
//       case "sellerguide":
//         return <SellerGuide />;
//       case "areaguide":
//         return <AreaGuide />;
//       default:
//         return (
//           <div className="text-center py-10 text-red-500">Guide not found.</div>
//         );
//     }
//   };

//   return (
//     <div className="ptb">
//       <div className="bg-[url(/images/landing/hero.jpg)] h-[300px] lg:h-[430px]  bg-cover bg-bottom  relative ">
//         {/* better overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
//         {/* Right hover div */}
//         <div className=" p-3 absolute bottom-16 lg:bottom-[123px] space-y-4 plr text-white">
//           <p className="font-outfit text-5xl capitalize">{guide}</p>
//           <p>
//             <span className="font-bold">Home</span>
//             {" > "} Guides {` > `} {guide}
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-col  lg:flex-row">
//         {renderGuide()}
//         <Connect />
//       </div>
//       <Seller />
//     </div>
//   );
// };

// export default GuideDetail;
import BuyerGuide from "@/components/guide/buyerguide";
import SellerGuide from "@/components/guide/sellerguide";
import AreaGuide from "@/components/guide/areaguide";
import Connect from "@/components/guide/connect";
import Seller from "@/components/common/seller/seller";
import { Metadata } from "next";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lowerSlug = slug.toLowerCase();

  let title = "Dubai Real Estate Guide | Astera";
  let description =
    "Expert guide to buying, selling, or investing in Dubai property.";

  switch (lowerSlug) {
    case "buyerguide":
      title = "How to Buy Property in Dubai | Buyer Guide 2026 – Astera";
      description =
        "Buying property in Dubai? A complete guide on financing, legal process, off-plan rules and negotiation tips. Get expert advice from Astera today.";
      break;

    case "sellerguide":
      title = "How to Sell Property in Dubai | Seller Guide 2026 – Astera";
      description =
        "Selling property in Dubai? Discover pricing tips, marketing strategy, legal steps and expert negotiation advice with Astera. Get Free Property Valuation.";
      break;

    case "areaguide":
      title = "Dubai Area Guide | Best Communities to Live & Invest – Astera";
      description =
        "Explore the best areas in Dubai to live or invest. Compare communities, property prices, rental yields and lifestyle benefits in one place. Get Area Investment Report.";
      break;

    default:
      title = "Guide Not Found | Astera Real Estate";
      description = "The requested Dubai real estate guide could not be found.";
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.asterarealestate.com/guides/${lowerSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.asterarealestate.com/guides/${lowerSlug}`,
      //   images: ["/og-guides.jpg"],
    },
  };
}
export default async function GuideDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = slug;

  const renderGuide = () => {
    switch (guide.toLowerCase()) {
      case "buyerguide":
        return <BuyerGuide />;
      case "sellerguide":
        return <SellerGuide />;
      case "areaguide":
        return <AreaGuide />;
      default:
        return (
          <div className="text-center py-10 text-red-500">Guide not found.</div>
        );
    }
  };

  return (
    <div className="ptb">
      <div className="bg-[url(/images/landing/hero.jpg)] h-[300px] lg:h-[430px] bg-cover bg-bottom relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>

        <div className="p-3 absolute bottom-16 lg:bottom-[123px] space-y-4 plr text-white">
          <p className="font-outfit text-5xl capitalize">{guide}</p>
          <p>
            <span className="font-bold">Home</span>
            {" > "} Guides {` > `} {guide}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {renderGuide()}
        <Connect />
      </div>

      <Seller />
    </div>
  );
}
