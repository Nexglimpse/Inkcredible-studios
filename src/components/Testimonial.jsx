const testimonials = [
  {
    id: 1,
    name: "markswaveyy",
    role: "Client",
    avatar: "M",
    avatarBg: "bg-blue-500",
    rating: 5,
    text: "Great speed and great communication made my idea come to life greatly satisfied",
  },
  {
    id: 2,
    name: "geeem_1145",
    role: "Client",
    avatar: "G",
    avatarBg: "bg-purple-500",
    rating: 5,
    text: "Quick turnaround, great clean and clear work. Turned out exactly as I needed!",
  },
  {
    id: 3,
    name: "lmundekis",
    role: "Client",
    avatar: "L",
    avatarBg: "bg-orange-500",
    rating: 5,
    text: "Sam is very talented and understood what I wanted with very little direction. Top-level seller and quick service!",
  },
  {
    id: 4,
    name: "phil_sp",
    role: "Client",
    avatar: "P",
    avatarBg: "bg-pink-500",
    rating: 5,
    text: "I supplied basic sketches and ideas, and received a great looking design! Thanks!",
  },
  {
    id: 5,
    name: "mpedersen77",
    role: "Client",
    avatar: "M",
    avatarBg: "bg-indigo-500",
    rating: 5,
    text: "Sam Paul did a great job, he really got the understanding of what i wanted and executed it well.",
  },
  {
    id: 6,
    name: "thetortillaboy",
    role: "Client",
    avatar: "T",
    avatarBg: "bg-teal-500",
    rating: 5,
    text: "USE THIS SELLER!!!! 10/10 This designer has always delivered quickly and exactly what I ask for! I will always use this seller for everything I do!!!",
  },
  {
    id: 7,
    name: "brzezniakd1",
    role: "Client",
    avatar: "B",
    avatarBg: "bg-green-500",
    rating: 5,
    text: "Delivered ahead of schedule and was super receptive with revisions and had a great idea of what I was looking for. Will definitely use him again.",
  },
  {
    id: 8,
    name: "catsonmars38",
    role: "Client",
    avatar: "C",
    avatarBg: "bg-cyan-500",
    rating: 5,
    text: "Absolutely awesome to work with and the results are phenominal",
  },
  {
    id: 9,
    name: "iamsamera",
    role: "Client",
    avatar: "I",
    avatarBg: "bg-red-500",
    rating: 5,
    text: "Very responsive and easy to work with. Thank you again",
  },
  {
    id: 10,
    name: "geeem_1145",
    role: "Client",
    avatar: "G",
    avatarBg: "bg-yellow-500",
    rating: 5,
    text: "Quick turnaround and easy communication. Work produced is very clean. I provided a rough sketch and colors and he was able to turn it translate it into an enamel pin mock-up quickly and cleanly. Highly recommend!",
  },
  {
    id: 11,
    name: "ulec04",
    role: "Client",
    avatar: "U",
    avatarBg: "bg-violet-500",
    rating: 5,
    text: "Absolutely knocked it out of the park! Was very pleasant to work with and exceeded my expectations! Delivered the art on time as well as went above and beyond to provide 2 versions of what I requested! Definitely will be a returning customer to get other artworks vectored! Thank you for your hard work!",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 min-w-[340px] mx-3">
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-11 h-11 md:w-12 md:h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-semibold text-sm`}
        >
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="gilroy-sb text-[15px] md:text-md text-gray-900">
            {testimonial.name}
          </h4>
          <p className="gilroy-m text-[11px] md:text-[13px] text-gray-600">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="flex gap-0.5 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="gilroy-m text-[13.5px] md:text-[16px] leading-relaxed">
        {testimonial.text}
      </p>
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
    <section className="mt-15 md:mt-20 lg:mt-30 " id="testimonials">
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
            src="https://www.youtube.com/embed/s7DFhyU3U7I?si=g_YuW55ZJskLS-Bb"
            title="YouTube video player"
            frameborder="10"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-xl"
          ></iframe>
        </div>

        <div data-aos="fade-up" data-aos-duration="500" className="mt-15">
          <MarqueeRow testimonials={firstRow} direction="left" />
        </div>
      </div>
    </section>
  );
}
