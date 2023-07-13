import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.jpg";
import project7 from "../assets/images/project-7.png";
import project8 from "../assets/images/project-8.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Cars E-commerce",
      github_link: "https://github.com/AhmedKhalafallah1999/carsProjectTask",
      live_link: "https://cars-ecommerce-3dc95.web.app/",
    },
    {
      img: project2,
      name: "University Website",
      github_link:
        "https://github.com/AhmedKhalafallah1999/University-Website-Design",
      live_link:
        "https://ahmedkhalafallah1999.github.io/University-Website-Design/",
    },
    {
      img: project3,
      name: "To Do List | Mern Project",
      github_link: "https://github.com/AhmedKhalafallah1999/MernStackToDoTask",
      live_link: "https://kalbonyan-final.onrender.com/",
    },
    {
      img: project4,
      name: "To Do List",
      github_link: "https://github.com/AhmedKhalafallah1999/To-Do-List",
      live_link: "https://ahmedkhalafallah1999.github.io/To-Do-List/",
    },
    {
      img: project5,
      name: "Appie Project",
      github_link: "https://github.com/AhmedKhalafallah1999/Appie-Website-1st",
      live_link: "https://ahmedkhalafallah1999.github.io/Appie-Website-1st/",
    },
    {
      img: project6,
      name: "Kasber Project",
      github_link: "https://github.com/AhmedKhalafallah1999/Kasber-Website",
      live_link: "https://ahmedkhalafallah1999.github.io/Kasber-Website/",
    },
    {
      img: project7,
      name: "Leon Project",
      github_link:
        "https://github.com/AhmedKhalafallah1999/Leon-_Design_-HTML-_CSS",
      live_link:
        "https://ahmedkhalafallah1999.github.io/Leon-_Design_-HTML-_CSS/",
    },
    {
      img: project8,
      name: "Omni Food",
      github_link: "https://omnifood.dev/",
      live_link:
        "https://github.com/AhmedKhalafallah1999/Kalbonyan--Elmarsos/tree/main/02-Udemy/-01-HTML-CSS-Jonas/Code",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
