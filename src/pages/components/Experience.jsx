import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import "../../style/Experience.css";
// import videoEditorSertificate from "../../assets/video-editor-certif.jpg";
// import bootcampKelasCertificate1 from "../../assets/kelas-bootcamp-1.jpg";
// import bootcampKelasCertificate2 from "../../assets/kelas-bootcamp-2.jpg";

function Experience() {
  return (
    <section id="experience">
      <div className="wrapper">
        <h1>Experience</h1>
        <div className="timeline-experience">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Januari 2026 - Saat ini"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<FaLaravel />}
            >
              <h3 className="vertical-timeline-element-title">
                Backend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                PT. Teknologi Strategis Nusantara - Tangerang, Indonesia{" "}
                <HiMiniBuildingOffice />
              </h4>
              <p className="timeline-placement">
                (Penempatan : PT Garuda Maintenance Facility Aero Asia Tbk)
              </p>
              <ul>
                <li>
                  Mengembangkan aplikasi web IT Inventory Pusat Logistik Berikat
                  di area bandara
                </li>
                <li>
                  Mengembangkan backend untuk aplikasi mobile Material Movement
                  untuk memonitor pergerakan material di setiap hanggar bandara
                </li>
                <li>
                  Menangani Manage Service dari seluruh aplikasi sistem
                  perusahaan
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Juni 2025 - Desember 2025"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<FaLaravel />}
            >
              <h3 className="vertical-timeline-element-title">
                Backend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                PT. Jaya Teknologi International - Tangerang, Indonesia{" "}
                <HiMiniBuildingOffice />
              </h4>
              <p className="timeline-placement">
                (Penempatan : PT Garuda Maintenance Facility Aero Asia Tbk)
              </p>
              <ul>
                <li>
                  Mengembangkan dan mengintegrasikan backend adapter untuk
                  proses pelaporan Bea Cukai menggunakan CEISA API
                </li>
                <li>
                  Mengembangkan backend untuk aplikasi mobile Material Movement
                  untuk memonitor pergerakan material di setiap hanggar bandara
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Oktober 2024 - Mei 2025"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<FaLaravel />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                FYP Media & Agency <HiMiniBuildingOffice />
              </h4>
              <ul>
                <li> Mengelola dan memelihara situs web perusahaan Agency</li>
                <li>Mengembangkan web aplikasi E-Learning / kursus online</li>
                <li>
                  Mengembangkan website blog artikel dan website forum diskusi
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Juli 2024 - Oktober 2024"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<FaLaravel />}
            >
              <h3 className="vertical-timeline-element-title">
                IT Full Stack Developer Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Soko Financial <HiMiniBuildingOffice />
              </h4>
              <ul>
                <li>Mengelola dan memelihara situs web perusahaan</li>
                <li>
                  Mengembangkan fitur kalkulator keuangan pada situs web
                  perusahaan
                </li>
                <li>
                  Melakukan integrasi payment gateway untuk transaksi pembelian
                  kelas pada situs web perusahaan menggunakan Midtrans
                </li>
              </ul>
              {/* <div className="certificate">
                <a
                  href="https://drive.google.com/file/d/1gzz1RxRgv9r48YZllm7-eI9aVPifL3Qx/view?usp=sharing"
                  target="_blank"
                >
                  <img src={bootcampKelasCertificate1} alt="" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1d8YeC5S1jMjwXQjqqSKcbrJyMKPDQJu-/view?usp=sharing"
                  target="_blank"
                >
                  <img src={bootcampKelasCertificate2} alt="" />
                </a>
              </div> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Februari 2024 - Agustus 2024"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              // icon={<FaLaravel />}
            >
              <h3 className="vertical-timeline-element-title">
                Studi Independen Kampus Merdeka
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                PT Educa Sisfomedia Indonesia <HiMiniBuildingOffice />
              </h4>
              <ul>
                <li>
                  Proyek: Mengembangkan aplikasi website lowongan pekerjaan
                  menggunakan framework Bootstrap dan Laravel
                </li>
                <li>
                  Mata kuliah terkait: Pengembangan Front-end dan Backend dengan
                  Laravel.
                </li>
              </ul>
              {/* <div className="certificate">
                <a
                  href="https://drive.google.com/file/d/1ttNqHZ6zl_qfhSrlCnwwr4EIdDBEbEUG/view?usp=sharing"
                  target="_blank"
                >
                  <img src={videoEditorSertificate} alt="" />
                </a>
              </div> */}
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      {/* <ScrollToTop /> */}
    </section>
  );
}

export default Experience;
