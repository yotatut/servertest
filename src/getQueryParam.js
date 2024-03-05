
window.addEventListener('DOMContentLoaded', () => {
    var urlParams = new URLSearchParams(window.location.search);
    var receivedData = urlParams.get('data');
    if (receivedData) {
        fetch(`/${receivedData}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    // for (const itremData of data) {}//今後、複数個のバーコードをスキャンすることがある場合、これで拡張
                    const itemName = data[0].name;

                    document.getElementById('receivedBarcode').innerHTML
                        = `<span class="insertValue highlighting" name="code">${receivedData}</span>
                    <br><span class="insertValue" name="name">${itemName}</span>`;
                } else {
                    alert(data);
                }
            })
            .catch(error => console.error('Error:', error));


        //?data=4901810065028
    }
})