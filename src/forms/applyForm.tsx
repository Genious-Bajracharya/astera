'use client'

import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { IoClose } from 'react-icons/io5'
// import { useWeb3FormSubmit } from '@/hooks/useWeb3Forms'

type ApplyFormProps = {
  onClose: () => void
  job: string
}

const ApplyForm = ({ onClose,job }: ApplyFormProps) => {
    
    // const { formRef, handleSubmit } = useWeb3FormSubmit({
    //     subject: `New Career form submit for ${job} position from Astera`,
    // });
    const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    const formData = new FormData(formRef.current)

    // Validate file size
    const file = formData.get('attachment') as File
    if (file && file.size > 5 * 1024 * 1024) {
      toast.error('File size must be under 5MB')
      return
    }

    formData.append('access_key', process.env.NEXT_PUBLIC_ACCESS_KEY ?? '')
    formData.append('subject', `New Career Application for ${job} Position`)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await res.json()
      if (result.success) {
        setStatus('success')
        formRef.current.reset()
        toast.success('Application submitted successfully!')
        onClose()
      } else {
        setStatus('error')
        toast.error('Submission failed. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      console.log(err,status)
      toast.error('Something went wrong.')
    }
  }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="bg-white w-full max-w-2xl rounded-3xl p-8 relative shadow-xl">
            {/* Close Button */}
            <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
            >
            <IoClose className=' cursor-pointer' />
            </button>

            {/* Form Content */}
            <div className="space-y-6">
            <h2 className="heading2">Apply now</h2>


            <form key={job} ref={formRef} onSubmit={handleSubmit} method='post' encType="multipart/form-data" className="space-y-4">
                <input type="hidden" name="subject" value={`New Career Application for ${job} Position`} />

                <label className="text-xs ">Your name <span className="primary"> *</span></label>
                <input type="text" name='name' required placeholder="Enter your name" className="w-full p-3 border border-[#C9C9C9] rounded" />
                <div>
                    <label className="text-xs " htmlFor="">Email Id<span className="primary"> *</span></label>   
                    <input type="email" name='email' required placeholder="Enter email " className="w-full p-3 border border-[#C9C9C9] rounded" />
                </div>

                <div>
                    <label className="text-xs " htmlFor="">Phone number<span className="primary"> *</span></label>  
                    <input type="tel" name='PhoneNumber' required placeholder="+971 " className="w-full p-3 border border-[#C9C9C9] rounded" />
                </div>

                <label className="text-xs " htmlFor="">Upload your CV (PDF/doc) *<span className="primary"> *</span></label>   
                <input
                type="file" 
                name='attachment' 
                required
                accept=".pdf,.doc,.docx"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <label className="text-xs " htmlFor="">About Yourself<span className="primary"> *</span></label> 
                    <textarea
                    placeholder="Message" 
                    required 
                    name='message'
                    rows={5}
                    className="w-full p-3 border border-[#C9C9C9] rounded"/>


                {/* Apply Button */}
                <div className="flex ">
                    <button type='submit' className="back text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                    Apply Now!
                    </button>
                </div>
            </form>

            </div>
        </div>
        </div>
    )
    }

export default ApplyForm