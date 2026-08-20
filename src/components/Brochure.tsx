import { useState,useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Brochure = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY ?? "");
        
        formData.append("subject", "New Inquiry for Property");

        try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await res.json();
        if (result.success) {
            formRef.current.reset();
            toast.error("Brochure Not Available at the moment");
            handleClose()
        } else {
            toast.error("Submission failed");
        }
        } catch (err) {
        console.log(err)
        toast.error("Something went wrong");
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({ name: "", email: "" });

    const handleOnClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setForm({ name: "", email: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

   


    return (
        <>
        <div
            onClick={handleOnClick}
            title="Download Brochure"
            className="w-12 h-12 p-4 rounded-full shadow-lg cursor-pointer bg-white flex items-center justify-center"
        >
            <FaDownload />
            
        </div>

        {isOpen && (
            <div className="fixed  inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg lg:w-1/2 ">
                <h2 className="text-lg font-semibold mb-4">Download the Brochure</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
                <div className="flex justify-end gap-2">
                    <button
                    type="button"
                    onClick={handleClose}
                    className="text-sm text-gray-500 hover:underline"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="back text-white px-4 py-2 rounded text-sm cursor-pointer"
                    >
                    Download
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}
        </>
    );
    };

export default Brochure;