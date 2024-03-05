
const searchData = (res,Model,searchJson) => {
    // 指定した値でデータを取得
    //正規表現こみで成功→あいまい検索もできる（ユーザに入力された値はサニタイジングする）
    Model.find(searchJson).exec() // ex) itemModel.ioModel.find({ name: str })
        .then(result => {
            //データがあればデータをhtml要素（表）として出力し、ないなら"見つからない"とlog出力
            if (result.length > 0) {

                //在庫のSUM処理
                for (let i=0; i<result.length;i++) {
                    for (let j = result.length-1; j > i; j--) {
                        //名前が同じ奴のamount(入出庫数)は合計する
                        if (result[i].name == result[j].name) {
                            result[i].amount += result[j].amount;
                            result.splice(j, 1);
                        } else {
                        }
                    }
                }


                console.log('取得したデータ:', result);
                const resJSON=JSON.stringify(result);
                res.send(resJSON);
            } else {
                // console.log(result);
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