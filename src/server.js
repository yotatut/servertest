// require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const itemModel = require('./models/itemSchema');
const searchData = require('./searchData');
const insertData = require('./insertData');
const escapeString = require('./escapeString');
const port = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(express.json());
// app.use(express.static(path.join(__dirname,'../../../public')));
app.use(express.static('./'));

//サーバーの立ち上げ
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// MongoDBサーバーへの接続
mongoose.connect(process.env.mongoURL, {
    maxPoolSize: 10
})
    .then(() => { console.log("接続成功"); });


app.get('/', (req, res) => {
    res.send('/index.html');
});


//入出庫バーコードから商品名取得用
app.get('/:data',(req,res)=>{
    const code=req.params.data;
    // console.log(code);
    // console.log(typeof code);
    searchData(res,itemModel.infoModel, { code: code });
});

//入出庫ユーザ入力項目からデータ登録用
app.post('/submit', (req, res) => {
    const dataList = req.body;
    let jsonArray = [];
    for (const data of dataList) {
      jsonArray = { ...jsonArray, ...data };//スプレッド構文Object.assign(a, b);と似てる（たぶん同じ？）
    }
    // console.log(jsonArray);
    insertData(res,itemModel.ioModel,jsonArray);
    // console.log('Received form data:', dataList);
    // res.json({ message: 'Data received successfully!' });
  });


//在庫確認画面名前から在庫の諸情報確認用
// ユーザが入力した値は、１つ且つjson形式で送られてきている想定（複数ワードの検索をしたい場合は、拡張する必要あり）
app.post('/search', (req, res) => {

    const word = req.body;
    // console.log(word);


    const test = escapeString(word[0].name);//ユーザに入力された値
    // console.log(test);
    // const test = "";//ユーザに入力された値
    let str = new RegExp(`.*${test}.*`, "i"); // .*:前後にすべての文字・文字列長を含めることを許可する,"i":大文字小文字区別しない

    searchData(res,itemModel.ioModel, { name: str });




});

