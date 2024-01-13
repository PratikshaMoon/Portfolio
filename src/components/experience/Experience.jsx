import React from "react";
import "./Experience.css";
import {
  FaReact,
  FaHtml5,
  FaGitAlt,
  FaNode,
  FaJenkins,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCss3,
  SiMongodb,
  SiAnsible,
  SiKubernetes,
  SiExpress,
  SiTerraform,
  SiGrafana,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import {MdHttp} from "react-icons/md";
import {TbBrandNextjs} from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>
        Technology Stack
      </h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  JavaScript
                </h4>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  React.js
                </h4>
              </div>
            </article>

            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>Git</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Tailwind CSS
                </h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Back End</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNode className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Node.JS
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  MongoDB
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Next.js
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <MdHttp className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  REST API
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Express JS
                </h4>
              </div>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>MySql</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>DevOps</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaDocker className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Docker
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <SiKubernetes className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Kubernetes
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <FaJenkins className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Jenkins
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <SiAnsible className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Ansible
                </h4>
              </div>
            </article>
            <article className="experience__details">
              <SiTerraform className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Terraform
                </h4>
              </div>
            </article>

            <article className="experience__details">
              <SiGrafana className="experience__details-icon" />
              <div className="experience__details-name">
                <h4>
                  Grafana
                </h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
