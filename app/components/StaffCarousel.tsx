
"use client";
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const staff = [
  {
    name: "Krista Locklear",
    title: "Owner",
    subtitle: "Choreography & Instructor",
    image: "/team/krista-locklear.jpeg",
    description: (
      <>
        <p className="text-slate-225 text-base mt-4">
            A Huntersville native, Krista began dancing at age 3 and competed through high school, earning overall placements, scholarships, and Judges’ Choice awards. She trained with respected industry professionals and performed at venues including Disney World.
        </p>
        <p className="text-slate-225 text-base mt-4">
            Krista began teaching as a student herself, first as an apprentice and assistant. She later earned a B.A. in Sociology with minors in Children’s Literature and Childhood Studies from UNC Charlotte. For over 13 years, she has taught and choreographed competitive and recreational dancers throughout the Charlotte and Lake Norman areas, with students earning regional and national awards, scholarships, and opportunities on college and professional dance teams.
        </p>
        <p className="text-slate-225 text-base mt-4">
            Committed to lifelong learning, Krista regularly attends conventions and continuing education. She has completed Tap Teacher Training with Karida Griffith and is certified in Progressing Ballet Technique, furthering her expertise in technique, muscle engagement, flexibility, and injury prevention.
        </p>
        <p className="text-slate-225 text-base mt-4">
            Krista’s passion is helping students grow both as dancers and as individuals. As she says, “I never want to stop learning and growing.”
        </p>
        <p className="text-slate-225 text-base mt-4">
            Krista lives in Huntersville with her husband, Justin, and their German Shepherd, Dixie.
        </p>
      </>
    )
  },
  {
    name: "Leah Schwandt",
    title: "Instructor",
    subtitle: "Choreographer",
    image: "/team/leah-schwandt.jpeg",
    description: (
        <>
          <p className="text-slate-225 text-base mt-4">
            Leah Schwandt began dancing at age 5 in South Jersey, training extensively in Ballet, Pointe, and various competitive styles. Throughout her career, she earned Regional and National awards and trained with leading industry professionals, including Brian Friedman.
          </p>
          <p className="text-slate-225 text-base mt-4">
            After a brief break from dance following high school, Leah discovered how deeply dance connected to self-expression and emotional well-being. While attending the University of Alabama, she began dancing recreationally and found a passion for creating a safe, empowering space for dancers of all ages.
          </p>
          <p className="text-slate-225 text-base mt-4">
            Since moving to Lake Norman in 2018, Leah has taught preschool, elementary, and adult dance and fitness. Now in her third season with Cultivate, she focuses on the Competitive Program, specializing in Ballet, technique, and choreography. Known for her attention to detail and commitment to strong foundations, Leah challenges her dancers to grow both in and out of the studio.
          </p>
        </>
      )
  },
  {
    name: "Carli Camporeale",
    title: "Instructor",
    subtitle: "Choreographer",
    image: "/team/carli-camporeale.jpeg",
    description: (
        <>
          <p className="text-slate-225 text-base mt-4">
            Carli Camporeale began dancing at a young age, training and competing throughout middle and high school at the Regional and National levels. Under the direction of Krista Locklear, she earned numerous overall placements, Judges’ Awards, and scholarships while training at conventions with top industry professionals including Brian Friedman, Tyce Diorio, Gregg Russell, Kaelyn Gray, and Comfort Fedoke.
          </p>
          <p className="text-slate-225 text-base mt-4">
            A versatile dancer, Carli teaches multiple styles with specialties in Tap and Contemporary. She began teaching as a student assistant under Krista Locklear and has since grown into a talented instructor and choreographer. Her competitive choreography has earned multiple overall placements and Judges’ Awards.
          </p>
          <p className="text-slate-225 text-base mt-4">
            Carli holds a degree in Biology from Pace University and is pursuing her doctorate at UNC Charlotte. She hopes to combine her passion for research with her lifelong love of dance.
          </p>
        </>
      )
  }
];

export default function StaffCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (swiperRef.current && swiperRef.current.autoplay) {
          if (entry.isIntersecting) {
            swiperRef.current.autoplay.start();
          } else {
            swiperRef.current.autoplay.stop();
          }
        }
      },
      { threshold: 0.5 } 
    );

    const currentCarousel = carouselRef.current;
    if (currentCarousel) {
      observer.observe(currentCarousel);
    }

    return () => {
      if (currentCarousel) {
        observer.unobserve(currentCarousel);
      }
    };
  }, []);

  return (
    <div ref={carouselRef}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
        loop={true}
        className="w-full h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {staff.map((member, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center cursor-pointer">
              <div className="group w-full h-full overflow-hidden rounded-xl border border-white/5 bg-[#160e1f] flex">
                <div className="w-1/2 p-8 flex flex-col justify-center items-center text-center">
                  <div className="relative h-36 flex flex-col items-center justify-center">
                      <p className="text-primary font-bold text-xl tracking-widest uppercase mb-2">{member.title}</p>
                      <p className="text-2xl text-slate-300 font-light">{member.subtitle}</p>
                  </div>
                  {member.description}
                </div>
                <div className="w-1/2 h-full flex items-center justify-center">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover"
                    src={member.image}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
