document.getElementById("btn1").addEventListener("click", function () {
  alert("Click Event");
});


document.getElementById("btn2").addEventListener("mouseover", function () {
  alert("Mouse Enter Event");
});


document.getElementById("btn3").addEventListener("mouseup", function () {
  alert("Mouse Up Event");
});


document.getElementById("btn4").addEventListener("mouseout", function () {
  alert("Mouse Leave Event");
});


document.getElementById("btn5").addEventListener("mouseover", function () {
  document.getElementById("btn5").className = "btn btn-danger";
});

document.getElementById("btn5").addEventListener("mouseout", function () {
  document.getElementById("btn5").className = "btn btn-warning";
});



document.getElementById("btn6").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});


document.getElementById("btn7").addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});

document.getElementById("btn8").addEventListener("click", function () {
  document.getElementById("btn1").className = "btn btn-dark";
  document.getElementById("btn2").className = "btn btn-dark";
  document.getElementById("btn3").className = "btn btn-dark";
  document.getElementById("btn4").className = "btn btn-dark";
  document.getElementById("btn5").className = "btn btn-dark";
  document.getElementById("btn6").className = "btn btn-dark";
  document.getElementById("btn7").className = "btn btn-dark";
});