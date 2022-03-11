'use strict'
function LengthKey(){
  let length = document.getElementById("id_length").value;
  let goal = document.getElementById("id_Goal").value;
  let Goal = parseFloat(goal);
  let Length = length.length;
  document.getElementById("moziLength").innerHTML = String(Length) + "文字";
  document.getElementById("bunbo").innerHTML = Goal;
  document.getElementById("bunsi").innerHTML = Length;
 block(Goal, Length);
 let Word = Goal / 200;
 image(Length, Word);
}

function GoalKey(){
  let length = document.getElementById("id_length").value;
  let goal = document.getElementById("id_Goal").value;
  let Goal = parseFloat(goal);
  let Length = length.length;
  document.getElementById("moziLength").innerHTML = String(Length) + "文字";
  document.getElementById("bunbo").innerHTML = Goal;
  document.getElementById("bunsi").innerHTML = Length;
 block(Goal, Length);
}

function block(goal, length){
  //一文字を壊すのに必要な層p(word)
  var word = goal / 200;
  //一行を壊すのに必要な層p(line)
  var line = word * 10;
  //壊した行数(lineBroken)
  var lineBroken = Math.floor(length / line);
  //壊した文字数(wordBroken)
  var wordBroken = Math.floor(length / word);
  //現在の行数(x行目)
  var lineId = String(lineBroken);
  //wordBrokenの一の位を調べる(surface)
  var surface = wordBroken - lineBroken * 10;
  //文字の配列(削除判定の行は0とし、空白で表す)
  var r = [' ','岩','岩岩','岩岩岩','岩岩岩岩','岩岩岩岩岩','岩岩岩岩岩岩','岩岩岩岩岩岩岩','岩岩岩岩岩岩岩岩','岩岩岩岩岩岩岩岩岩','岩岩岩岩岩岩岩岩岩岩'];
  var s = ["", "////////////////////"]
  if(lineBroken >= 20){
  document.getElementById("OK").innerHTML = "完了";
  document.getElementById("0").innerHTML = r[0];
document.getElementById("1").innerHTML = r[0];
document.getElementById("2").innerHTML = r[0];
document.getElementById("3").innerHTML = r[0];
document.getElementById("4").innerHTML = r[0];
document.getElementById("5").innerHTML = r[0];
document.getElementById("6").innerHTML = r[0];
document.getElementById("7").innerHTML = r[0];
document.getElementById("8").innerHTML = r[0];
document.getElementById("9").innerHTML = r[0];
document.getElementById("10").innerHTML = r[0];
document.getElementById("11").innerHTML = r[0];
document.getElementById("12").innerHTML = r[0];
document.getElementById("13").innerHTML = r[0];
document.getElementById("14").innerHTML = r[0];
document.getElementById("15").innerHTML = r[0];
document.getElementById("16").innerHTML = r[0];
document.getElementById("17").innerHTML = r[0];
document.getElementById("18").innerHTML = r[0];
document.getElementById("19").innerHTML = r[0];
}else{
  document.getElementById("OK").innerHTML = r[0]
document.getElementById("0").innerHTML = r[10];
document.getElementById("1").innerHTML = r[10];
document.getElementById("2").innerHTML = r[10];
document.getElementById("3").innerHTML = r[10];
document.getElementById("4").innerHTML = r[10];
document.getElementById("5").innerHTML = r[10];
document.getElementById("6").innerHTML = r[10];
document.getElementById("7").innerHTML = r[10];
document.getElementById("8").innerHTML = r[10];
document.getElementById("9").innerHTML = r[10];
document.getElementById("10").innerHTML = r[10];
document.getElementById("11").innerHTML = r[10];
document.getElementById("12").innerHTML = r[10];
document.getElementById("13").innerHTML = r[10];
document.getElementById("14").innerHTML = r[10];
document.getElementById("15").innerHTML = r[10];
document.getElementById("16").innerHTML = r[10];
document.getElementById("17").innerHTML = r[10];
document.getElementById("18").innerHTML = r[10];
document.getElementById("19").innerHTML = r[10];
  katamari(lineBroken, r, s);
  five(lineBroken, surface, lineId, r, s);
}
}
function image(length, word){
  let flag = length % word;
  var picture = ["金槌振り下ろし.png", "金槌振り上げ.png"]
  if(flag <= 1){
    document.getElementById("miner").src = picture[0];
  }else{
    document.getElementById("miner").src = picture[1];
  }
}

function katamari(lineBroken, r, s){
if(lineBroken >= 5){
  document.getElementById("0").innerHTML = r[0];
  document.getElementById("1").innerHTML = r[0];
  document.getElementById("2").innerHTML = r[0];
  document.getElementById("3").innerHTML = r[0];
  document.getElementById("4").innerHTML = r[0];

  document.getElementById("20").innerHTML = s[1];
  document.getElementById("21").innerHTML = s[1];
  document.getElementById("22").innerHTML = s[1];
  document.getElementById("23").innerHTML = s[1];
  document.getElementById("24").innerHTML = s[1];
}
if(lineBroken >= 10){
  document.getElementById("5").innerHTML = r[0];
  document.getElementById("6").innerHTML = r[0];
  document.getElementById("7").innerHTML = r[0];
  document.getElementById("8").innerHTML = r[0];
  document.getElementById("9").innerHTML = r[0];

  document.getElementById("25").innerHTML = s[1];
  document.getElementById("26").innerHTML = s[1];
  document.getElementById("27").innerHTML = s[1];
  document.getElementById("28").innerHTML = s[1];
  document.getElementById("29").innerHTML = s[1];
}
if(lineBroken >= 15){
  document.getElementById("10").innerHTML = r[0];
  document.getElementById("11").innerHTML = r[0];
  document.getElementById("12").innerHTML = r[0];
  document.getElementById("13").innerHTML = r[0];
  document.getElementById("14").innerHTML = r[0];

  document.getElementById("30").innerHTML = s[1];
  document.getElementById("31").innerHTML = s[1];
  document.getElementById("32").innerHTML = s[1];
  document.getElementById("33").innerHTML = s[1];
  document.getElementById("34").innerHTML = s[1];
  };
}

