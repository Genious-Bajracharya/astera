// // 'use client'

// // import { IoClose } from 'react-icons/io5'
// // import { FaChevronDown } from 'react-icons/fa6'
// // import { AMENITIES } from '@/data/property'
// // import { useState } from 'react'
// // import { FilterModalProps } from '@/interfaces/interface'

// // // interface FilterModalProps {
// // //   isOpen: boolean
// // //   onClose: () => void
// // // //   amenities: string[]

// // // }

// // const FilterModal: React.FC<FilterModalProps> = ({
// //   isOpen,
// //   onClose,
// //   amenities,
// //   setamenities,
// //   selectedFurnishing,
// //   setSelectedFurnishing,
// //   minSize,
// //   setMinSize,
// //   maxSize,
// //   setMaxSize,
// //   onReset,
// //   onApply,
// // }) => {
    
// //     // const [amenities, setamenities] = useState<string[]>([])
// //     // const [selectedFurnishing, setSelectedFurnishing] = useState<string>('ALL')
// //     // const [minSize, setMinSize] = useState<number>(100);
// //     // const [maxSize, setMaxSize] = useState<number>(3000);

// //     if (!isOpen) return null
// //    const toggleAmenity = (amenity: string) => {
// //     const updated = amenities.includes(amenity)
// //         ? amenities.filter((a) => a !== amenity)
// //         : [...amenities, amenity]

// //     setamenities(updated)
// // }
// //     return (
// //         <div className="fixed inset-0 z-50 h-screen flex items-center justify-center">
// //         {/* Overlay */}
// //         <div
// //             className="absolute inset-0 bg-black/40 backdrop-blur-sm"
// //             onClick={onClose}
// //         />

// //         {/* Modal */}
// //         <div className="relative space-y-8 p-8 z-10 w-full max-w-[60%] bg-white rounded-xl shadow-lg flex flex-col">
// //             {/* Header */}
// //             <button onClick={onClose} className='ml-auto'>
// //                 <IoClose className="w-6 h-6" />
// //             </button>
// //             <div className="">
// //             <p className="heading2">Filters</p>
// //             </div>

// //             {/* Line  */}
// //             <div className='border-b border-[1px] border-[#C9C9C9CC] '></div>

// //             {/* Size */}
// //             <div className="sapce-y-3">
// //                 <p className='grey font-bold'>Size</p>
// //                 <div className='flex gap-4'>
// //                     <div className="relative w-1/2">
// //                         <select
// //                             value={minSize}
// //                             onChange={(e) => setMinSize(parseInt(e.target.value))}
// //                             className="appearance-none rounded-full w-full  hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
// //                             >
// //                             <option className="text-black" value={0}>Min Size</option>
// //                             <option className="text-black" value={300}>300</option>
// //                             <option className="text-black" value={400}>400</option>
// //                             <option className="text-black" value={1000}>1000</option>
// //                             <option className="text-black" value={2000}>2000</option>
// //                         </select>
// //                         <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
// //                     </div>
// //                     <div className="relative w-1/2">
// //                         <select
// //                             value={maxSize}
// //                             onChange={(e) => setMaxSize(parseInt(e.target.value))}
// //                             className="appearance-none rounded-full w-full  hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
// //                             >
// //                             <option className="text-black" value={2000}>Max Size</option>
// //                             <option className="text-black" value={300}>300</option>
// //                             <option className="text-black" value={400}>400</option>
// //                             <option className="text-black" value={1000}>1000</option>
// //                             <option className="text-black" value={2000}>2000</option>
// //                         </select>
// //                         <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Amenities  */}
// //             <div>
// //                 <p className='grey font-bold'>Amenities</p>
// //                 <div className='flex flex-wrap gap-3'>
// //                     {AMENITIES.map((amenity) => (
// //                         <div
// //                         key={amenity}
// //                         onClick={() => toggleAmenity(amenity.toLowerCase())}
// //                         className={`cursor-pointer rounded-full px-6 py-2.5 text-sm border transition-all duration-200
// //                             ${
// //                             amenities.includes(amenity.toLowerCase())
// //                                 ? 'border-blue-500 bg-blue-50 text-blue-600 backdrop-blur-sm'
// //                                 : 'border-[#C9C9C9] text-gray-700'
// //                             }`}
// //                         >
// //                         {amenity}
// //                         </div>
// //                     ))}

// //                 </div>
// //             </div>
// //             {/* Furnishing */}
// //             <div>
// //                 <p className='grey font-bold'>Furnishing</p>
// //                 <div className="flex gap-3 flex-wrap">
// //                     {['ALL', 'Furnished', 'Semi-Furnished', 'Unfurnished'].map((option) => (
// //                         <div
// //                         key={option}
// //                         onClick={() => setSelectedFurnishing(option.toLowerCase())}
// //                         className={`cursor-pointer rounded-full px-6 py-2.5 border text-sm transition-all duration-200
// //                             ${
// //                             selectedFurnishing === option.toLowerCase()
// //                                 ? 'border-blue-500 bg-blue-50 text-blue-600 backdrop-blur-sm'
// //                                 : 'border-[#C9C9C9] text-gray-700'
// //                             }`}
// //                         >
// //                         {option}
// //                         </div>
// //                     ))}
// //                 </div>

