// export interface Insight {
//   title: string
//   date: string
//   image: string
//   excerpt: string
// }

// export interface PropertyInterface {
//   _id: string
//   name: string
//   propertyFeatures: string[],
//   propertyType: string,
//   description: string
//   price: number
//   location: string
//   bedrooms: number
//   bathrooms: number
//   squareFeet: number
//   furnishing: 'ALL' | 'furnished' | 'semi-furnished' | 'unfurnished'
//   amenities: string[]
//   images: { url: string }[]
//   video: string
//   category?: 'buy' | 'offplan';
// }

// export interface OffPlanInterface {
//   _id: string
//   name: string
//   location: string
//   description: string
//   propertyType: string,
//   squareFeet: string,
//   bedroom :string,

//   // price: number
//   price: {
//   value: number;
//   unit: "K" | "M";
// };

//   bookingAmount: number
//   handover: number
//   commission: number

//   onBooking:number
//   construction:number
//   onHandover:number
//   status?: "draft" | "published";

//   keyHighlight: string[]
//   overview:string[]
//   invest:string[]
//   community:string[]
//   images: { url: string }[]
//   qr?: {url:string} | null
//   video: string,
//   category?: 'buy' | 'offplan';
//   apartmentTypes?: {
//     propertyType: string;
//     size: string;
//     price: string;
//   }[];
// }

// export interface CareerInterface  {
//   _id:string
//   position: string
//   location: string
//   jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote'
//   requirements: string[]
//   responsibilities: string[]
//   benefits: string[]
// }

// export interface PropertyFilterProps {
//   location: string;
//   setLocation: React.Dispatch<React.SetStateAction<string>>;
//   propertyType: string;
//   setPropertyType: React.Dispatch<React.SetStateAction<string>>;
//   beds: string;
//   setBeds: React.Dispatch<React.SetStateAction<string>>;
//   onSearch: () => void;
//   onReset: () => void;
//   selectedAmenities: string[];
//   setSelectedAmenities: React.Dispatch<React.SetStateAction<string[]>>;
//   selectedFurnishing: string;
//   setSelectedFurnishing: React.Dispatch<React.SetStateAction<string>>;
//   minSize: number;
//   setMinSize: React.Dispatch<React.SetStateAction<number>>;
//   maxSize: number;
//   setMaxSize: React.Dispatch<React.SetStateAction<number>>;
// }

// export interface FilterModalProps {
//   isOpen: boolean
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>> // 💥 ADD THIS
//   onClose: () => void
//   onReset: () => void
//   onApply: () => void

//   selectedAmenities: string[]
//   setSelectedAmenities: (value: string[]) => void

//   selectedFurnishing: string
//   setSelectedFurnishing: (value: string) => void

//   minSize: number
//   setMinSize: (value: number) => void
//   maxSize: number
//   setMaxSize: (value: number) => void

//   minPrice?: string
//   setMinPrice?: React.Dispatch<React.SetStateAction<string>>
//   maxPrice?: string
//   setMaxPrice?: React.Dispatch<React.SetStateAction<string>>

//   bathrooms?: string
//   setBathrooms?: React.Dispatch<React.SetStateAction<string>>

//   amenities?: string[]
//   setAmenities?: React.Dispatch<React.SetStateAction<string[]>>
//   features?: string[]
//   setFeatures?: React.Dispatch<React.SetStateAction<string[]>>
// }

// export interface BlogInterface{
//   _id:string,
//   title:string,
//   content:string,
//   desc:string,
//   createdAt:string,
//   blogCover:string
// }

export interface Insight {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface PropertyInterface {
  _id: string;
  name: string;
  propertyFeatures: string[];
  propertyType: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  furnishing: "ALL" | "furnished" | "semi-furnished" | "unfurnished";
  amenities: string[];
  images: { url: string }[];
  video: string;
  category?: "buy" | "offplan";

  // ✅ ADD THIS: Featured property field
  isFeatured?: boolean;
  slug: string;
}

export interface OffPlanInterface {
  _id: string;
  name: string;
  location: string;
  description: string;
  propertyType: string;
  squareFeet: string;
  bedroom: string;

  price: {
    value: number;
    unit: "K" | "M";
  };

  bookingAmount: number;
  handover: number;
  commission: number;
  onBooking: number;
  construction: number;
  onHandover: number;

  status?: "draft" | "published";

  // ✅ ADD THIS: Featured property field
  isFeatured?: boolean;
  slug: string;

  keyHighlight: string[];
  overview: string[];
  invest: string[];
  community: string[];
  images: { url: string }[];
  qr?: { url: string } | null;
  video: string;
  category?: "buy" | "offplan";
  apartmentTypes?: {
    propertyType: string;
    size: string;
    price: string;
  }[];
}

export interface CareerInterface {
  _id: string;
  position: string;
  location: string;
  jobType: "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote";
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
}

export interface PropertyFilterProps {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  propertyType: string;
  setPropertyType: React.Dispatch<React.SetStateAction<string>>;
  beds: string;
  setBeds: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  onReset: () => void;
  selectedAmenities: string[];
  setSelectedAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  selectedFurnishing: string;
  setSelectedFurnishing: React.Dispatch<React.SetStateAction<string>>;
  minSize: number;
  setMinSize: React.Dispatch<React.SetStateAction<number>>;
  maxSize: number;
  setMaxSize: React.Dispatch<React.SetStateAction<number>>;
}

export interface FilterModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  onReset: () => void;
  onApply: () => void;

  selectedAmenities: string[];
  setSelectedAmenities: (value: string[]) => void;

  selectedFurnishing: string;
  setSelectedFurnishing: (value: string) => void;

  minSize: number;
  setMinSize: (value: number) => void;
  maxSize: number;
  setMaxSize: (value: number) => void;

  minPrice?: string;
  setMinPrice?: React.Dispatch<React.SetStateAction<string>>;
  maxPrice?: string;
  setMaxPrice?: React.Dispatch<React.SetStateAction<string>>;

  bathrooms?: string;
  setBathrooms?: React.Dispatch<React.SetStateAction<string>>;

  amenities?: string[];
  setAmenities?: React.Dispatch<React.SetStateAction<string[]>>;
  features?: string[];
  setFeatures?: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface BlogInterface {
  _id: string;
  title: string;
  content: string;
  desc: string;
  createdAt: string;
  blogCover: string;
  slug: string;
}
