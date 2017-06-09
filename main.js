$(document).ready(function() {
  var str = [""];
  $("a").on("click", function() {
    if (this.id === "CE") {
      $("#steps").html("");
      str=[""];
    }
    else if (this.id == "AC") {
      str.pop();
      $("#steps").html(str.join(""));
    } 
    else if (this.id == "=") 
    {
      if (str[str.length - 1] == "." || "+" || "-" || "/")
        $("#steps").html("wrong input");
     else if((str.length == 1 && str[0] == ".") || "+" || "-" || "/") 
       $("#steps").html("wrong input");
      else if(str[str.length-1]=='.' && str[str.length-2]=='.')
         $("#steps").html("wrong input");
    
        $("#steps").html(eval(str.join('')));
}
      else {
        str.push(this.id);
        $("#steps").text(str.join(""));
      }   
  });
});
