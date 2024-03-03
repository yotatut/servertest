// require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const itemModel = require('./src/models/itemSchema');
// const displayZaiko = require('./display');
const escapeString = require('./src/escapeString');
const port = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(express.json());
// app.use(express.static(path.join(__dirname,'../../../public')));
// app.use(express.static('public'));

//サーバーの立ち上げ
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// MongoDBサーバーへの接続
mongoose.connect(process.env.mongoURL, {
    maxPoolSize: 10
})
    .then(() => { console.log("接続成功"); });


app.get('/',(req,res)=>{
    res.send('./index.html');
});
// ユーザが入力した値は、１つ且つjson形式で送られてきている想定（複数ワードの検索をしたい場合は、拡張する必要あり）
app.post('/search', (req, res) => {

    const word = req.body;
    console.log(word);


    const test = escapeString(word[0].name);//ユーザに入力された値
    console.log(test);
    // const test = "";//ユーザに入力された値
    let str = new RegExp(`.*${test}.*`, "i"); // .*:前後にすべての文字・文字列長を含めることを許可する,"i":大文字小文字区別しない

    // console.log(YourModel.find({ name: str }).explain("executionStats"));
    // YourModel.find({ name: str }).explain("executionStats");
    // 指定したnameでデータを取得
    //正規表現こみで成功→あいまい検索もできる（ユーザに入力された値はサニタイジングする）
    itemModel.ioModel.find({ name: str }).exec()
        .then(result => {
            //データがあればデータをhtml要素（表）として出力し、ないなら"見つからない"とlog出力
            if (result.length > 0) {
                // const success = console.log('取得したデータ:', result);
                console.log('取得したデータ:', result);
                res.send(JSON.stringify(result));
                // for(const data of result){

                // };
                // console.log(displayZaiko(result));
                // const addContents = displayZaiko(result);
                // res.send(addContents);

            } else {
                // const failed = console.log('該当するデータが見つかりませんでした。');
                console.log('該当するデータが見つかりませんでした。');
            }
        })
        .catch(err => {
            console.error('データを取得できませんでした:', err);
        })
        .finally(() => {
            // MongoDBサーバーとの接続を閉じる
            // mongoose.connection.close();
        });


});

