"use client";
import { useWeb3FormSubmit } from "@/hooks/useWeb3Forms";

interface ContactProp {
  type: "buy" | "seller";
}
const ContactForm: React.FC<ContactProp> = ({ type }) => {
  const { formRef, handleSubmit } = useWeb3FormSubmit({
    subject: `New ${type} inquiry from Astera`,
  });

  return (
    <div className="space-y-9 py-16 lg:w-[40%]">
      <div className="space-y-2">
        <p className="grey">
          <span className="font-bold">Home / </span>
          ContactUs
        </p>
        <h1 className="text-[32px]">Contact Us</h1>
        <p className="grey">
          Contact us and our team will be in touch as soon as we can.
        </p>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input
          type="hidden"
          name="subject"
          value={`New Form submitted from ${type} Form`}
        />
        <label className="text-xs font-bold">
          Your name <span className="primary"> *</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full p-3 border border-[#C9C9C9] rounded"
        />
        <div>
          <label className="text-xs font-bold" htmlFor="">
            Email Id<span className="primary"> *</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email "
            className="w-full p-3 border border-[#C9C9C9] rounded"
          />
        </div>

        <div>
          <label className="text-xs font-bold" htmlFor="">
            Phone number<span className="primary"> *</span>
          </label>
          <input
            type="tel"
            name="Phone number"
            placeholder="+971 "
            className="w-full p-3 border border-[#C9C9C9] rounded"
          />
        </div>
        {type === "seller" ? (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold" htmlFor="">
                Listing Type<span className="primary"> *</span>
              </label>
              <select
                name="Listing Type"
                className="w-full p-3 border border-[#C9C9C9] rounded"
              >
                <option value="volvo">Rent</option>
                <option value="saab">Sell</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold" htmlFor="">
                Property Address<span className="primary"> *</span>
              </label>
              <input
                name="Property Address"
                type="text"
                placeholder="Enter Address "
                className="w-full p-3 border border-[#C9C9C9] rounded"
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        <label className="text-xs font-bold" htmlFor="">
          Message<span className="primary"> *</span>
        </label>
        <textarea
          name="Message"
          placeholder="Message"
          rows={5}
          className="w-full p-3 border border-[#C9C9C9] rounded"
        />

        <button
          type="submit"
          className="w-fit px-5 mx-auto cursor-pointer   bg-[#D4992D] border hover:bg-transparent hover:text-black  text-white py-3 rounded-full transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
