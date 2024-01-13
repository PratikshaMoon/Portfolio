import React from "react";
import "./About.css";
import ME from "../../assests/me.jpg";
import {
  BiMedal,
  BiUser,
  BiFolder,
} from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              alt="A headshot of Moon"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiMedal className="about__icon" />
              <h5>
                Experience
              </h5>
              <small>
                1-Year React
                JS Developer{" "}
                <br />
                7-Years
                WordPress
                Developer
              </small>
            </article>
            <article className="about__card">
              <BiUser className="about__icon" />
              <h5>
                Education
              </h5>
              <small>
                Engineering
                DropOut <br />{" "}
                Graduate(Art)
                from <br />
                University of
                Mumbai <br />
              </small>
            </article>
            <article className="about__card">
              <BiFolder className="about__icon" />
              <h5>Hobbies</h5>
              <small>
                Coding <br />{" "}
                DevOps <br />{" "}
                AI <br />
                Ethical
                Hacking
              </small>
            </article>
          </div>
          <p>
            🚀 Greetings! I'm
            Pratiksha Moon, an
            experienced coding
            enthusiast. As an
            Engineering
            dropout turned
            graduate and
            postgraduate in
            art, my journey
            has seamlessly
            blended creativity
            and technology.
            Over the past
            year, I've delved
            into React, the
            MERN stack, and
            the latest DevOps
            tech, crafting
            dynamic web
            applications and
            scalable
            solutions. Join me
            at the
            intersection of
            art and code,
            where passion
            meets
            perseverance.
            Let's
            collaboratively
            build
            extraordinary
            digital
            experiences that
            leave a lasting
            impression.
            Welcome to my
            portfolio –
            explore, connect,
            and let's embark
            on this coding
            adventure
            together! 🌐
          </p>

          <a
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
