window.addEventListener("DOMContentLoaded",function(){
    // QuaggaJS設定
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector("#interactive"),
            constraints: {
                width: 640,
                height: 480,
                facingMode: "environment", // カメラのフロントまたはバックを指定
            },
        },
        decoder: {
            readers: ["ean_reader", "upc_reader"],
        },
    }, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        Quagga.start();
    });

    // バーコードが検出されたときの処理
    Quagga.onDetected(function (result) {
        alert('スキャン結果: ' + result.codeResult.code);
        // ここで取得したバーコードの値を適切に処理する(入出庫ページに送信)
        var myVariable = result.codeResult.code;

        // クエリパラメータを含んだURLを生成
        var nextPageUrl = './index.html?data=' + encodeURIComponent(myVariable);
      
        Quagga.stop();
        // 別のページにリダイレクト
        window.location.href = nextPageUrl;
    });
})