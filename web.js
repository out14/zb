
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname, '/dist')));

// 모든 경로 index.html로 처리 (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`❌ 포트 ${port}는 이미 사용 중입니다.`);
      process.exit(1); // 프로세스 강제 종료
    }
  });