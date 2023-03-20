function add() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("output").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + (num1+num2) + ".";
  }

  function sub() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("output").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + (num1-num2) + ".";
  }

  function multiply() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("output").innerHTML = "The product of " + num1 + " and " + num2 + " is " + (num1*num2) + ".";
  }

  function divide() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("output").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + (num1/num2) + ".";
  }

  function rem() {
    var num1 = document.getElementById("one").value;
    var num2 = document.getElementById("two").value;
    document.getElementById("output").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + (num1%num2) + ".";
  }