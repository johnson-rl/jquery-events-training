console.log("Sanity Check: JS is working!");
var start
// var stop
var timePlease = 0
$(document).ready(function(){
  $(window).on('keypress', function(event){
    console.log("key pressed")
      if (start){
        var stop = (Date.now());
        counter();
        timePlease = 1
      } else {
      start = (Date.now());
      window.setInterval(counter, 1);
      }
    })
    function counter(){
      if (timePlease<1){
        total = ((Date.now() - start)/1000);
        console.log(total);
        $("#total-time").text(total+' seconds');
      }
    }
  })



// console.log("Sanity Check: JS is working!");
// var start
// var stop
// var total
// $(document).ready(function(){
//   $(window).on('keypress', function(event){
//     console.log("key pressed")
//       if (start){
//         stop = (Date.now());
//         total = ((stop - start)/1000);
//         console.log(total);
//         $("#total-time").text(total+' seconds');
//       } else {
//       start = (Date.now());
//       }
//     })
//   })
