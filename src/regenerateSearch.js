// クロージャを使用してアクセス制御を施したオブジェクトの例
function createRegenerateObject() {
    // 外部から直接アクセスできないようにクロージャを使用
    let executed=false;
    return {
      getCount: function() {
        return count;
      },
      increment: function() {
        count++;
      },
      // このメソッドを使って count の値を変更する
      setCount: function(value) {
        count = value;
      }
    };
  }

//   // オブジェクトのインスタンスを作成
// const counterObj = createCounterObject();

// // count の値を直接取得できない
// console.log(counterObj.count); // undefined

// // getCount メソッドを通じて count の値を取得
// console.log(counterObj.getCount()); // 0

// // increment メソッドを通じて count を増やす
// counterObj.increment();
// console.log(counterObj.getCount()); // 1

// // setCount メソッドを使って count の値を変更
// counterObj.setCount(5);
// console.log(counterObj.getCount()); // 5