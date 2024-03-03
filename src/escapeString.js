const escapeString = (str) => {
    if ((typeof str) == 'string') {
        str=str.replace(/[\u3000]/g, '').trim();// 全角スペースを半角にしてから半角スペースを除く
        str=str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');//   .*+?^${}()|[]\　のいずれかにマッチ→"\"を入れてエスケープ
    }
    return str;
}

// const searchWord = " world";
// console.log(typeof searchWord);
// console.log((typeof searchWord) == 'string');
// const escapedSearchWord = escapeString(searchWord);
// console.log(escapedSearchWord);
// const regexPattern = new RegExp("Hello " + escapedSearchWord, "i");

// const testString = "Hello World";

// if (regexPattern.test(testString)) {
//     console.log("マッチしました");
// } else {
//     console.log("マッチしませんでした");
// }
module.exports = escapeString;
