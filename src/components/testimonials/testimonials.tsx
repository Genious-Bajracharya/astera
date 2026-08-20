import ClientCard from "../common/cards/clientCard"

const testimonials = [
  {
    name: "Kevin MJ",
    time: "4 months ago",
    title: "A Perfect Rental",
    desc: `Even though I'm an experienced investor, trying to invest in Dubai property for the first time was overwhelming. I was lost in a sea of... more`,
    image: "/images/landing/client/client1.jpg",
    alt: "Kevin MJ",
  },
  {
    name: "Sophia L",
    time: "2 months ago",
    title: "Great Experience with Astera",
    desc: `Astera made the whole process smooth and transparent. I felt confident investing in my first property thanks to their guidance.`,
    image: "/images/landing/client/client3.jpg",
    alt: "Sophia L",
  },
  {
    name: "James R",
    time: "1 month ago",
    title: "Highly Recommended!",
    desc: `Professional, friendly, and efficient. They answered all my questions and made my property purchase stress-free.`,
    image: "/images/landing/client/client2.jpeg",
    alt: "James R",
  },
]

const Testimonial = () => {
  return (
    <div className="plr grid grid-cols-1 lg:grid-cols-3 gap-3 bg-[#F7F7F7]">
      {testimonials.map((testimonial, index) => (
        <ClientCard key={index} {...testimonial} />
      ))}
    </div>
  )
}

export default Testimonial
