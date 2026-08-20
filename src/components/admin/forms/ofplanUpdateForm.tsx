// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/ban-ts-comment */
// "use client";

// import { useState, useContext } from "react";
// import { OffPlanInterface } from "@/interfaces/interface";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { OffplanContext } from "@/context/offplanContext";

// type Props = {
//   initialData: OffPlanInterface;
// };

// const UpdateOffplanPropertyForm = ({ initialData }: Props) => {
//   const context = useContext(OffplanContext);
//   const router = useRouter();

//   // Handle price correctly - check if it's object or number
//   const initialPrice = initialData.price;
//   const priceValue = typeof initialPrice === 'object' && initialPrice !== null 
//     ? initialPrice.value 
//     : Number(initialPrice);
//   const priceUnit = typeof initialPrice === 'object' && initialPrice !== null 
//     ? initialPrice.unit 
//     : "M";

//   const [formData, setFormData] = useState({
//     ...initialData,
//     price: priceValue.toString(),
//     bookingAmount: initialData.bookingAmount.toString(),
//     handover: initialData.handover.toString(),
//     commission: initialData.commission.toString(),
//     onBooking: initialData.onBooking.toString(),
//     construction: initialData.construction.toString(),
//     onHandover: initialData.onHandover.toString(),
//     video: initialData.video?.toString() ?? ""
//   });
  
//   const [priceUnitState, setPriceUnitState] = useState(priceUnit);
//   const [loading, setLoading] = useState(false);
//   const [publishAction, setPublishAction] = useState<"draft" | "published">(
//     initialData.status ?? "draft"
//   );

//   const inputClass =
//     "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
//   const labelClass = "block font-semibold mb-1";
//   const sectionClass = "mb-4";
//   const buttonClass =
//     "bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition";

//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (!files) return;

//     setLoading(true);

//     const uploadedImages = await Promise.all(
//       Array.from(files).map(async (file) => {
//         const data = new FormData();
//         data.append("file", file);
//         data.append(
//           "upload_preset",
//           process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
//         );

//         const res = await axios.post(
//           `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
//           data
//         );

//         return { url: res.data.secure_url };
//       })
//     );

//     setFormData((prev) => ({
//       ...prev,
//       images: [...prev.images, ...uploadedImages],
//     }));

//     setLoading(false);
//   };

//   const handleSingleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     setLoading(true);

//     const data = new FormData();
//     data.append("file", file);
//     data.append(
//       "upload_preset",
//       process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
//     );

//     try {
//       const res = await axios.post(
//         `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
//         data
//       );

//       setFormData((prev) => ({
//         ...prev,
//         qr: { url: res.data.secure_url },
//       }));
//     } catch (error) {
//       console.error("Image upload failed", error);
//     }

//     setLoading(false);
//   };

