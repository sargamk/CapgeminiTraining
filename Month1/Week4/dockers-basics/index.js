const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Docker Node App</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          font-family: Arial, sans-serif;
          color: white;
          text-align: center;
        }

        .card {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
        }

        h1 {
          margin-bottom: 10px;
          font-size: 2.5rem;
        }

        p {
          opacity: 0.9;
          font-size: 1.1rem;
        }

        .btn {
          margin-top: 20px;
          padding: 12px 25px;
          border: none;
          border-radius: 25px;
          background: white;
          color: #764ba2;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Docker Node App</h1>
        <p>Your Express server is running successfully inside Docker-ready setup.</p>
        <button class="btn" onclick="alert('App is working perfectly! 🎉')">
          Check Status
        </button>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
