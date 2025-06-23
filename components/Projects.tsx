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
      title: 'Dicoding Story',
      description: 'Sistem berbasis web yang memungkinkan pengguna menampilkan proyek dan pembaruan dalam format cerita seperti Instagram story.',
      tech: ['React.js', 'Firebase', 'CSS', 'JavaScript'],
      icon: 'fas fa-play-circle',
      liveDemoLink: 'https://dicodingggg.netlify.app',
      githubLink: 'https://github.com/your-repository/dicoding-story',
    },
    {
      title: 'Booklist Library',
      description: 'Sistem pencarian dan manajemen buku untuk perpustakaan, memungkinkan pengguna mencari dan mengelola buku.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      icon: 'fas fa-book',
      liveDemoLink: 'https://booklist-library.netlify.app',
      githubLink: 'https://github.com/your-repository/booklist-library',
    },
    {
      title: 'Notes App',
      description: 'Aplikasi pencatatan yang menggunakan API Dicoding untuk mengambil dan menyimpan catatan.',
      tech: ['React.js', 'API Integration', 'CSS'],
      icon: 'fas fa-sticky-note',
      liveDemoLink: 'https://notes-app-pal.netlify.app',
      githubLink: 'https://github.com/your-repository/notes-app',
    },
    {
      title: 'Sistem Pencatatan Gudang Berbasis Web',
      description: 'Aplikasi berbasis web untuk mengelola inventori gudang dengan fitur pencatatan barang masuk dan keluar serta laporan stok real-time.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
      icon: 'fas fa-warehouse',
      liveDemoLink: '#', // Update this link when available
      githubLink: '#', // Update this link when available
    },
    {
      title: 'Sistem Pencatatan Bank Sampah Digital',
      description: 'Aplikasi pencatatan transaksi sampah di bank sampah, memungkinkan pengguna menabung dan menarik sampah, serta melihat laporan transaksi.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'JavaScript'],
      icon: 'fas fa-recycle',
      liveDemoLink: 'https://pencatatan-bank-sampah.netlify.app', // Live Demo Link
      githubLink: 'https://github.com/your-repository/pencatatan-bank-sampah', // GitHub Link
    },
    {
      title: 'FoodLook - Catering Makanan Lezat',
      description: 'FoodLook adalah platform catering online yang menyediakan berbagai menu makanan lezat untuk acara Anda. Dengan pilihan yang beragam, Anda dapat memilih menu yang sesuai dengan kebutuhan acara dan menjadikannya lebih spesial.',
      tech: ['React.js', 'CSS', 'JavaScript'],
      icon: 'fas fa-utensils',
      liveDemoLink: 'https://foodlook-a0xj3okbz6twzxz7.builder-preview.com/',
      githubLink: '#', // If you have a GitHub repo for this project
    },
    {
      title: 'NutriScore - Mendeteksi Gizi Makanan',
      description: 'NutriScore adalah aplikasi berbasis AI yang memungkinkan pengguna untuk menganalisis nilai gizi makanan secara cepat dengan cara mengunggah foto makanan. Aplikasi ini memberikan informasi lengkap mengenai kalori, protein, karbohidrat, lemak, dan vitamin dalam makanan Anda.',
      tech: ['React.js', 'AI Integration', 'CSS', 'JavaScript'],
      icon: 'fas fa-apple-alt',
      liveDemoLink: 'http://nutriscoree.netlify.app',
      githubLink: '#', // If you have a GitHub repo for this project
    },
  ];

  const handleProjectClick = (projectTitle: string, linkType: string, liveDemoLink: string) => {
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
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  <i className="fab fa-github"></i>
                  GitHub
                </button>
                <button
                  className="project-link demo-link"
                  onClick={() => window.open(project.liveDemoLink, '_blank')}
                >
                  <i className="fas fa-external-link-alt"></i>
                  View Live Demo
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
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
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
        }

        .github-link {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-light);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .github-link:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .demo-link {
          background: rgba(76, 205, 196, 0.1);
          color: var(--accent-color);
          border: 1px solid rgba(76, 205, 196, 0.3);
        }

        .demo-link:hover {
          background: rgba(76, 205, 196, 0.2);
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
