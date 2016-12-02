console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('span').on('click',function (){
    var newPara = "You Clicked: " + $(this).text() + " at " + Date.now();
    // console.log(newPara);
    $('ul').append('<li>'+newPara+'</li>')
  })
})
