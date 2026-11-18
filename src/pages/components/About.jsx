import "../../style/About.css";

import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiNestjs,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel, FaReact, FaPhp, FaJava } from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";

export default function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Saya Moch Falih Fauzan, seorang web developer dengan pengalaman
          sekitar 1 tahun dalam membangun aplikasi web yang fungsional dan
          user-friendly. Saya senang memecahkan masalah melalui kode dan terus
          belajar untuk mengembangkan kemampuan. Terbiasa bekerja secara
          individu maupun tim, saya selalu berusaha memberikan hasil terbaik di
          setiap proyek yang saya kerjakan.
        </p>
        <h4>Technology & Tools</h4>
        <div className="skills">
          <div className="skill">
            <SiHtml5 />
            <small>HTML</small>
          </div>
          <div className="skill">
            <SiCss3 />
            <small>CSS</small>
          </div>
          <div className="skill">
            <RiJavascriptFill />
            <small>Javascript</small>
          </div>
          <div className="skill">
            <FaPhp />
            <small>PHP</small>
          </div>
          <div className="skill">
            <FaLaravel />
            <small>Laravel</small>
          </div>
          <div className="skill">
            <FaReact />
            <small>React JS</small>
          </div>
          <div className="skill">
            <SiNextdotjs />
            <small>Next JS</small>
          </div>
          <div className="skill">
            <SiNestjs />
            <small>Nest JS</small>
          </div>
          <div className="skill">
            <BiLogoGoLang />
            <small>Golang</small>
          </div>
          <div className="skill">
            <FaJava />
            <small>Java</small>
          </div>
          <div className="skill">
            <SiSpringboot />
            <small>Spring Boot</small>
          </div>
          <div className="skill">
            <RiTailwindCssFill />
            <small>Tailwind CSS</small>
          </div>
          <div className="skill">
            <SiMysql />
            <small>MySQL</small>
          </div>
          <div className="skill">
            <SiPostgresql />
            <small>PostgreSQL</small>
          </div>
          <div className="skill">
            <SiPostman />
            <small>Postman</small>
          </div>
        </div>
      </div>
    </section>
  );
}
