window.addEventListener('DOMContentLoaded', function () {
    // 現在日時を取得
    const currentDate = new Date();

    // 個々の要素を格納 (year, month, day)
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); //'0'があるのは、例えば”3月”を”03月”とするため
    const day = ('0' + currentDate.getDate()).slice(-2); //'0'があるのは、例えば”3日”を”03”とするため

    //　 「yyyy/mm/dd」形式フォーマットの作成
    const formattedDate = `${year}/${month}/${day}`;
    document.getElementById('nowDate').innerHTML = `<span class="insertValue" name="io_date">${formattedDate}</span>　　　📅`;


    // //日付をテキストとしてHTMLに挿入（今はアイコンで誤魔化してる。後でカレンダーAPIも導入）
    // resultContainer.innerHTML =
    //     `<span>${ymd}</span>　　　📅
    //     <input type="hidden" class="insertValue" name="io_date" value="22">`;

    /*'<input type="text" name="date" style="background-color:#f0f0f0; border:#f0f0f0;" value="' + currentYear.toString() + '/'
     + currentMonth.toString() + '/' + currentDate.toString() +'　　　📅">';*/
})
