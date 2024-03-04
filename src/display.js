// const exportToCSV=require('src/exportToCSV');
async function displayZaiko(result) {
    let parent = document.getElementById("resultDisplay");
    let divOld = document.getElementById("childResult");
    // let divNew = document.getElementById("resultDisplay");
    let divNew = document.createElement('div');
    divNew.id = "childResult";
    divNew.className = "resultDisplay";

    // テーブルを作成
    let tableElement = document.createElement('table');
    // 行を作成
    let rowElement = document.createElement('tr');
    // セル1を作成
    let cellElement1 = document.createElement('td');
    cellElement1.className = 'text-center rounded-box-attribute';

    /*属性（Barcode<br>商品名）を生成 */
    // テキストノード(Barcode)を作成
    let textItemBarcode = document.createTextNode("Barcode");
    // ブレーク要素を作成
    let brElement = document.createElement('br');
    // テキストノード(商品名)を作成
    let textItemName = document.createTextNode("商品名");
    // span要素、ブレーク要素、テキストノードをセル1に追加
    cellElement1.appendChild(textItemBarcode);
    cellElement1.appendChild(brElement);
    cellElement1.appendChild(textItemName);

    /*属性（在庫数量）を生成 */
    // セル2を作成
    let cellElement2 = document.createElement('td');
    cellElement2.className = 'text-center rounded-box-attribute';
    cellElement2.textContent = "在庫数量";

    // セル1と2を行に追加
    rowElement.appendChild(cellElement1);
    rowElement.appendChild(cellElement2);
    // 行をテーブルに追加
    tableElement.appendChild(rowElement);



    //取得したデータを表示
    for (const data of result) {
        // 行を作成
        rowElement = document.createElement('tr');

        // セル1を作成
        cellElement1 = document.createElement('td');
        cellElement1.className = 'rounded-box-field';

        // span要素を作成
        spanElement = document.createElement('span');
        spanElement.className = 'highlighting';
        spanElement.textContent = data['code'];

        // ブレーク要素を作成
        brElement = document.createElement('br');

        // テキストノードを作成
        let textNode = document.createTextNode(data['name']);

        // span要素、ブレーク要素、テキストノードをセル1に追加
        cellElement1.appendChild(spanElement);
        cellElement1.appendChild(brElement);
        cellElement1.appendChild(textNode);

        // セル2を作成
        cellElement2 = document.createElement('td');
        cellElement2.className = 'field-right';
        cellElement2.textContent = data['amount'];

        // セル1と2を行に追加
        rowElement.appendChild(cellElement1);
        rowElement.appendChild(cellElement2);

        // 行をテーブルに追加
        tableElement.appendChild(rowElement);



    }
    divNew.appendChild(tableElement);
    parent.appendChild(divNew);
    // console.log(typeof divNew);
    parent.replaceChild(divNew, divOld);



    let pareCSV = document.getElementById('exportToCSV');//csv出力親要素
    let csvOld = document.getElementById('downloadLink');
    let csvNew = document.createElement('a');
    // csvNew.href = 'src/exportToCSV.js';
    csvNew.id = 'downloadLink';
    csvNew.className = 'exportToCSV';
    csvNew.target = '_blank';
    csvNew.textContent = 'CSV出力';
    pareCSV.appendChild(csvNew);
    pareCSV.replaceChild(csvNew, csvOld);

    return result;
    // await exportToCSV("");
    // <button type="button" id="searchButton" class="searchButton button" value="" onclick="searchZaiko()">🔍検索</button>
    // await exportToCSV(result);
    //document.body.innerHTML='<script src="./src/utils/exportToCSV.js"></script>';

}
// ,{once:true})
;
