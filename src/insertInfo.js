




const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const itemModel = require('./models/itemSchema');
const convertToISODate =require('./convertToISODate');




const app = express();
const port = 3000;

// // app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static('../../../public')); // publicディレクトリ内の静的ファイルにアクセス可能にする
// app.get('/')
// app.post('/submit', (req, res) => {
//     const dataList = req.body;
//     let jsonData={};
//     for (const data of dataList) {
//         jsonData = { ...jsonData, ...data };
//       }
//     console.log(jsonData);
//     const jsonString = JSON.stringify(jsonData);
// console.log(jsonString);
//     // console.log('Received form data:', dataList);
//     res.json({ message: 'Data received successfully!' });
// });


// MongoDBに接続
mongoose.connect(process.env.mongoURL)
    .then(() => { console.log("接続成功") });


// モデルの定義
const yourModel = mongoose.model('YourModel', {
    io_date: Date,
    io_flag: String,
    code: String,
    name: String,
    amount: String
    // 配列のフィールドを定義
}, 'items_info');


const dataArray = {
    io_date: '2024/03/01',
    io_flag: '1',
    code: '21321432',
    name: '純粋はちみつ',
    amount: '1'
}

convertToISODate(dataArray['io_date']);
// // 配列形式のJSONデータ
// const dataArray = [
//     {
//         "io_date": "2024/03/01"
//     },
//     {
//         "io_flag": "1"
//     },
//     {
//         "code": "21321432",
//         "name": "純粋はちみつ"
//     },
//     {
//         "amount": "1"
//     }
// ];



mongoose.connection.on('connected', () => {
    console.log('MongoDBに接続しました');

    // ここでデータベースの操作を実行
});
// データを挿入
yourModel.insertMany(dataArray)
    .then(docs => {
        // Promiseの処理
        console.log('データが挿入されました:', docs);
    })
    .catch(err => {
        console.log(err);
        // エラーハンドリング
    }).finally(() => {
        mongoose.connection.close()
    });


// MongoDBとの接続を閉じる

