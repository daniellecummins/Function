<!DOCTYPE html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>Lesson 1 - Javascript function</title>
    <link rel="stylesheet" type="text/css" href="css/style-2.css">
</head>
  <body>
    <div id="content">
      <div>
        <h1 id="banner">Lesson 1 - Simple Javascript function</h1>
      </div>
      <div class="row">
        <div class="image"><img src="images/app.png" alt="applogo">
        </div>
        <div class="description">
            <form action="demo_form.asp">
            <p>First number: </p><input type="text" name="num1" id="number1"><br>
            <p>Second number: </p><input type="text" name="num2" id="number2"><br><br>
            </form>

            <button class="button" onclick="myAdd('add')">Add</button>
			<button class="button" onclick="mySubtract()">Subtract</button>
			<button class="button" onclick="myMultiply()">Multiply</button>
			<button class="button" onclick="myDivide()">Divide</button>
        <p id="demo"></p>


        </div>
      </div>
    </div>

  
</body>

function myFunction(param){
	//Read in two values from input boxes
	console.log(param);
	var num1=parseInt(document.getElementById("number1").value);
	var num2=paraseInt(document.getElementById("number2").value);
var result;

if (param= 'add)'{
	// Add them together
result= num1+num2;
}
else if (param='multiply')
}
//Add them together
result=num1*num2;
}
else if (param='subtract')
}
//Add them together
result=num1-num2;
}
else if (param='divide')
}
//Add them together
result=num1/num2;
}
//display on the page
document.getElementById ("demo").innerHTML='Answer'+result;
}
