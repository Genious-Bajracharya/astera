/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import { PropertyInterface } from "@/interfaces/interface";
import { UpdateBuy } from "@/api";
import toast from "react-hot-toast";

type Props = {
  initialData: PropertyInterface;
};

const UpdateBuyPropertyForm = ({ initialData }: Props) => {
  const [formData, setFormData] = useState({
    ...initialData,
    price: initialData.price.toString(),
    bedrooms: initialData.bedrooms.toString(),
    bathrooms: initialData.bathrooms.toString(),
    squareFeet: initialData.squareFeet.toString(),
    video: initialData.video ?? "",
    isFeatured: initialData.isFeatured ?? false, // ✅ added
  });

  const [loading, setLoading] = useState(false);

  const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const labelClass = "block font-semibold mb-1";
  const sectionClass = "mb-4";
  const buttonClass =
    "bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (
    field: keyof PropertyInterface,
    index: number,
    value: string
  ) => {
    const updated = [...(formData[field] as string[])];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const addArrayField = (field: keyof PropertyInterface) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as string[]), ""],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    const cleanedData: PropertyInterface = {
      ...formData,
      price: Number(formData.price),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      squareFeet: Number(formData.squareFeet),
      // isFeatured is already included from formData
    };

    try {
      await UpdateBuy(initialData._id, cleanedData);
      toast.success("Property updated successfully!");
      setLoading(false);
    } catch (error) {
      console.error("Update error", error);
      toast.error("Error updating property.");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl mx-auto p-6 border rounded-lg bg-white shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Update Buy Property</h2>

      {/* Basic Fields */}
      {["name", "propertyType", "location", "description", "video"].map(
        (field) => (
          <div key={field} className={sectionClass}>
            <label className={labelClass}>{field}</label>
            <input
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        )
      )}

      {/* Numeric Fields */}
      {["price", "bedrooms", "bathrooms", "squareFeet"].map((field) => (
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
              onChange={(e) => handleArrayChange(field as any, index, e.target.value)}
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

      {/* Featured Checkbox */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={formData.isFeatured}
          onChange={(e) =>
            setFormData({ ...formData, isFeatured: e.target.checked })
          }
          id="isFeatured"
          className="h-4 w-4"
        />
        <label htmlFor="isFeatured" className="font-medium">
          Feature this property
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className={buttonClass}>
        {loading ? "Updating..." : "Update"}
      </button>
    </form>
  );
};

export default UpdateBuyPropertyForm;
