
$(document).ready(function display()
{

var image =localStorage.getItem('imageDet');
var reserve =localStorage.getItem('reserveDet');
var name=localStorage.getItem('nameDet');
var address =localStorage.getItem('addressDet');
var city =localStorage.getItem('cityDet');
var state =localStorage.getItem('stateDet');
var postCode =localStorage.getItem('postCodeDet');
var phone =localStorage.getItem('phoneDet');
var lat =localStorage.getItem('latDet');
var lng =localStorage.getItem('lngDet');

console.log(address);

$("#recipeDet").append('<ul class="recipeDet__list" id="recipeDet__list">');

$("#recipeDet__list").append('<li>');
$("#recipeDet__list").append('<figure class="results_fig">');
 $("#recipeDet__list").append('<img src="'+image+'"alt="recipes"/>');
 $("#recipeDet__list").append('</figure>');
 $("#recipeDet__list").append('<div class="results_data">');
 $("#recipeDet__list").append('<a href="'+reserve+'"><h1 class="results_name">'+name+'</h1>');
 $("#recipeDet__list").append('<p class="results_address">'+address+', '+city+' ,'+state+' '+postCode+'<br /><i class="fa fa-phone" style="font-size:18px;color:red" aria-hidden="true"></i>&nbsp'+phone+'</p>');

 $("#recipeDet__list").append('</div>');
 $("#recipeDet__list").append('</a>');
 $("#recipeDet__list").append('</li>');
 $("#recipeDet__list").append('</ul>');

$("#recipeDet").append($("#recipeDet__list"));
// $('#submit_review_btn').click(function()
// {
//   $('#myModal').modal('hide');
// });
//
// });
var i=0;

  $('#submit_review_btn').on("click",function()
  {
     // $("#review_form").trigger("reset");
    i=i+1;
    console.log("MY PRINT");
    var nameDataback=$("#myModal #reviewName").val();
    var starsDataback=$('input[name=rate]:checked', '#review_form').val();
    var feedbackDataback=$("#myModal #reviewComments").val();
    if(nameDataback == "" || starsDataback == "" || feedbackDataback == "")
    {
      $('#submit_review_btn').removeAttr("data-dismiss");
      console.log("Inside IF")

    }
    else
    {
      $('#result').append('<div class="result_list" id="result_list'+i+'"></div>');
      $('#result_list'+i).append('<p>User:'+nameDataback+'</p>');
      $('#result_list'+i).append('<p>Rating:'+starsDataback+'</p>');
      $('#result_list'+i).append('<p>Feedback:'+feedbackDataback+'</p>');
       $("#review_form").trigger("reset");
       $('#submit_review_btn').attr("data-dismiss","modal");
     // $('#buttonCloseID').click();
     // $('#myModal').modal('close');
       // $("#results").html($("#results__list"+i));
       //$("#review_form").trigger( "reset" );
      // $("#review_form").trigger( "close" );
       // $("#review_form").first().trigger("submit");

// $("#review_form").trigger("close");

    }
  //     $("#review_form").trigger( "close" );

    // $('#myModal').modal('close');
});

});
