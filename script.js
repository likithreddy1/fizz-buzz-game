    function response()
    {
      var uinput = document.getElementById("input").value;
      if(uinput==null)
      {
          document.getElementById("result").innerHTML=("Enter value");
      }
      if (uinput % 3 === 0 && uinput % 5 === 0) 
      {
         document.getElementById("result").innerHTML =("Fizz-Buzz!!!");
      } 
      else if (uinput % 3 === 0) 
      {
          document.getElementById("result").innerHTML =("Fizz!!");
      } 
      else if (uinput % 5 === 0) 
      {
         document.getElementById("result").innerHTML =("Buzz!!");
      } 
      else 
      {
          document.getElementById("result").innerHTML =(uinput);
      }
    }