//   const handleRemoveQr = () => {
//     setFormData((prev) => ({
//       ...prev,
//       qr: null,
//     }));
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleArrayChange = (
//     field: keyof OffPlanInterface,
//     index: number,
//     value: string
//   ) => {
//     const updated = [...(formData[field] as string[])];
//     updated[index] = value;
//     setFormData((prev) => ({ ...prev, [field]: updated }));
//   };

//   const addArrayField = (field: keyof OffPlanInterface) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: [...(prev[field] as string[]), ""],
//     }));
//   };

//   const removeArrayField = (field: keyof OffPlanInterface, index: number) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: (prev[field] as string[]).filter((_, i) => i !== index),
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const cleanedData: OffPlanInterface = {
//       ...formData,
//       price: {
//         value: Number(formData.price),
//         unit: priceUnitState,
//       },
//       bookingAmount: Number(formData.bookingAmount),
//       handover: Number(formData.handover),
//       commission: Number(formData.commission),
//       onBooking: Number(formData.onBooking),
//       construction: Number(formData.construction),
//       onHandover: Number(formData.onHandover),
//       status: publishAction,
//     };

//     console.log(cleanedData);

//     try {
//       if (context && context.updateProduct) {
//         await context.updateProduct(initialData._id, cleanedData);
//         toast.success("Property updated successfully!");
//         router.push("/admin/adminoffplan");
//       } else {
//         throw new Error("Context not available");
//       }
//     } catch (error) {
//       console.error("Update error", error);
//       toast.error("Error updating property.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addApartmentType = () => {
//     setFormData((prev) => ({
//       ...prev,
//       apartmentTypes: [
//         ...(prev.apartmentTypes || []),
//         { propertyType: "", size: "", price: "" },
//       ],
//     }));
//   };

//   const updateApartmentType = (
//     index: number,
//     field: "propertyType" | "size" | "price",
//     value: string | number
//   ) => {
//     const updated = [...(formData.apartmentTypes || [])];
//     //@ts-expect-error
//     updated[index][field] = field === "price" ? (value) : value;
//     setFormData((prev) => ({
//       ...prev,
//       apartmentTypes: updated,
//     }));
//   };

//   const removeApartmentType = (index: number) => {
//     const updated = formData.apartmentTypes?.filter((_, i) => i !== index) || [];
//     setFormData((prev) => ({
//       ...prev,
//       apartmentTypes: updated,
//     }));
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-4 max-w-2xl mx-auto p-6 border rounded-lg bg-white shadow-md"
//     >
//       <h2 className="text-2xl font-bold mb-4">Update Offplan Property</h2>

//       {/* Basic Fields */}
//       {["name", "location", "description", "propertyType", "squareFeet", "video", "bedroom"].map((field) => (
//         <div key={field} className={sectionClass}>
//           <label className={labelClass}>{field}</label>
//           <input
//             name={field}
//             value={(formData as any)[field] || ""}
//             onChange={handleChange}
//             className={inputClass}
//           />
//         </div>
//       ))}

//       {/* Price Field with Unit */}
//       <div className={sectionClass}>
//         <label className={labelClass}>Price</label>
//         <div className="flex gap-2">
//           <input
//             name="price"
//             type="number"
//             value={formData.price}
//             onChange={handleChange}
//             className={inputClass}
//           />
//           <select
//             value={priceUnitState}
//             onChange={(e) => setPriceUnitState(e.target.value as "K" | "M")}
//             className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="K">K</option>
//             <option value="M">M</option>
//           </select>
//         </div>
//       </div>

//       {/* Numeric Fields */}
//       {[
//         "bookingAmount",
//         "handover",
//         "commission",
//         "onBooking",
//         "construction",
//         "onHandover",
//       ].map((field) => (
//         <div key={field} className={sectionClass}>
//           <label className={labelClass}>{field}</label>
//           <input
//             name={field}
//             type="number"
//             value={(formData as any)[field]}
//             onChange={handleChange}
//             className={inputClass}
//           />
//         </div>
//       ))}

//       {/* Dynamic Arrays */}
//       {["keyHighlight", "overview", "invest", "community"].map((field) => (
//         <div key={field} className={sectionClass}>
//           <label className={labelClass}>{field}</label>
//           {(formData as any)[field].map((item: string, index: number) => (
//             <div key={index}>
//               <input
//                 key={index}
//                 value={item}
//                 placeholder={`${field} ${index + 1}`}
//                 onChange={(e) => handleArrayChange(field as any, index, e.target.value)}
//                 className={`${inputClass} mb-2`}
//               />
//               <button
//                 type="button"
//                 onClick={() => removeArrayField(field as keyof OffPlanInterface, index)}
//                 className="text-red-500 text-xs hover:underline"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => addArrayField(field as any)}
//             className="text-blue-600 text-sm hover:underline mt-1"
//           >
//             + Add {field}
//           </button>
//         </div>
//       ))}

//       {/* Upload Images */}
//       <div>
//         <label className="font-semibold">Upload Images</label>
//         <input
//           type="file"
//           multiple
//           onChange={handleImageUpload}
//           className="block w-full text-sm text-gray-600 mt-2"
//         />
//         {loading && <p className="text-sm text-gray-500 mt-2">Uploading images...</p>}

//         <div className="flex flex-wrap gap-2 mt-2">
//           {formData.images.map((img, i) => (
//             <div key={i} className="relative w-24 h-24">
//               <img
//                 src={img.url}
//                 alt={`img-${i}`}
//                 className="w-full h-full object-cover rounded-lg border"
//               />
//               <button
//                 type="button"
//                 onClick={() =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     images: prev.images.filter((_, index) => index !== i),
//                   }))
//                 }
//                 className="absolute top-0 right-0 bg-white text-red-600 rounded-full p-1 shadow hover:bg-red-100"
//                 title="Remove image"
//               >
//                 ❌
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* QR upload */}
//       <div className="space-y-2">
//         <label className="block text-sm font-medium">Upload QR Image</label>

//         {!formData.qr?.url ? (
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleSingleImageUpload}
//             className="block w-full text-sm"
//           />
//         ) : (
//           <div className="relative w-32 h-32">
//             <img
//               src={formData.qr.url}
//               alt="QR Preview"
//               className="w-full h-full object-contain border rounded"
//             />
//             <button
//               type="button"
//               onClick={handleRemoveQr}
//               className="absolute top-0 right-0 bg-white text-red-600 rounded-full p-1 shadow hover:bg-red-100"
//               title="Remove QR"
//             >
//               ❌
//             </button>
//           </div>
//         )}
//       </div>

