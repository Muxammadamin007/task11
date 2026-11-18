
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#59d3b5");

  const randomColor = () => {
    const colors = [
      "#59d3b5",
      "#8b9cf7",
      "#f0a66b",
      "#e58bbd",
      "#82c9e8",
      "#b39af5",
    ];

    let newColor = color;


    
    while (newColor === color) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    setColor(newColor);
  };

  return (
    <div className="practice-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #0e1320;
          font-family: Arial, Helvetica, sans-serif;
          color: #f5f6fa;
        }

        .practice-page {
          width: 100%;
          min-height: 100vh;
          padding: 32px 30px;
          background: #0e1320;
        }

        .learning-goal {
          width: 100%;
          min-height: 65px;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 16px 20px;
          margin-bottom: 32px;
          background: #13232a;
          border: 1px solid #285447;
          border-radius: 15px;
        }

        .learning-goal strong {
          color: #73e7c0;
          font-size: 14px;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .learning-goal p {
          color: #aabce1;
          font-size: 18px;
          line-height: 1.5;
        }

        .practice-container {
          width: 100%;
          min-height: 365px;
          padding: 28px;
          background: #141925;
          border: 1px solid #374255;
          border-radius: 23px;
        }

        .practice-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 26px;
        }

        .practice-header h1 {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -1.3px;
        }

        .counter-badge {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 15px;
          background: #19352f;
          border: 1px solid #3ba888;
          border-radius: 30px;
          color: #72e6b7;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }

        .counter-dot {
          width: 10px;
          height: 10px;
          background: #72e6b7;
          border-radius: 50%;
        }

        .practice-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          width: 100%;
        }

        .counter-panel,
        .status-panel {
          min-height: 239px;
          background: #0d131b;
          border: 1px solid #354154;
          border-radius: 20px;
        }

        .counter-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 22px;
          gap: 20px;
        }

        .number-box {
          width: 120px;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 23px;
          color: #061d19;
          font-size: 48px;
          font-weight: 800;
          transition: background 0.3s ease;
        }

        .counter-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .action-button {
          min-width: 48px;
          height: 53px;
          padding: 0 14px;
          border-radius: 13px;
          background: #172c30;
          border: 1px solid #307b6b;
          color: #f5f6fa;
          font-size: 17px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .action-button:hover {
          background: #21443e;
          transform: translateY(-2px);
        }

        .random-button {
          padding: 0 19px;
          background: linear-gradient(
            135deg,
            #59d3b5,
            #9ae8cc
          );
          border: none;
          color: #071c18;
          font-size: 17px;
          font-weight: 800;
        }

        .random-button:hover {
          opacity: 0.9;
          background: #83e5c8;
        }

        .status-panel {
          padding: 26px 22px;
        }

        .status-panel h2 {
          font-size: 24px;
          margin-bottom: 17px;
          color: #f5f6fa;
        }

        .status-panel p {
          color: #aabce1;
          font-size: 18px;
          line-height: 1.6;
        }

        .status-panel strong {
          color: #f5f6fa;
        }

        @media (min-width: 1500px) {
          .practice-container {
            min-height: 390px;
          }

          .counter-panel,
          .status-panel {
            min-height: 255px;
          }
        }

        @media (max-width: 850px) {
          .practice-grid {
            grid-template-columns: 1fr;
          }

          .counter-panel,
          .status-panel {
            min-height: 220px;
          }
        }

        @media (max-width: 550px) {
          .practice-page {
            padding: 18px 12px;
          }

          .learning-goal {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .learning-goal p {
            font-size: 14px;
          }

          .practice-container {
            padding: 18px 13px;
          }

          .practice-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .practice-header h1 {
            font-size: 28px;
          }

          .counter-badge {
            font-size: 12px;
          }

          .practice-grid {
            gap: 15px;
          }

          .number-box {
            width: 100px;
            height: 100px;
            font-size: 40px;
          }

          .status-panel {
            padding: 22px 17px;
          }

          .status-panel h2 {
            font-size: 21px;
          }

          .status-panel p {
            font-size: 15px;
          }

          .random-button {
            font-size: 14px;
          }
        }
      `}</style>

      {/* Learning Goal */}
      <div className="learning-goal">
        <strong>LEARNING GOAL</strong>
        <p>
          Update component state and observe the interface respond immediately.
        </p>
      </div>

      {/* Main Practice Container */}
      <main className="practice-container">

        {/* Header */}
        <div className="practice-header">
          <h1>Interactive Practice</h1>

          <div className="counter-badge">
            <span className="counter-dot"></span>
            Counter: {count}
          </div>
        </div>

        {/* Two Panels */}
        <div className="practice-grid">

          {/* Counter Panel */}
          <section className="counter-panel">
            <div
              className="number-box"
              style={{ backgroundColor: color }}
            >
              {count}
            </div>

            <div className="counter-actions">
              <button
                className="action-button"
                onClick={() => setCount(count - 1)}
              >
                -1
              </button>

              <button
                className="action-button"
                onClick={() => setCount(count + 1)}
              >
                +1
              </button>

              <button
                className="action-button random-button"
                onClick={randomColor}
              >
                Random Color
              </button>
            </div>
          </section>

          {/* Status Panel */}
          <section className="status-panel">
            <h2>Status</h2>

            <p>
              Current value is <strong>{count}</strong>.
              The highlight color updates to keep the panel lively.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}

export default Counter;
