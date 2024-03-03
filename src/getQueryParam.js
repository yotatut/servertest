
var urlParams = new URLSearchParams(window.location.search);
var receivedData = urlParams.get('data');

if (receivedData) {
    // 受け取ったデータを表示
    document.getElementById('receivedBarcode').innerHTML
        = `<span class="insertValue highlighting" name="code">${receivedData}</span>
        <br><span class="insertValue" name="name">純粋はちみつ</span>`;
    //?data=4901810065028
}