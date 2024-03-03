//在庫確認画面で、検索文字入力欄に新規の入力があった場合に、再度「検索」ボタンを有効にしたい。
// もしくは、連続で検索ボタンを押下すると、押した回数分同じ結果がいくつも表示される問題を解決できる他の方法を探す。


//他の関数を再生成するための関数  
  // テキストボックスの要素を取得
  var textBox = document.getElementById('myTextBox');

  // inputイベントのリスナーを追加
  textBox.addEventListener('input', function() {
    // テキストボックスの内容が変更されたときに実行されるコード
    var currentText = textBox.value;
    console.log('テキストが変更されました:', currentText);
  });
  
  // 関数を生成する関数
function generateFunction(value) {
    // 生成された関数
    return function() {
      console.log('Generated function with value:', value);
    };
  }
  
  // 関数を生成して返す
  var generatedFunction = generateFunction('Hello');
  
  // 生成された関数を実行
  generatedFunction();

