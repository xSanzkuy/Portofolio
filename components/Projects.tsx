'use client';

import { useEffect, useState } from 'react';

export default function Projects() {
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

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Sistem Pencatatan Gudang Berbasis Web',
      description: 'Aplikasi web untuk mengelola inventori gudang dengan fitur pencatatan barang masuk dan keluar, laporan stok real-time, manajemen supplier, dan dashboard analytics untuk monitoring stok secara efisien.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      icon: 'fas fa-warehouse',
    },
    {
      title: 'Sistem Pencatatan Keuangan Toko',
      description: 'Sistem Point of Sale lengkap dengan manajemen produk, transaksi penjualan real-time, laporan keuangan otomatis, analisis penjualan, dan sistem kasir yang user-friendly untuk toko retail.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      icon: 'fas fa-cash-register',
    },
    {
      title: 'Website Profil Perusahaan',
      description: 'Website company profile yang responsif dan modern dengan fitur galeri interaktif, informasi layanan detail, testimonial pelanggan, form kontak terintegrasi, dan SEO optimized untuk meningkatkan online presence.',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'CMS'],
      icon: 'fas fa-building',
    },
    {
      title: 'Content Creator & Video Editing',
      description: 'Portfolio editing video profesional untuk berbagai proyek termasuk video promosi, tutorial, konten media sosial, corporate video, dan motion graphics dengan kualitas broadcast menggunakan Adobe Premiere Pro dan CapCut.',
      tech: ['Adobe Premiere Pro', 'Capcut', 'After Effects', 'Motion Graphics', 'Color Grading'],
      icon: 'fas fa-video',
    },
    {
      title: 'Fotografi Produk',
      description: 'Layanan fotografi produk komersial dengan fokus pada pencahayaan profesional, komposisi yang menarik, product photography untuk e-commerce, katalog produk, dan keperluan marketing dengan hasil berkualitas tinggi.',
      tech: ['Product Photography', 'Lightroom', 'Photoshop', 'Studio Lighting', 'E-commerce'],
      icon: 'fas fa-camera',
    },
    {
      title: 'Materi Edukasi AI untuk Pendidik',
      description: 'Materi edukasi komprehensif tentang dampak positif dan negatif AI yang dibuat untuk workshop guru SMK Sanjaya, mencakup presentasi interaktif, hands-on demonstration, dan panduan implementasi AI dalam dunia pendidikan modern.',
      tech: ['Educational Design', 'AI Ethics', 'Workshop Development', 'Teaching Materials', 'Presentation'],
      icon: 'fas fa-brain',
    },
  ];

  const handleProjectClick = (projectTitle: string, linkType: string) => {
    // Show notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #007bff;
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 10000;
      animation: slideInRight 0.3s ease;
      font-weight: 600;
      max-width: 300px;
    `;
    notification.textContent = `Untuk melihat ${linkType} dari "${projectTitle}", silakan hubungi saya melalui kontak.`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 4000);

    // Scroll to contact section
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 1000);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card ${isVisible ? 'fade-in visible' : 'fade-in'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <button
                  className="project-link github-link"
                  onClick={() => handleProjectClick(project.title, project.icon.includes('video') || project.icon.includes('camera') ? 'portfolio' : 'source code')}
                >
                  <i className={project.icon.includes('video') ? 'fas fa-play-circle' : project.icon.includes('camera') ? 'fas fa-images' : 'fab fa-github'}></i>
                  {project.icon.includes('video') ? 'Portfolio' : project.icon.includes('camera') ? 'Gallery' : 'GitHub'}
                </button>
                <button
                  className="project-link demo-link"
                  onClick={() => handleProjectClick(project.title, project.icon.includes('video') ? 'YouTube' : project.icon.includes('camera') ? 'Instagram' : 'demo')}
                >
                  <i className={project.icon.includes('video') ? 'fab fa-youtube' : project.icon.includes('camera') ? 'fab fa-instagram' : 'fas fa-external-link-alt'}></i>
                  {project.icon.includes('video') ? 'YouTube' : project.icon.includes('camera') ? 'Instagram' : 'Live Demo'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .project-card {
          background: var(--bg-card);
          backdrop-filter: blur(25px);
          border-radius: 25px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: none;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient-primary);
        }

        .project-card:hover {
          transform: translateY(-15px);
          box-shadow: var(--shadow-glow);
        }

        .project-icon {
          width: 70px;
          height: 70px;
          background: var(--gradient-primary);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          margin-bottom: 2rem;
        }

        .project-title {
          font-size: 1.4rem;
          margin-bottom: 1.2rem;
          color: var(--text-light);
          font-weight: 600;
        }

        .project-description {
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          background: rgba(255, 107, 107, 0.1);
          color: var(--secondary-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          border: 1px solid rgba(255, 107, 107, 0.3);
          font-weight: 500;
          cursor: none;
        }

        .project-links {
          display: flex;
          gap: 1.2rem;
        }

        .project-link {
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          cursor: none;
          border: none;
        }

        .github-link {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-light);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .github-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .demo-link {
          background: rgba(76, 205, 196, 0.1);
          color: var(--accent-color);
          border: 1px solid rgba(76, 205, 196, 0.3);
        }

        .demo-link:hover {
          background: rgba(76, 205, 196, 0.2);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}