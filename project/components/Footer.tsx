'use client';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Sandi Kurniawan. Made with ❤️ and lots of ☕</p>
        <p>Frontend Developer & Designer from Yogyakarta | Available for freelance projects</p>
      </div>

      <style jsx>{`
        footer {
          background: rgba(0, 0, 0, 0.7);
          text-align: center;
          padding: 3rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content p {
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }

        .footer-content p:last-child {
          margin-bottom: 0;
          font-size: 0.9rem;
          opacity: 0.8;
        }
      `}</style>
    </footer>
  );
}