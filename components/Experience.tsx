'use client';

import { useEffect, useState } from 'react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      date: 'Apr 2025 - Aug 2025',
      title: 'Koordinator Unit KKN',
      company: 'Universitas Atma Jaya Yogyakarta',
      description: 'Memimpin dan mengorganisir kegiatan Kuliah Kerja Nyata (KKN) di desa mitra, termasuk pengelolaan tim dan pelaksanaan program pengabdian masyarakat. Mengembangkan kemampuan leadership dan project management.',
    },
    {
      date: 'Jan 2025 - Present',
      title: 'Studi Independent Dicoding by Bank DBS',
      company: 'Program Bangkit 2025',
      description: 'Mengikuti program intensif pembelajaran programming dan web development dengan fokus pada JavaScript, Git, dan fundamental web development. Menyelesaikan berbagai project dan memperoleh 7 sertifikasi profesional.',
    },
    {
      date: 'Jun 2023 - Present',
      title: 'Freelance Web Developer',
      company: 'Freelance - Yogyakarta, Indonesia',
      description: 'Freelancer di bidang pengembangan web dan desain grafis, menyediakan solusi aplikasi berbasis web untuk berbagai klien. Mengerjakan pembuatan sistem pencatatan gudang, sistem keuangan toko, website profil perusahaan, editing video, dan fotografi produk.',
    },
    {
      date: 'Aug 2022 - Aug 2026 (Expected)',
      title: 'Sarjana Sistem Informasi',
      company: 'Universitas Atma Jaya Yogyakarta',
      description: 'Fokus pada pengembangan web, analisis data, bisnis digital, dan sistem informasi. Semester 6 dengan IPK yang memuaskan. Aktif dalam Himpunan Sistem Informasi dan berbagai kegiatan kampus.',
    },
    {
      date: 'May 2024',
      title: 'Pengajar Workshop AI',
      company: 'SMK Sanjaya - Yogyakarta',
      description: 'Bersama Dosen mengajarkan guru SMK Sanjaya mengenai dampak positif dan negatif dari perkembangan teknologi kecerdasan buatan (AI), serta aplikasinya dalam pendidikan dan kehidupan sehari-hari.',
    },
    {
      date: 'Jun 2024 - Feb 2024',
      title: 'Relawan AAT Indonesia',
      company: 'Anak-anak Terang Indonesia',
      description: 'Menjadi relawan dalam program pengembangan dan pendidikan untuk anak-anak di daerah kurang mampu, memberikan pelajaran dan kegiatan pembinaan. Mengembangkan soft skills dan kepedulian sosial.',
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          Experience & Education
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${isVisible ? 'fade-in visible' : 'fade-in'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-date">{exp.date}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-description">{exp.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 3px;
          background: var(--gradient-primary);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1.5px;
          border-radius: 3px;
        }

        .timeline-item {
          padding: 2.5rem 0;
          position: relative;
          width: 50%;
          clear: both;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--gradient-primary);
          border: 3px solid var(--bg-dark);
          top: 50%;
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-item:nth-child(odd) {
          left: 0;
          padding-right: 3.5rem;
        }

        .timeline-item:nth-child(odd)::after {
          right: -11px;
        }

        .timeline-item:nth-child(even) {
          left: 50%;
          padding-left: 3.5rem;
        }

        .timeline-item:nth-child(even)::after {
          left: -11px;
        }

        .timeline-content {
          background: var(--bg-card);
          backdrop-filter: blur(25px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          transition: all 0.3s ease;
          cursor: none;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-glow);
        }

        .timeline-date {
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.8rem;
          font-size: 1rem;
        }

        .timeline-title {
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .timeline-company {
          color: var(--text-muted);
          margin-bottom: 1.2rem;
          font-style: italic;
        }

        .timeline-description {
          color: var(--text-muted);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .timeline::after {
            left: 30px;
          }

          .timeline-item {
            width: 100%;
            left: 0;
            padding-left: 5rem;
            padding-right: 1rem;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }

          .timeline-item:nth-child(even) {
            left: 0;
            padding-left: 5rem;
          }

          .timeline-item::after {
            left: 20px;
          }
        }

        @media (max-width: 480px) {
          .timeline-item {
            padding-left: 3.5rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}