//       <div>
//         <h3 className="text-lg font-semibold mb-2">Apartment Types</h3>
//         {formData.apartmentTypes?.map((apt, index) => (
//           <div key={index} className="mb-4 border p-4 rounded-md shadow-sm">
//             <input
//               type="text"
//               placeholder="Property Type"
//               value={apt.propertyType}
//               onChange={(e) =>
//                 updateApartmentType(index, "propertyType", e.target.value)
//               }
//               className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               placeholder="Size"
//               value={apt.size}
//               onChange={(e) => updateApartmentType(index, "size", e.target.value)}
//               className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               placeholder="Price"
//               value={apt.price}
//               onChange={(e) =>
//                 updateApartmentType(index, "price", (e.target.value))
//               }
//               className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
//             />
//             <button
//               type="button"
//               onClick={() => removeApartmentType(index)}
//               className="text-red-600 text-sm hover:underline"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={addApartmentType}
//           className="text-blue-600 text-sm hover:underline"
//         >
//           + Add Apartment Type
//         </button>
//       </div>

//       <div className="flex gap-6 items-center mt-6">
//         <label className="flex items-center gap-2">
//           <input
//             type="radio"
//             checked={publishAction === "draft"}
//             onChange={() => setPublishAction("draft")}
//           />
//           Save as Draft
//         </label>

//         <label className="flex items-center gap-2">
//           <input
//             type="radio"
//             checked={publishAction === "published"}
//             onChange={() => setPublishAction("published")}
//           />
//           Publish
//         </label>
//       </div>

//       <div className="flex gap-3 mt-6">
//         <button
//           type="submit"
//           className={buttonClass}
//         >
//           Update Property
//         </button>
//       </div>
//     </form>
//   );
// };

// export default UpdateOffplanPropertyForm;


/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useState, useContext } from "react";
import { OffPlanInterface } from "@/interfaces/interface";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { OffplanContext } from "@/context/offplanContext";

type Props = {
  initialData: OffPlanInterface;
};

