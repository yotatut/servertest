const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const DataModel = mongoose.model('Data', dataSchema);
app.use(express.json());
app.use(bodyParser.json());

// MongoDBに接続
mongoose.connect("mongodb+srv://shincode:NQo543hxaXbdGIqf@cluster0.rh3akjq.mongodb.net/warehouseManagement?retryWrites=true&w=majority");

// データを挿入するエンドポイント
app.post('/insertData', async (req, res) => {
    try {
        const { name, age } = req.body;

        // Mongooseモデルを使用してデータを挿入
        const newData = new DataModel({ name, age });
        await newData.save();

        res.status(200).send('Data inserted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});