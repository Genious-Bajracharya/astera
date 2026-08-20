'use client'
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";

type SubmitStatus = "idle" | "success" | "error";

interface Web3FormOptions {
  subject?: string;
  onSuccess?: () => void;
  onError?: () => void;
}

export const useWeb3FormSubmit = (options?: Web3FormOptions) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY ?? "");
    
    formData.append("subject", options?.subject ?? "New form submission");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        formRef.current.reset();
        toast.success("Message Sent Successfully");
        options?.onSuccess?.();
      } else {
        setStatus("error");
        toast.error("Submission failed");
        options?.onError?.();
      }
    } catch (err) {
      setStatus("error");
      console.log(err)
      toast.error("Something went wrong");
      options?.onError?.();
    }
  };

  return { formRef, handleSubmit, status };
};