const UpdateOffplanPropertyForm = ({ initialData }: Props) => {
  const context = useContext(OffplanContext);
  const router = useRouter();

  // Handle price correctly - check if it's object or number
  const initialPrice = initialData.price;
  const priceValue =
    typeof initialPrice === "object" && initialPrice !== null
      ? initialPrice.value
      : Number(initialPrice);
  const priceUnit =
    typeof initialPrice === "object" && initialPrice !== null
      ? initialPrice.unit
      : "M";

  const [formData, setFormData] = useState({
    ...initialData,
    isFeatured: initialData.isFeatured ?? false, // ⭐ ADDED: Featured property state
    price: priceValue.toString(),
    bookingAmount: initialData.bookingAmount.toString(),
    handover: initialData.handover.toString(),
    commission: initialData.commission.toString(),
    onBooking: initialData.onBooking.toString(),
    construction: initialData.construction.toString(),
    onHandover: initialData.onHandover.toString(),
    video: initialData.video?.toString() ?? "",
  });

  const [priceUnitState, setPriceUnitState] = useState<"K" | "M">(priceUnit);
  const [loading, setLoading] = useState(false);
  const [publishAction, setPublishAction] = useState<"draft" | "published">(
    initialData.status ?? "draft"
  );

  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block font-semibold mb-1";
  const sectionClass = "mb-4";
  const buttonClass =
    "bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition";

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setLoading(true);

    const uploadedImages = await Promise.all(
      Array.from(files).map(async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
        );

        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          data
        );

        return { url: res.data.secure_url };
      })
    );

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...uploadedImages],
    }));

    setLoading(false);
  };

  const handleSingleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const data = new FormData();
    data.append("file", file);
    data.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        data
      );

      setFormData((prev) => ({
        ...prev,
        qr: { url: res.data.secure_url },
      }));
    } catch (error) {
      console.error("Image upload failed", error);
    }

    setLoading(false);
  };

  const handleRemoveQr = () => {
    setFormData((prev) => ({
      ...prev,
      qr: null,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (
    field: keyof OffPlanInterface,
    index: number,
    value: string
  ) => {
    const updated = [...(formData[field] as string[])];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const addArrayField = (field: keyof OffPlanInterface) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as string[]), ""],
    }));
  };

  const removeArrayField = (field: keyof OffPlanInterface, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const cleanedData: OffPlanInterface = {
      ...formData,
      isFeatured: formData.isFeatured, // ⭐ ADDED: Include featured status
      price: {
        value: Number(formData.price),
        unit: priceUnitState,
      },
      bookingAmount: Number(formData.bookingAmount),
      handover: Number(formData.handover),
      commission: Number(formData.commission),
      onBooking: Number(formData.onBooking),
      construction: Number(formData.construction),
      onHandover: Number(formData.onHandover),
      status: publishAction,
    };

    console.log(cleanedData);

    try {
      if (context && context.updateProduct) {
        await context.updateProduct(initialData._id, cleanedData);
        toast.success("Property updated successfully!");
        router.push("/admin/adminoffplan");
      } else {
        throw new Error("Context not available");
      }
    } catch (error) {
      console.error("Update error", error);
      toast.error("Error updating property.");
    } finally {
      setLoading(false);
    }
  };

  const addApartmentType = () => {
    setFormData((prev) => ({
      ...prev,
      apartmentTypes: [
        ...(prev.apartmentTypes || []),
        { propertyType: "", size: "", price: "" },
      ],
    }));
  };

  const updateApartmentType = (
    index: number,
    field: "propertyType" | "size" | "price",
    value: string | number
  ) => {
    const updated = [...(formData.apartmentTypes || [])];
    //@ts-expect-error
    updated[index][field] = field === "price" ? value : value;
    setFormData((prev) => ({
      ...prev,
      apartmentTypes: updated,
    }));
  };

  const removeApartmentType = (index: number) => {
    const updated = formData.apartmentTypes?.filter((_, i) => i !== index) || [];
    setFormData((prev) => ({
      ...prev,
      apartmentTypes: updated,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl mx-auto p-6 border rounded-lg bg-white shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Update Offplan Property</h2>

      {/* Basic Fields */}
      {[
        "name",
        "location",
        "description",
        "propertyType",
        "squareFeet",
        "video",
        "bedroom",
      ].map((field) => (
        <div key={field} className={sectionClass}>
          <label className={labelClass}>{field}</label>
          <input
            name={field}
            value={(formData as any)[field] || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      ))}

      {/* ⭐ FEATURED PROPERTY CHECKBOX */}
      <div className={sectionClass}>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.isFeatured}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                isFeatured: e.target.checked,
              }))
            }
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="font-semibold">Feature this property</span>
        </label>
        <p className="text-sm text-gray-500 mt-1">
          Check this box to highlight this property as featured
        </p>
      </div>

      {/* Price Field with Unit */}
      <div className={sectionClass}>
        <label className={labelClass}>Price</label>
        <div className="flex gap-2">
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            className={inputClass}
          />
          <select
            value={priceUnitState}
            onChange={(e) =>
              setPriceUnitState(e.target.value as "K" | "M")
            }
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="K">K</option>
            <option value="M">M</option>
          </select>
        </div>
      </div>

      {/* Numeric Fields */}
      {[
        "bookingAmount",
        "handover",
        "commission",
        "onBooking",
        "construction",
        "onHandover",
      ].map((field) => (
        <div key={field} className={sectionClass}>
          <label className={labelClass}>{field}</label>
          <input
            name={field}
            type="number"
            value={(formData as any)[field]}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      ))}

      {/* Dynamic Arrays */}
      {["keyHighlight", "overview", "invest", "community"].map((field) => (
        <div key={field} className={sectionClass}>
          <label className={labelClass}>{field}</label>
          {(formData as any)[field].map((item: string, index: number) => (
            <div key={index}>
              <input
                key={index}
                value={item}
                placeholder={`${field} ${index + 1}`}
                onChange={(e) =>
                  handleArrayChange(field as any, index, e.target.value)
                }
                className={`${inputClass} mb-2`}
              />
              <button
                type="button"
                onClick={() =>
                  removeArrayField(field as keyof OffPlanInterface, index)
                }
                className="text-red-500 text-xs hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField(field as any)}
            className="text-blue-600 text-sm hover:underline mt-1"
          >
            + Add {field}
          </button>
        </div>
      ))}

      {/* Upload Images */}
      <div>
        <label className="font-semibold">Upload Images</label>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-600 mt-2"
        />
        {loading && (
          <p className="text-sm text-gray-500 mt-2">Uploading images...</p>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          {formData.images.map((img, i) => (
            <div key={i} className="relative w-24 h-24">
              <img
                src={img.url}
                alt={`img-${i}`}
                className="w-full h-full object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    images: prev.images.filter((_, index) => index !== i),
                  }))
                }
                className="absolute top-0 right-0 bg-white text-red-600 rounded-full p-1 shadow hover:bg-red-100"
                title="Remove image"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* QR upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Upload QR Image</label>

        {!formData.qr?.url ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleSingleImageUpload}
            className="block w-full text-sm"
          />
        ) : (
          <div className="relative w-32 h-32">
            <img
              src={formData.qr.url}
              alt="QR Preview"
              className="w-full h-full object-contain border rounded"
            />
            <button
              type="button"
              onClick={handleRemoveQr}
              className="absolute top-0 right-0 bg-white text-red-600 rounded-full p-1 shadow hover:bg-red-100"
              title="Remove QR"
            >
              ❌
            </button>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Apartment Types</h3>
        {formData.apartmentTypes?.map((apt, index) => (
          <div key={index} className="mb-4 border p-4 rounded-md shadow-sm">
            <input
              type="text"
              placeholder="Property Type"
              value={apt.propertyType}
              onChange={(e) =>
                updateApartmentType(index, "propertyType", e.target.value)
              }
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Size"
              value={apt.size}
              onChange={(e) =>
                updateApartmentType(index, "size", e.target.value)
              }
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Price"
              value={apt.price}
              onChange={(e) =>
                updateApartmentType(index, "price", e.target.value)
              }
              className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md"
            />
            <button
              type="button"
              onClick={() => removeApartmentType(index)}
              className="text-red-600 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addApartmentType}
          className="text-blue-600 text-sm hover:underline"
        >
          + Add Apartment Type
        </button>
      </div>

      <div className="flex gap-6 items-center mt-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={publishAction === "draft"}
            onChange={() => setPublishAction("draft")}
          />
          Save as Draft
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={publishAction === "published"}
            onChange={() => setPublishAction("published")}
          />
          Publish
        </label>
      </div>

      <div className="flex gap-3 mt-6">
        <button type="submit" className={buttonClass}>
          Update Property
        </button>
      </div>
    </form>
  );
};

export default UpdateOffplanPropertyForm;