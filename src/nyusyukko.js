const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('../../../public')); // publicディレクトリ内の静的ファイルにアクセス可能にする
app.get('/')
app.post('/submit', (req, res) => {
  const dataList = req.body;
  let jsonData = {};
  for (const data of dataList) {
    jsonData = { ...jsonData, ...data };//スプレッド構文Object.assign(a, b);と似てる（たぶん同じ？）
  }
  console.log(jsonData);
  const jsonString = JSON.stringify(jsonData);
  console.log(jsonString);
  // console.log('Received form data:', dataList);
  res.json({ message: 'Data received successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
