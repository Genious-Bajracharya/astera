/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useContext } from "react";
import axios from "axios";
import { CreateOffplan } from "@/api";
import { OffPlanInterface } from "@/interfaces/interface";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { OffplanContext } from "@/context/offplanContext";

// Extend the interface for temporary form state
type PriceValue = {
  value: number;
  unit: "M" | "K";
};

type OffplanFormState = Omit<OffPlanInterface, "_id" | "images" | "price"> & {
  price: PriceValue;
  status: "draft" | "published";
  isFeatured: boolean; // ⭐ ADDED: Featured property
  bookingAmount: number | string;
  handover: number | string;
  commission: number | string;
  onBooking: number | string;
  construction: number | string;
  onHandover: number | string;
  images: { url: string }[];
  qr: { url: string } | null;
  video?: string;
  apartmentTypes?: {
    propertyType: string;
    size: string;
    price: string;
  }[];
};

type ArrayFieldKey = "keyHighlight" | "overview" | "invest" | "community";

const CreateOffplanForm = () => {
  const [formData, setFormData] = useState<OffplanFormState>({
    status: "draft",
    isFeatured: false, // ⭐ ADDED: Default to false
    name: "",
    slug: "",
    location: "",
    description: "",
    propertyType: "",
    squareFeet: "",
    qr: { url: "" },
    price: {
      value: 0,
      unit: "M",
    },
    bookingAmount: 0,
    handover: 0,
    commission: 0,
    onBooking: 0,
    construction: 0,
    onHandover: 0,
    keyHighlight: [""],
    overview: [""],
    invest: [""],
    community: [""],
    images: [],
    video: "",
    apartmentTypes: [],
    bedroom: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const context = useContext(OffplanContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const parsedValue =
      type === "number" ? (value === "" ? "" : Number(value)) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleArrayChange = (
    field: keyof typeof formData,
    index: number,
    value: string
  ) => {
    const updated = [...(formData[field] as string[])];
    updated[index] = value;
    setFormData((prev) => ({
      ...prev,
      [field]: updated,
    }));
  };

  const addArrayField = (field: keyof typeof formData) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as string[]), ""],
    }));
  };

  const removeArrayField = (field: ArrayFieldKey, index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index),
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);

    const uploadedImages: { url: string }[] = [];

    for (const file of Array.from(files)) {
      try {
        const data = new FormData();
        data.append("file", file);
        data.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
        );

        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          data,
          { timeout: 60000 }
        );

        uploadedImages.push({ url: res.data.secure_url });
      } catch (error) {
        console.error("Image upload failed:", file.name, error);
        toast.error(`Failed to upload ${file.name}`);
      }
    }

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...uploadedImages],
    }));

    e.target.value = "";
    setLoading(false);
  };

  const handleSingleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    try {
      const data = new FormData();
      data.append("file", file);
      data.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
      );

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        data,
        { timeout: 60000 }
      );

      setFormData((prev) => ({
        ...prev,
        qr: { url: res.data.secure_url },
      }));
    } catch (error) {
      console.error("QR upload failed", error);
      toast.error("QR upload failed");
    }

    e.target.value = "";
    setLoading(false);
  };

  const handleRemoveQr = () => {
    setFormData((prev) => ({
      ...prev,
      qr: null,
    }));
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
    const updated =
      formData.apartmentTypes?.filter((_, i) => i !== index) || [];
    setFormData((prev) => ({
      ...prev,
      apartmentTypes: updated,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedData: OffPlanInterface = {
      ...(formData as any),
      isFeatured: formData.isFeatured, // ⭐ ADDED: Include featured status
      price: {
        value: Number(formData.price.value),
        unit: formData.price.unit,
      },
      bookingAmount: Number(formData.bookingAmount),
      handover: Number(formData.handover),
      commission: Number(formData.commission),
      onBooking: Number(formData.onBooking),
      construction: Number(formData.construction),
      onHandover: Number(formData.onHandover),
    };

    console.log(cleanedData);

    try {
      const response = await CreateOffplan(cleanedData);
      toast.success("Property created successfully!");

      if (context && context.fetchData) {
        context.fetchData();
      }

      router.push("/admin/adminoffplan");
    } catch (error) {
      console.error("Submission error", error);
      toast.error("Error creating property.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl mx-auto p-6 border rounded-lg bg-white shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Create Offplan Property</h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="propertyType"
        placeholder="Property Type"
        value={formData.propertyType}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="squareFeet"
        placeholder="Square Feet"
        value={formData.squareFeet}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="bedroom"
        placeholder="Bedroom"
        value={formData.bedroom}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* ⭐ FEATURED PROPERTY CHECKBOX */}
      <div className="flex items-center gap-3 p-3 border rounded-md">
        <input
          type="checkbox"
          id="isFeatured"
          checked={formData.isFeatured}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              isFeatured: e.target.checked,
            }))
          }
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <label htmlFor="isFeatured" className="font-semibold cursor-pointer">
          Feature this property
        </label>
        <span className="text-sm text-gray-500 ml-2">
          (Highlight as featured property)
        </span>
      </div>

      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Price"
          value={formData.price.value}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              price: { ...prev.price, value: Number(e.target.value) },
            }))
          }
          className="w-full px-4 py-2 border rounded"
        />

        <select
          value={formData.price.unit}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              price: { ...prev.price, unit: e.target.value as "K" | "M" },
            }))
          }
          className="px-3 py-2 border rounded"
        >
          <option value="K">Thousand (K)</option>
          <option value="M">Million (M)</option>
        </select>
      </div>

      <label htmlFor="">Booking amount</label>
      <input
        name="bookingAmount"
        type="number"
        placeholder="Booking Amount"
        value={formData.bookingAmount}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="">Handover Year</label>
      <input
        name="handover"
        type="number"
        placeholder="Handover Year"
        value={formData.handover}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="">Commission</label>
      <input
        name="commission"
        type="number"
        placeholder="Commission"
        value={formData.commission}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="">On Booking (%)</label>
      <input
        name="onBooking"
        type="number"
        placeholder="On Booking (%)"
        value={formData.onBooking}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="">Construction (%)t</label>
      <input
        name="construction"
        type="number"
        placeholder="Construction (%)"
        value={formData.construction}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="">ON handover %</label>
      <input
        name="onHandover"
        type="number"
        placeholder="On Handover (%)"
        value={formData.onHandover}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="video"
        placeholder="Video URL"
        value={formData.video}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

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

      {/* Dynamic Arrays */}
      {["keyHighlight", "overview", "invest", "community"].map((field) => (
        <div key={field}>
          <label className="font-semibold capitalize">{field}</label>
          {(formData as any)[field].map((item: string, index: number) => (
            <div key={index}>
              <input
                key={index}
                value={item}
                placeholder={`${field} ${index + 1}`}
                onChange={(e) =>
                  handleArrayChange(field as any, index, e.target.value)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeArrayField(field as ArrayFieldKey, index)}
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
            checked={formData.status === "draft"}
            onChange={() =>
              setFormData((prev) => ({ ...prev, status: "draft" }))
            }
          />
          Save as Draft
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={formData.status === "published"}
            onChange={() =>
              setFormData((prev) => ({ ...prev, status: "published" }))
            }
          />
          Publish
        </label>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
      >
        {formData.status === "draft" ? "Save Draft" : "Publish Property"}
      </button>
    </form>
  );
};

export default CreateOffplanForm;
