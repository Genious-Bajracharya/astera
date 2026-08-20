'use client'
import { useWeb3FormSubmit } from "@/hooks/useWeb3Forms"

const ConnectForm =()=>{

    const { formRef, handleSubmit } = useWeb3FormSubmit({
    subject: `New inquiry from Astera`,
    });

    return (
      <div className="space-y-9  ">
        <div className="space-y-2">
          <p className="heading2">{`Let's Connect!`}</p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="hidden"
            name="subject"
            value={`New Form submitted from Connect Form`}
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

          <label className="text-xs font-bold" htmlFor="">
            Message<span className="primary"> *</span>
          </label>
          <textarea
            placeholder="Message"
            name="Message"
            rows={5}
            className="w-full p-3 border border-[#C9C9C9] rounded"
          />

          <button
            type="submit"
            className="w-fit px-5 mx-auto bg-[#D4992D] hover:bg-transparent hover:border-black hover:text-black border cursor-pointer  text-white py-3 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
}

export default ConnectForm