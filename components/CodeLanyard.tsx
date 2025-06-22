'use client';

import { useEffect, useRef, useState } from 'react';

export default function CodeLanyard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="lanyard-wrapper">
      <div className="code-lanyard">
        <div className="lanyard-strap"></div>
        <div className="code-card">
          <div className="card-header">
            <div className="card-clip"></div>
            <div className="card-title">Developer.js</div>
          </div>
          <div className="card-content">
            <div className="code-line">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">developer</span>{' '}
              <span className="code-operator">=</span>{' '}
              <span className="code-bracket">{'{'}</span>
            </div>
            <div className="code-line code-indent">
              <span className="code-property">name</span>
              <span className="code-operator">:</span>{' '}
              <span className="code-string">"Sandi Kurniawan"</span>
              <span className="code-operator">,</span>
            </div>
            <div className="code-line code-indent">
              <span className="code-property">role</span>
              <span className="code-operator">:</span>{' '}
              <span className="code-string">"Frontend Developer"</span>
              <span className="code-operator">,</span>
            </div>
            <div className="code-line code-indent">
              <span className="code-property">skills</span>
              <span className="code-operator">:</span>{' '}
              <span className="code-bracket">[</span>
              <span className="code-string">"React"</span>
              <span className="code-operator">,</span>{' '}
              <span className="code-string">"Next.js"</span>
              <span className="code-bracket">]</span>
              <span className="code-operator">,</span>
            </div>
            <div className="code-line code-indent">
              <span className="code-property">location</span>
              <span className="code-operator">:</span>{' '}
              <span className="code-string">"Yogyakarta, ID"</span>
            </div>
            <div className="code-line">
              <span className="code-bracket">{'}'}</span>
              <span className="code-operator">;</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lanyard-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 999;
          overflow: hidden;
        }

        .code-lanyard {
          position: absolute;
          top: 20px;
          right: 100px;
          pointer-events: auto;
          animation: float 6s ease-in-out infinite;
        }

        .lanyard-strap {
          width: 4px;
          height: 150px;
          background: linear-gradient(180deg, #6366f1, #8b5cf6, #06b6d4);
          margin: 0 auto 10px;
          border-radius: 2px;
          position: relative;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
        }

        .lanyard-strap::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: #374151;
          border-radius: 50%;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .code-card {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          border-radius: 12px;
          padding: 20px;
          width: 280px;
          border: 1px solid rgba(99, 102, 241, 0.3);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(99, 102, 241, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          cursor: grab;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .code-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4);
        }

        .code-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(99, 102, 241, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .code-card:active {
          cursor: grabbing;
          transform: scale(0.98);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-clip {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #9ca3af, #6b7280);
          border-radius: 3px;
          position: relative;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .card-clip::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 2px;
          background: #374151;
          border-radius: 1px;
        }

        .card-title {
          color: #f8fafc;
          font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
          font-size: 14px;
          font-weight: 600;
          flex: 1;
        }

        .card-content {
          font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
          font-size: 12px;
          line-height: 1.6;
        }

        .code-line {
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2px;
        }

        .code-indent {
          padding-left: 20px;
        }

        .code-keyword {
          color: #c792ea;
          font-weight: 600;
        }

        .code-variable {
          color: #82aaff;
        }

        .code-property {
          color: #ffcb6b;
        }

        .code-string {
          color: #c3e88d;
        }

        .code-operator {
          color: #89ddff;
        }

        .code-bracket {
          color: #f78c6c;
          font-weight: 600;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-15px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @media (max-width: 1024px) {
          .code-lanyard {
            right: 20px;
            top: 80px;
          }

          .code-card {
            width: 240px;
            padding: 15px;
          }

          .card-content {
            font-size: 11px;
          }

          .lanyard-strap {
            height: 100px;
          }
        }

        @media (max-width: 768px) {
          .code-lanyard {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}