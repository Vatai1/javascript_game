//Кнопка для нечала игры
document.getElementById("start-game").onclick = function () {
  var start = new Date().getTime();
  var clicks = 0;
  var minTime = 99999999;
  var maxTime = 0;

  function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function reset_block() {
    //Выбор между кругом и квадратом(прямоугольником)
    if (Math.random() > 0.5) {
      document.getElementById("shape").style.borderRadius = "50%";
    } else {
      document.getElementById("shape").style.borderRadius = "0";
    }
    var width = Math.floor(Math.random() * 175 + 100);
    var height = width;
    //Размеры фигуры
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = height + "px";
    //Расположение фигуры
    document.getElementById("shape").style.top = Math.random() * 500 + "px";
    document.getElementById("shape").style.left = Math.random() * 700 + "px";

    //Цвет фигуры
    document.getElementById("shape").style.background = getRandomColor();
    //Отображение фигуры
    document.getElementById("shape").style.display = "block";
    //Счётчик уничтоженных фигур
    clicks++;
    start = new Date().getTime();
  }

  function reset_block_delay() {
    setTimeout(reset_block, Math.random() * 2000);
  }

  reset_block_delay();

  document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";

    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;

    //Постановка данных в HTML
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    document.getElementById("clicks").innerHTML = clicks + " фигур(ы)";
    if (timeTaken < minTime) {
      minTime = timeTaken;
      document.getElementById("minTime").innerHTML = minTime + "s";
    }
    if (timeTaken > maxTime) {
      maxTime = timeTaken;
      document.getElementById("maxTime").innerHTML = maxTime + "s";
    }

    reset_block_delay();
  };
};
