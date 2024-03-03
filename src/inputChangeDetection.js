// input要素を取得
const myInput = document.getElementById('myInput');

// inputイベントが発生したときに実行される関数を設定
myInput.addEventListener('input', function (event) {
    // 入力内容が変化したときの処理
    console.log('入力内容が変化しました:', event.target.value);
});