function five(lineBroken, surface, lineId, r, s){
  let lineFive = lineBroken % 5;
  let lineFive0 = String(lineBroken - lineFive);
  let lineFive1 = String(lineBroken - lineFive + 1);
  let lineFive2 = String(lineBroken - lineFive + 2);
  let lineFive3 = String(lineBroken - lineFive + 3);
  let lineFive4 = String(lineBroken - lineFive + 4);

  let backFive0 = String(lineBroken - lineFive + 20);
  let backFive1 = String(lineBroken - lineFive + 21);
  let backFive2 = String(lineBroken - lineFive + 22);
  let backFive3 = String(lineBroken - lineFive + 23);
  let backFive4 = String(lineBroken - lineFive + 24);
  if(lineFive == 0){
    treetop(surface, lineId, r)
    document.getElementById(lineFive1).innerHTML = r[10];
    document.getElementById(lineFive2).innerHTML = r[10];
    document.getElementById(lineFive3).innerHTML = r[10];
    document.getElementById(lineFive4).innerHTML = r[10];

    document.getElementById(backFive0).innerHTML = s[0];
    document.getElementById(backFive1).innerHTML = s[0];
    document.getElementById(backFive2).innerHTML = s[0];
    document.getElementById(backFive3).innerHTML = s[0];
    document.getElementById(backFive4).innerHTML = s[0];
  }else if(lineFive == 1){
    document.getElementById(lineFive0).innerHTML = r[0];
    treetop(surface, lineId, r);
    document.getElementById(lineFive2).innerHTML = r[10];
    document.getElementById(lineFive3).innerHTML = r[10];
    document.getElementById(lineFive4).innerHTML = r[10];

    document.getElementById(backFive0).innerHTML = s[1];
    document.getElementById(backFive1).innerHTML = s[0];
    document.getElementById(backFive2).innerHTML = s[0];
    document.getElementById(backFive3).innerHTML = s[0];
    document.getElementById(backFive4).innerHTML = s[0];
  }else if(lineFive == 2){
    document.getElementById(lineFive0).innerHTML = r[0];
    document.getElementById(lineFive1).innerHTML = r[0];
    treetop(surface, lineId, r);
    document.getElementById(lineFive3).innerHTML = r[10];
    document.getElementById(lineFive4).innerHTML = r[10];

    document.getElementById(backFive0).innerHTML = s[1];
    document.getElementById(backFive1).innerHTML = s[1];
    document.getElementById(backFive2).innerHTML = s[0];
    document.getElementById(backFive3).innerHTML = s[0];
    document.getElementById(backFive4).innerHTML = s[0];
  }else if(lineFive == 3){
    document.getElementById(lineFive0).innerHTML = r[0];
    document.getElementById(lineFive1).innerHTML = r[0];
    document.getElementById(lineFive2).innerHTML = r[0];
    treetop(surface, lineId, r);
    document.getElementById(lineFive4).innerHTML = r[10];

    document.getElementById(backFive0).innerHTML = s[1];
    document.getElementById(backFive1).innerHTML = s[1];
    document.getElementById(backFive2).innerHTML = s[1];
    document.getElementById(backFive3).innerHTML = s[0];
    document.getElementById(backFive4).innerHTML = s[0];
  }else if(lineFive == 4){
    document.getElementById(lineFive0).innerHTML = r[0];
    document.getElementById(lineFive1).innerHTML = r[0];
    document.getElementById(lineFive2).innerHTML = r[0];
    document.getElementById(lineFive3).innerHTML = r[0];
    treetop(surface, lineId, r);

    document.getElementById(backFive0).innerHTML = s[1];
    document.getElementById(backFive1).innerHTML = s[1];
    document.getElementById(backFive2).innerHTML = s[1];
    document.getElementById(backFive3).innerHTML = s[1];
    document.getElementById(backFive4).innerHTML = s[0];
  }
}

function treetop(surface, lineId, r){
  if(surface == 0){
    document.getElementById(lineId).innerHTML = r[10];
  }else if(surface == 1){
    document.getElementById(lineId).innerHTML = r[9];
  }else if(surface == 2){
    document.getElementById(lineId).innerHTML = r[8];
  }else if(surface == 3){
    document.getElementById(lineId).innerHTML = r[7];
  }else if(surface == 4){
    document.getElementById(lineId).innerHTML = r[6];
  }else if(surface == 5){
    document.getElementById(lineId).innerHTML = r[5];
  }else if(surface == 6){
    document.getElementById(lineId).innerHTML = r[4];
  }else if(surface == 7){
    document.getElementById(lineId).innerHTML = r[3];
  }else if(surface == 8){
    document.getElementById(lineId).innerHTML = r[2];
  }else if(surface == 9){
    document.getElementById(lineId).innerHTML = r[1];
  }
}