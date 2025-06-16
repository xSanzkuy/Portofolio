'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
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

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // Create mailto link
    const mailtoLink = `mailto:sanzyt2108@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${subject}`)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}\n\n---\nDikirim dari Portfolio Website Sandi Kurniawan`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 10000;
      animation: slideInRight 0.3s ease;
      font-weight: 600;
      max-width: 300px;
    `;
    notification.textContent = 'Email client dibuka! Silakan kirim email Anda.';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 4000);
    
    // Reset form
    e.currentTarget.reset();
  };

  const socialLinks = [
    { href: 'mailto:sanzyt2108@gmail.com', icon: 'fas fa-envelope', title: 'Email' },
    { href: 'https://linkedin.com/in/sandi-kurniawann', icon: 'fab fa-linkedin', title: 'LinkedIn' },
    { href: 'https://github.com/xSanzkuy', icon: 'fab fa-github', title: 'GitHub' },
    { href: 'https://wa.me/6285921071555', icon: 'fab fa-whatsapp', title: 'WhatsApp' },
    { href: 'https://instagram.com/saandikurniawan', icon: 'fab fa-instagram', title: 'Instagram' },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          Get In Touch
        </h2>
        <div className={`contact-content ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <p className="contact-text">
            Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kerja sama, atau sekadar ngobrol tentang teknologi dan inovasi. 
            Mari berkolaborasi dan ciptakan sesuatu yang luar biasa bersama! Jangan ragu untuk menghubungi saya melalui platform di bawah ini.
          </p>
          
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="social-link"
                title={link.title}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
          
          <a href="mailto:sanzyt2108@gmail.com" className="btn btn-primary email-cta">
            <i className="fas fa-paper-plane"></i>
            Kirim Email
          </a>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Me a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="contoh@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Topik pesan Anda"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tuliskan pesan Anda di sini..."
                required
              />
            </div>
            <button type="submit" className="form-submit">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-text {
          font-size: 1.3rem;
          color: var(--text-muted);
          margin-bottom: 4rem;
          line-height: 1.8;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .social-link {
          width: 70px;
          height: 70px;
          background: var(--bg-card);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
          text-decoration: none;
          font-size: 1.8rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(25px);
          cursor: none;
        }

        .social-link:hover {
          background: var(--primary-color);
          transform: translateY(-8px) scale(1.1);
          box-shadow: var(--shadow-glow);
        }

        .email-cta {
          margin-bottom: 3rem;
        }

        .contact-form {
          max-width: 600px;
          margin: 3rem auto 0;
          background: var(--bg-card);
          backdrop-filter: blur(25px);
          border-radius: 25px;
          padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-form h3 {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--primary-color);
          font-size: 1.5rem;
          font-weight: 600;
        }

        .form-group {
          margin-bottom: 2rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-light);
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          color: var(--text-light);
          font-size: 1rem;
          transition: all 0.3s ease;
          resize: vertical;
          cursor: text;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
        }

        .form-group textarea {
          height: 120px;
        }

        .form-submit {
          width: 100%;
          padding: 15px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 25px;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .form-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 212, 255, 0.4);
        }

        @media (max-width: 768px) {
          .social-links {
            gap: 1.5rem;
          }

          .social-link {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }

          .contact-form {
            padding: 2rem;
          }

          .contact-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}