alert("Click OK,to Get Result!!!")
function randomName(){
  var randomNum = Math.ceil(Math.random()*6);

  return randomNum
}

numImage = document.querySelectorAll("img").length
arr = [0,0]
for (var i = 0; i < numImage; i++) {
  var1 = document.querySelectorAll("img")[i];
  imgCont = randomName();
  arr[i] = imgCont
  imgLoc = "images/dice"+imgCont+".png"
  console.log(imgCont);
  var1.setAttribute("src",imgLoc);
}






if (arr[0]>arr[1]) {
  document.getElementById("h1Tage").innerHTML = "🚩 Player 1 Wins"


}
else if (arr[0]<arr[1]) {
  document.getElementById("h1Tage").innerHTML = "Player 2 Wins 🚩"

}
else{
  document.getElementById("h1Tage").innerHTML = "Match 🥱 Draws"
}
