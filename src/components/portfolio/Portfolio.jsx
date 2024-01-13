import React from "react";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title:
      "Digital Marketing Agency",
    description:
      "Created with ReactJS & Tailwind CSS",
    link: "https://kreativevillagers.netlify.app/",
  },
  {
    id: 2,
    title:
      "Food Ordering Application",
    description:
      "Created with ReactJS & Tailwind CSS",
    link: "https://foodbymoon.netlify.app/ ",
  },
  {
    id: 3,
    title: "MERN Application",
    description:
      "CRUD operation with mern stack with API",
    link: "https://moonmern.onrender.com/ ",
  },
  {
    id: 4,
    title: "MERN Application",
    description:
      "This is an API for CRUD operation project",
    link: "https://mernbymoon.onrender.com/",
  },
  {
    id: 5,
    title: "MERN Application",
    description:
      "Social Media Application with mern stack where you can upload your images, create your profile and you can see posts of other people",
    link: "https://moonrest.onrender.com  ",
  },

  {
    id: 6,
    title:
      "Next.JS Application",
    description:
      "To-Do list with CRUD operation",
    link: "https://to-do-list-psi-peach.vercel.app",
  },
  {
    id: 7,
    title:
      "MySql Application",
    description:
      "This is a fullstack project with MySql Database",
    link: "hhttps://github.com/PratikshaMoon/mysql-fullstact",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(
          (project) => (
            <article
              key={project.id}
              className="portfolio__item"
            >
              <div className="portfolio__item-icon">
                {project.icon}
              </div>
              <h3>
                {
                  project.title
                }
              </h3>
              <h5>
                {
                  project.position
                }
              </h5>
              <h6>
                {project.date}
              </h6>
              <small className="portfolio__desc">
                {
                  project.description
                }
              </small>
              {project.link && (
                <a
                  href={
                    project.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <br />
                  Visit
                  Project
                </a>
              )}
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
