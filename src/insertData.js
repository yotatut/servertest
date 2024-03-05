const mongoose = require('mongoose');


const insertData = (res, Model, jsonData) => {

    convertToISODate(jsonData['io_date']);//dateをISODateに変換
    jsonData['amount'] = parseInt(jsonData['amount']);//amountをNumber(Int)に変換

    //出庫ならamountをマイナスにする（在庫確認画面で、SUMすれば在庫が表示できるように）
    jsonData['amount'] = (jsonData['io_flag'] == "2") ? -jsonData['amount'] : jsonData['amount'];


    //挿入データの適格性検査はindex.html側とかでやってもらう
    // データを挿入
    Model.insertMany(jsonData)
        .then(docs => {
            // Promiseの処理
            console.log('データが挿入されました:', docs);
            res.send('データの登録が成功しました');
        })
        .catch(err => {
            res.send('データの登録が失敗しました。入力項目に誤り・不足があります。');
            console.log('データ挿入失敗：', err);
            // エラーハンドリング
        }).finally(() => {
            // MongoDBとの接続を閉じる
            // mongoose.connection.close()
        });

}

function convertToISODate(userInput) {
    // yy/mmdd形式の日付をISO 8601形式に変換する処理
    // ここで適切なパースやフォーマット変換を行う

    // 例として、yy/mmdd形式をyyyy-mm-ddT00:00:00Zに変換する
    var parts = userInput.split("/");
    var isoDate = `${parts[0]}-${parts[1]}-${parts[2]}T00:00:00Z`;

    return new Date(isoDate);
}

module.exports = insertData;
