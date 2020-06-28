function func1() {
      
  var w;
  w = Sample2.W.value;
      
  var x;
  x  = Sample2.X.value;
      
  var y;
  y  = Sample2.Y.value;
      
  var z;
   z  = (parseInt(x) + parseInt(y)) / 3 - (w);
   
   val = (z) ;
   val = val|0 ;
   console.log(val);
    // var undefined = z;

    
    
    var input_message = document.getElementById("input_message").value;
    input_message = val;
    document.getElementById("output_message").innerHTML = input_message;

    if ( z < 0) {
          var input_message = document.getElementById("input_message").value;
    input_message =("0") ;
    document.getElementById("output_message").innerHTML = input_message;

    if ( z < 0) {
          var input = document.getElementById("input").value;
    input_message =("該当する金融機関はありませんでした。条件を変えて再度診断してください。") ;
    document.getElementById("output").innerHTML = input_message;

    
  }
 }
   }
