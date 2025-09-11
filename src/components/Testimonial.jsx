"use client";

const testimonials = [
  {
    id: 1,
    name: "Priya Mehta",
    role: "Startup Founder",
    avatar: "PM",
    rating: 5,
    text: "Their design sense is impeccable! Incredible Studios transformed our website into an engaging, user-friendly platform. Our clients love the new look.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Digital Marketing",
    avatar: "SM",
    rating: 5,
    text: "Incredible Studios truly lives up to its name! Their creativity and attention to detail brought our brand vision to life. The designs were modern, vibrant, and perfectly aligned with our goals.",
  },
  {
    id: 3,
    name: "Daniel Roberts",
    role: "Tech/SaaS Solutions",
    avatar: "DR",
    rating: 5,
    text: "Working with Incredible Studios was a seamless experience. They understood our requirements and delivered stunning visuals that exceeded expectations. Highly recommended!",
  },
  {
    id: 4,
    name: "Daniel Roberts",
    role: "Tech/SaaS Solutions",
    avatar: "DR",
    rating: 5,
    text: "Working with Incredible Studios was a seamless experience. They understood our requirements and delivered stunning visuals that exceeded expectations. Highly recommended!",
  },
  {
    id: 5,
    name: "Sarah Mitchell",
    role: "Digital Marketing",
    avatar: "SM",
    rating: 5,
    text: "Incredible Studios truly lives up to its name! Their creativity and attention to detail brought our brand vision to life. The designs were modern, vibrant, and perfectly aligned with our goals.",
  },
  {
    id: 6,
    name: "Daniel Roberts",
    role: "Tech/SaaS Solutions",
    avatar: "DR",
    rating: 5,
    text: "Working with Incredible Studios was a seamless experience. They understood our requirements and delivered stunning visuals that exceeded expectations. Highly recommended!",
  },
];

const TestimonialCard = ({ testimonial }) => {
  const getAvatarColor = (avatar) => {
    const colors = {
      PM: "bg-orange-500",
      SM: "bg-purple-500",
      DR: "bg-orange-500",
    };
    return colors[avatar] || "bg-gray-500";
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 min-w-[340px] mx-3">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-full ${getAvatarColor(
            testimonial.avatar
          )} flex items-center justify-center text-white font-semibold text-sm`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="gilroy-sb text-md text-gray-900">
            {testimonial.name}
          </h4>
          <p className="gilroy-m text-[13px] text-gray-600">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="flex gap-0.5 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="gilroy-m text-[16px] leading-relaxed">{testimonial.text}</p>
    </div>
  );
};

const MarqueeRow = ({ testimonials, direction = "left" }) => {
  return (
    <div className="flex overflow-hidden">
      <div className={`flex animate-marquee-${direction} gap-0`}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="mt-15 md:mt-20 lg:mt-30 ">
      <div className="mx-auto px-1">
        <div className="px-4.5 md:px-10 xl:px-15">
          <h1 className="text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] gilroy-sb leading-snug text-orange-500">
            TESTIMONIALS
          </h1>
          <h2 className="text-center text-[26px] md:text-[34px] lg:text-[38px] xl:text-[40px] mt-3 gilroy-b leading-snug ">
            What Our Clients Say About Us
          </h2>
          <p className="text-black text-md max-w-3xl mx-auto md:text-[18px] lg:text-lg xl:text-xl gilroy-m mt-2 text-center ">
            Don't just take our word for it. Hear what our clients have to say
            about their incredible experience with us.
          </p>
        </div>

        <div className="flex justify-center items-center mt-10 px-4.5 md:px-10 xl:px-15">
          <iframe
            width="700"
            height="350"
            src="https://www.youtube.com/embed/NtNYwMSpIBg?si=SKdarm6rPgDHmCej"
            title="YouTube video player"
            frameborder="10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-xl"
          ></iframe>
        </div>

        <div className="mt-15">
          <MarqueeRow testimonials={firstRow} direction="left" />
        </div>
      </div>
    </section>
  );
}