// //             </div>

// //             {/* Line  */}
// //             <div className='border-b border-[1px] border-[#C9C9C9CC] '></div>

// //             {/* Footer */}
// //             <div className="flex w-full gap-3  ">
// //             <button onClick={onApply} className="px-6 w-1/2 cursor-pointer py-2 rounded-full back text-white">Apply</button>
// //             <button onClick={onReset} className="px-6 w-1/2 cursor-pointer py-2 rounded-full border">Reset</button>
// //             </div>
// //         </div>
// //         </div>
// //     )
// // }

// // export default FilterModal
// 'use client'

// import { IoClose } from 'react-icons/io5'
// import { FaChevronDown } from 'react-icons/fa6'
// import { AMENITIES } from '@/data/property'
// import { FilterModalProps } from '@/interfaces/interface'

// const FilterModal: React.FC<FilterModalProps> = ({
//   isOpen,
//   onClose,
//   amenities,
//   setamenities,
//   selectedFurnishing,
//   setSelectedFurnishing,
//   minSize,
//   setMinSize,
//   maxSize,
//   setMaxSize,
//   onReset,
//   onApply,
// }) => {
//   if (!isOpen) return null

//   const toggleAmenity = (amenity: string) => {
//     const updated = amenities.includes(amenity)
//       ? amenities.filter((a) => a !== amenity)
//       : [...amenities, amenity]
//     setamenities(updated)
//   }

//   return (
//     <div className="fixed inset-0 z-50 h-screen flex items-center justify-center">
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

//       {/* Modal */}
//       <div className="relative space-y-8 p-8 z-10 w-full max-w-[60%] bg-white rounded-xl shadow-lg flex flex-col">
//         {/* Header */}
//         <button onClick={onClose} className="ml-auto">
//           <IoClose className="w-6 h-6" />
//         </button>

//         <div>
//           <p className="heading2">Filters</p>
//         </div>

//         <div className="border-b border-[1px] border-[#C9C9C9CC]" />

//         {/* Size */}
//         <div className="space-y-3">
//           <p className="grey font-bold">Size</p>
//           <div className="flex gap-4">
//             <div className="relative w-1/2">
//               <select
//                 value={minSize}
//                 onChange={(e) => setMinSize(Number(e.target.value))}
//                 className="appearance-none rounded-full w-full hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
//               >
//                 <option value={0}>Min Size</option>
//                 <option value={300}>300</option>
//                 <option value={400}>400</option>
//                 <option value={1000}>1000</option>
//                 <option value={2000}>2000</option>
//               </select>
//               <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
//             </div>

//             <div className="relative w-1/2">
//               <select
//                 value={maxSize}
//                 onChange={(e) => setMaxSize(Number(e.target.value))}
//                 className="appearance-none rounded-full w-full hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
//               >
//                 <option value={2000}>Max Size</option>
//                 <option value={300}>300</option>
//                 <option value={400}>400</option>
//                 <option value={1000}>1000</option>
//                 <option value={2000}>2000</option>
//               </select>
//               <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
//             </div>
//           </div>
//         </div>

//         {/* Amenities */}
//         <div>
//           <p className="grey font-bold">Amenities</p>
//           <div className="flex flex-wrap gap-3">
//             {AMENITIES.map((amenity) => (
//               <div
//                 key={amenity}
//                 onClick={() => toggleAmenity(amenity.toLowerCase())}
//                 className={`cursor-pointer rounded-full px-6 py-2.5 text-sm border transition-all duration-200 ${
//                   amenities.includes(amenity.toLowerCase())
//                     ? 'border-blue-500 bg-blue-50 text-blue-600 backdrop-blur-sm'
//                     : 'border-[#C9C9C9] text-gray-700'
//                 }`}
//               >
//                 {amenity}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Furnishing */}
//         <div>
//           <p className="grey font-bold">Furnishing</p>
//           <div className="flex gap-3 flex-wrap">
//             {['ALL', 'Furnished', 'Semi-Furnished', 'Unfurnished'].map((option) => (
//               <div
//                 key={option}
//                 onClick={() => setSelectedFurnishing(option.toLowerCase())}
//                 className={`cursor-pointer rounded-full px-6 py-2.5 border text-sm transition-all duration-200 ${
//                   selectedFurnishing === option.toLowerCase()
//                     ? 'border-blue-500 bg-blue-50 text-blue-600 backdrop-blur-sm'
//                     : 'border-[#C9C9C9] text-gray-700'
//                 }`}
//               >
//                 {option}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="border-b border-[1px] border-[#C9C9C9CC]" />

