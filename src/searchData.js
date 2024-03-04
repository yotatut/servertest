
const searchData = (res,Model,searchJson) => {
    // 指定したnameでデータを取得
    //正規表現こみで成功→あいまい検索もできる（ユーザに入力された値はサニタイジングする）
    Model.find(searchJson).exec() // ex) itemModel.ioModel.find({ name: str })
        .then(result => {
            //データがあればデータをhtml要素（表）として出力し、ないなら"見つからない"とlog出力
            if (result.length > 0) {
                // const success = console.log('取得したデータ:', result);y
                // console.log('取得したデータ:', console.log(result));
                const resJSON=JSON.stringify(result);
                res.send(resJSON);
            } else {
                // const failed = console.log('該当するデータが見つかりませんでした。');
               res.send(JSON.stringify("該当するデータが見つかりませんでした。"));
            }
        })
        .catch(err => {
            console.log("データを取得できませんでした:",err);
        })
        .finally(() => {
            // MongoDBサーバーとの接続を閉じる
            // mongoose.connection.close();
        });
}

module.exports = searchData;