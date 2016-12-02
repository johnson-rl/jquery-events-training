console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){

  $("#time").text( Date.now() );
  $('form').on("submit",function (event){
    event.preventDefault();
    $('body').append(rick_roll_youtube_embed_code);
  })
})


// **Stop the forms from submitting.**
//
// <img width="450" alt="submit" src="https://cloud.githubusercontent.com/assets/3254910/17784969/a63343c6-6533-11e6-977e-b3ac4779fe2c.png">
//
//
// + That's weird. Why does one button reload the same page and the other redirect to youtube?
//
// + Hmm... What is the "?" doing in the URL? How did it get there? Try removing it.
//
// Stretch: Instead of just stopping the forms, make it so that clicking the submit buttons adds an embedded youtube video to the page.
//
//
// <hr>