//         {/* Footer Buttons */}
//         <div className="flex w-full gap-3">
//           <button onClick={onApply} className="px-6 w-1/2 cursor-pointer py-2 rounded-full back text-white">
//             Apply
//           </button>
//           <button onClick={onReset} className="px-6 w-1/2 cursor-pointer py-2 rounded-full border">
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FilterModal
'use client'

import { IoClose } from 'react-icons/io5'
import { FaChevronDown } from 'react-icons/fa6'
import { AMENITIES } from '@/data/property'

// interface FilterModalProps {
//   isOpen: boolean
//   onClose: () => void
//   furnishing: string
//   setFurnishing: (value: string) => void
//   minSize: string | '';
//   setMinSize: (value: string | '') => void;
//   maxSize: string | '';
//   setMaxSize: (value: string | '') => void;
//   amenities: string[]
//   setamenities: (value: string[]) => void
//   onApply: () => void
//   onReset: () => void
// }

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  furnishing:  string
  setFurnishing: (value: string) => void
  minSize: string | ''
  setMinSize: (value: string | '') => void
  maxSize: string | ''
  setMaxSize: (value: string | '') => void
  amenities: string[]
  setAmenities: (value: string[]) => void
  onApply: () => void
  onReset: () => void
}

const FilterModal = ({
  isOpen,
  onClose,
  furnishing,
  setFurnishing,
  minSize,
  setMinSize,
  maxSize,
  setMaxSize,
  amenities,
  setAmenities,
  onApply,
  onReset
}: FilterModalProps) => {
  if (!isOpen) return null

  const toggleAmenity = (amenity: string) => {
    const updated = amenities.includes(amenity)
      ? amenities.filter((a) => a !== amenity)
      : [...amenities, amenity]
    setAmenities(updated)
  }

  return (
    <div className="fixed inset-0 z-50 h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative space-y-8 p-8 z-10 w-full lg:max-w-[60%] bg-white rounded-xl shadow-lg flex flex-col">
        <button onClick={onClose} className="ml-auto">
          <IoClose className="w-6 h-6" />
        </button>

        <div>
          <p className="heading2">Filters</p>
        </div>

        <div className="border-b border-[1px] border-[#C9C9C9CC]" />

        {/* Size */}
        <div className="space-y-3">
          <p className="grey font-bold">Size</p>
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <select
                value={minSize}
                onChange={(e) => setMinSize(e.target.value)}
                className="appearance-none rounded-full w-full hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
              >
                <option value={0}>Min Size</option>
                <option value={300}>300</option>
                <option value={400}>400</option>
                <option value={1000}>1000</option>
                <option value={2000}>2000</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative w-1/2">
              <select
                value={maxSize}
                onChange={(e) => setMaxSize(e.target.value)}
                className="appearance-none rounded-full w-full hidden lg:inline-flex justify-between items-center border border-[#C9C9C9] py-2.5 px-4"
              >
                <option value={2000}>Max Size</option>
                <option value={300}>300</option>
                <option value={400}>400</option>
                <option value={1000}>1000</option>
                <option value={2000}>2000</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <p className="grey font-bold">Amenities</p>
          <div className="flex flex-wrap gap-3">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity}
                onClick={() => toggleAmenity(amenity.toLowerCase())}
                className={`cursor-pointer rounded-full px-6 py-2.5 text-sm border transition-all duration-200 ${
                  amenities.includes(amenity.toLowerCase())
                    ? 'border-blue-500 bg-blue-50 text-blue-600 backdrop-blur-sm'
                    : 'border-[#C9C9C9] text-gray-700'
                }`}
              >
                {amenity}
              </div>
            ))}
          </div>
        </div>

        {/* Furnishing */}
        <div>
          <p className="grey font-bold">Furnishing</p>
          <div className="flex gap-3 flex-wrap">
            {['All', 'Furnished', 'semi-furnished', 'unfurnished'].map((option) => (
              <div
                key={option}
                onClick={() => setFurnishing(option)}
                className={`cursor-pointer rounded-full px-6 py-2.5 border text-sm transition-all duration-200 ${
                  furnishing === option
                    ? 'border-blue-500 bg-blue-50 text-blue-600 backdrop-blur-sm'
                    : 'border-[#C9C9C9] text-gray-700'
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-[1px] border-[#C9C9C9CC]" />

        {/* Footer Buttons */}
        <div className="flex w-full gap-3">
          <button
            onClick={onApply}
            className="px-6 w-1/2 cursor-pointer py-2 rounded-full back text-white"
          >
            Apply
          </button>
          <button
            onClick={onReset}
            className="px-6 w-1/2 cursor-pointer py-2 rounded-full border"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
