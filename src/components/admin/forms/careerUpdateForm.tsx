"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { UpdateCareer, GetCareer} from "@/api"; // assume you have this
import { useEffect } from "react";

type CareerFormData = {
  position: string;
  location: string;
  jobType: string;
  requirements: { value: string }[];
  responsibilities: { value: string }[];
  benefits: { value: string }[];
};

export default function UpdateCareerForm({ careerId }: { careerId: string }) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerFormData>();

  const reqArray = useFieldArray({ control, name: "requirements" });
  const resArray = useFieldArray({ control, name: "responsibilities" });
  const benArray = useFieldArray({ control, name: "benefits" });

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const {data} = await GetCareer(careerId);
        reset({
          position: data.position,
          location: data.location,
          jobType: data.jobType,
          requirements: data.requirements.map((r: string) => ({ value: r })),
          responsibilities: data.responsibilities.map((r: string) => ({ value: r })),
          benefits: data.benefits.map((b: string) => ({ value: b })),
        });
      } catch (error) {
        console.error("Failed to fetch career:", error);
      }
    };
    fetchCareer();
  }, [careerId, reset]);

  const onSubmit = async (data: CareerFormData) => {
    try {
      const transformed = {
        ...data,
        requirements: data.requirements.map((r) => r.value),
        responsibilities: data.responsibilities.map((r) => r.value),
        benefits: data.benefits.map((b) => b.value),
      };
      const res = await UpdateCareer(careerId, transformed);
      console.log("Updated:", res);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const renderDynamicArray = (
    label: string,
    fieldName: "requirements" | "responsibilities" | "benefits",
    fields: { id: string; value?: string }[],
    append: (value: { value: string }) => void,
    remove: (index: number) => void
  ) => (
    <div>
      <label className="font-semibold block mb-2">{label}</label>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2 mb-2">
          <input
            {...register(`${fieldName}.${index}.value`, { required: "Required" })}
            defaultValue={field.value}
            placeholder={`${label} ${index + 1}`}
            className="border p-2 w-full"
          />
          <button type="button" onClick={() => remove(index)} className="text-red-600">
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ value: "" })}
        className="bg-green-600 text-white px-3 py-1 mt-2 rounded"
      >
        Add {label}
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 max-w-xl mx-auto">
      <input {...register("position", { required: "Position is required" })} placeholder="Position" className="border p-2 w-full" />
      {errors.position && <p className="text-red-500">{errors.position.message}</p>}

      <input {...register("location", { required: "Location is required" })} placeholder="Location" className="border p-2 w-full" />
      {errors.location && <p className="text-red-500">{errors.location.message}</p>}

      <input {...register("jobType", { required: "Job type is required" })} placeholder="Job Type" className="border p-2 w-full" />
      {errors.jobType && <p className="text-red-500">{errors.jobType.message}</p>}

      {renderDynamicArray("Requirements", "requirements", reqArray.fields, reqArray.append, reqArray.remove)}
      {renderDynamicArray("Responsibilities", "responsibilities", resArray.fields, resArray.append, resArray.remove)}
      {renderDynamicArray("Benefits", "benefits", benArray.fields, benArray.append, benArray.remove)}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Update
      </button>
    </form>
  );
}