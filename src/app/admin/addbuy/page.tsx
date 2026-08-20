/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import axios from "axios";
import { PropertyInterface } from "@/interfaces/interface";
import { CreateBuy } from "@/api";

type PropertyFormState = Omit<PropertyInterface, "_id" | "images"> & {
  price: number | string;
  bedrooms: number | string;
  bathrooms: number | string;
  squareFeet: number | string;
  images: { url: string }[];
};

const CreateBuyPropertyForm = () => {
  const [formData, setFormData] = useState<PropertyFormState>({
    name: "",
    propertyFeatures: [""],
    propertyType: "",
    description: "",
    price: 0,
    location: "",
    bedrooms: 0,
    bathrooms: 0,
    squareFeet: 0,
    furnishing: "ALL",
    amenities: [""],
    images: [],
    video: "",
    isFeatured: false,
    slug: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Reusable Tailwind CSS classes
  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block font-semibold mb-1";
  const sectionClass = "mb-4";
  const buttonClass =
    "bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedData: PropertyInterface = {
      ...(formData as any),
      price: Number(formData.price),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      squareFeet: Number(formData.squareFeet),
    };

    try {
      const response = await CreateBuy(cleanedData);
      alert("Property created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Submission error", error);
      alert("Error creating property.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl mx-auto p-6 border rounded-lg bg-white shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Create Buy Property</h2>

      {/* Basic Fields */}
      <div className={sectionClass}>
        <label className={labelClass}>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className={sectionClass}>
        <label className={labelClass}>Video</label>
        <input
          name="nVideoame"
          value={formData.video}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className={sectionClass}>
        <label className={labelClass}>Property Type</label>
        <input
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className={sectionClass}>
        <label className={labelClass}>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className={sectionClass}>
        <label className={labelClass}>Location</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Numeric Fields */}
      <div className={sectionClass}>
        <label className={labelClass}>Price</label>
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className={sectionClass}>
        <label className={labelClass}>Bedrooms</label>
        <input
          name="bedrooms"
          type="number"
          value={formData.bedrooms}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className={sectionClass}>
        <label className={labelClass}>Bathrooms</label>
        <input
          name="bathrooms"
          type="number"
          value={formData.bathrooms}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className={sectionClass}>
        <label className={labelClass}>Square Feet</label>
        <input
          name="squareFeet"
          type="number"
          value={formData.squareFeet}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Furnishing */}
      <div className={sectionClass}>
        <label className={labelClass}>Furnishing</label>
        <select
          name="furnishing"
          value={formData.furnishing}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="ALL">ALL</option>
          <option value="furnished">Furnished</option>
          <option value="semi-furnished">Semi-Furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>
      </div>

      {/* Dynamic Arrays */}
      {["propertyFeatures", "amenities"].map((field) => (
        <div key={field} className={sectionClass}>
          <label className={labelClass}>{field}</label>
          {(formData as any)[field].map((item: string, index: number) => (
            <input
              key={index}
              value={item}
              placeholder={`${field} ${index + 1}`}
              onChange={(e) =>
                handleArrayChange(field as any, index, e.target.value)
              }
              className={`${inputClass} mb-2`}
            />
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

      {/* Image Upload */}
      <div className={sectionClass}>
        <label className={labelClass}>Upload Images</label>
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
            <img
              key={i}
              src={img.url}
              alt={`img-${i}`}
              className="w-24 h-24 object-cover rounded-lg border"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.isFeatured}
          onChange={(e) =>
            setFormData({ ...formData, isFeatured: e.target.checked })
          }
        />
        <label className="font-medium">Feature this property</label>
      </div>

      {/* Submit Button */}
      <button type="submit" className={buttonClass}>
        Submit
      </button>
    </form>
  );
};

export default CreateBuyPropertyForm;
