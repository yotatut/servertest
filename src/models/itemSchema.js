const mongoose = require('mongoose');

//入出庫情報格納コレクション用スキーマ
//要件が明確になったら、後々各フィールドに対する制約を付ける。
const itemIOSchema = new mongoose.Schema({
    io_date: { type: Date },   //時刻まで必要か
    io_flag: { type: Number },
    code: { type: String },
    name: { type: String },
    amount: { type: Number },
});

//商品情報格納コレクション用スキーマ
//ここも要件が明確になったら、後々各フィールドに対する制約を付ける。
//更新日のログを取るか
const itemInfoSchema = new mongoose.Schema({
    code: { type: String },
    name: { type: String },
    day_stock: { type: Number },
    update_at: { type: Date },
});

const ioModel = mongoose.model('itemIOModel', itemIOSchema, 'items_io' );
const infoModel = mongoose.model('itemInfoModel', itemInfoSchema,'items_info');

module.exports = { ioModel, infoModel };