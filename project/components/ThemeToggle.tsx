'use client';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <div className="theme-toggle" onClick={onToggle}>
      <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>

      <style jsx>{`
        .theme-toggle {
          position: fixed;
          top: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: var(--bg-card);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: none;
          transition: all 0.3s ease;
          z-index: 1001;
          font-size: 1.4rem;
          color: var(--primary-color);
        }

        .theme-toggle:hover {
          transform: scale(1.1);
          box-shadow: var(--shadow-glow);
        }

        @media (max-width: 768px) {
          .theme-toggle {
            right: 20px;
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}