function getSelectedRadioButton() {
    // フォーム要素を取得
    const form = document.getElementById('myForm');
  
    // フォーム内のラジオボタン要素を取得
    const radioButtons = form.elements['io_flag'];
  
    // 選択されているラジオボタンを探す
    let selectedRadioButton;
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        selectedRadioButton = radioButtons[i];
        break;
      }
    }
  
    // 選択されているラジオボタンの値を取得
    const selectedValue = selectedRadioButton ? selectedRadioButton.value : null;
  
    // 取得した値をコンソールに表示
    console.log("Selected Radio Button Value:", selectedValue);
    return selectedValue;
  }
  