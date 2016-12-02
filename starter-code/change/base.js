console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $('.add').change(function(){
    var $left = $('#left').val();
    // console.log($left)
    var $right = $('#right').val();
    // console.log($right)
    var total = Number($left)+Number($right);
    // console.log(total)
    $('#total').val(total);
  })
  $('body').append("<button type=button onClick='window.location.reload()'>Reset</button>")
})
