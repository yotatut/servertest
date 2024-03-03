const convertToISODate = (userInput) => {
    // yy/mmdd形式の日付をISO 8601形式に変換する処理
    // ここで適切なパースやフォーマット変換を行う

    // 例として、yy/mmdd形式をyyyy-mm-ddT00:00:00Zに変換する
    var parts = userInput.split("/");
    var isoDate = `${parts[0]}-${parts[1]}-${parts[2]}T00:00:00Z`;

    return new Date(isoDate);
}

module.exports = convertToISODate;