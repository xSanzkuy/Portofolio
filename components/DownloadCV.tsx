'use client';

export default function DownloadCV() {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    
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
    notification.textContent = 'Untuk mengunduh CV lengkap, silakan hubungi saya melalui email atau WhatsApp.';
    
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
    }, 1500);
  };

  return (
    <a href="#contact" className="download-cv" onClick={handleDownload}>
      <i className="fas fa-download"></i>
      Download CV

      <style jsx>{`
        .download-cv {
          position: fixed;
          bottom: 30px;
          right: 30px;
          padding: 15px 25px;
          background: var(--gradient-secondary);
          color: white;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
          transition: all 0.3s ease;
          z-index: 1001;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: none;
        }

        .download-cv:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(255, 107, 107, 0.6);
        }

        @media (max-width: 768px) {
          .download-cv {
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </a>
  );
}