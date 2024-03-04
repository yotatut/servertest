// require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const itemModel = require('./models/itemSchema');
const searchData = require('./searchData');
// const displayZaiko = require('./display');
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

app.post('/register',(req,res)=>{

});



// ユーザが入力した値は、１つ且つjson形式で送られてきている想定（複数ワードの検索をしたい場合は、拡張する必要あり）
app.post('/search', (req, res) => {

    const word = req.body;
    // console.log(word);


    const test = escapeString(word[0].name);//ユーザに入力された値
    // console.log(test);
    // const test = "";//ユーザに入力された値
    let str = new RegExp(`.*${test}.*`, "i"); // .*:前後にすべての文字・文字列長を含めることを許可する,"i":大文字小文字区別しない

    // console.log(YourModel.find({ name: str }).explain("executionStats"));
    // YourModel.find({ name: str }).explain("executionStats");


    searchData(res,itemModel.ioModel, { name: str });

    // new Promise((resolve) => {
    //     setTimeout(() => {
    //         const resu=searchData(itemModel.ioModel, { name: str });
    //         resolve(resu);//mongodbの検索結果（配列）
    //     }, 1000);
    // })
    //     .then((response) => {
    //         if (response) {
    //             console.log('Response:', response);
    //             const jsons=JSON.stringify(response);
    //             res.send(jsons);
    //         } else {
    //             console.log('nothing');
    //         }
    //     })
    //     .catch((err) => {

    //     })
    //     .finally(() => {

    //     })
    //     ;

    // const response = searchData(itemModel.ioModel, { name: str });
    // console.log('Response:', response);
    // res.send(JSON.stringify(response));


});

