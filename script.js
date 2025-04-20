* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #f5f5f5;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

header h1 {
  font-size: 2.5rem;
  color: #ffd700;
}

header p {
  font-size: 1.2rem;
  color: #ccc;
}

main {
  display: grid;
  gap: 40px;
}

section {
  background-color: #1e2a38;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

h2 {
  margin-bottom: 15px;
  color: #00d9ff;
}

#chat-box {
  height: 200px;
  background-color: #2e3d4f;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow-y: auto;
}

textarea {
  width: 100%;
  height: 60px;
  padding: 10px;
  border-radius: 8px;
  resize: none;
  margin-bottom: 10px;
}

button {
  background-color: #00d9ff;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #00b0cc;
}

input[type="file"],
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

#summary-output {
  margin-top: 15px;
  background-color: #2e3d4f;
  padding: 10px;
  border-radius: 10px;
}

canvas {
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
}

footer {
  margin-top: 40px;
  text-align: center;
  color: #bbb;
  font-size: 0.9rem;
}

