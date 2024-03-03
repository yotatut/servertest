document.addEventListener('DOMContentLoaded', function () {
  // JSONデータ
  const jsonData = [
    { "code": "4901777375345", "name": "伊右衛門焙じ茶600ml", "amount": 4 },
    { "code": "4902102119443", "name": "爽健美茶600ml", "amount": 5 },
    { "code": "4901085003800", "name": "おーいお茶緑茶525ml", "amount": 3 },
    { "code": "4909411088538", "name": "キリン生茶525ml", "amount": 3 },
    { "code": "4902102107648", "name": "綾鷹525ml", "amount": 5 }
    // ... 他のデータ
  ];

  // JSONデータをCSVに変換する関数
  function convertJSONtoCSV(jsonData) {
    const header = Object.keys(jsonData[0]).join(','); // CSVヘッダー
    const rows = jsonData.map(obj => Object.values(obj).join(',')); // データ行
    return `${header}\n${rows.join('\n')}`;
  }

  // CSVデータをダウンロードする関数
  function downloadCSV(csvData) {
    const bom = new Uint8Array([0xEf, 0xBB, 0xBF]); //Excelで文字化けさせないため
    const blob = new Blob([bom, csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
    downloadLink.download = 'output.csv';
    downloadLink.style.display = 'block'; // リンクを表示
  }

  // JSONデータをCSVに変換してダウンロード
  const csvData = convertJSONtoCSV(jsonData);
  downloadCSV(csvData);
},);