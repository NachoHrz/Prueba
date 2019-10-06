function change_page(){
   // similar behavior as an HTTP redirect
   window.location.replace("test.html");
   //or
   // similar behavior as clicking on a link
   window.location.href = "test.html";
}; 


$(document).ready(function(){
    $(window).load(function(){
    var newUrl = [some code to build up URL string];
    document.location.href = newUrl;
    });
  });

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("demo_test.txt");
  });
});