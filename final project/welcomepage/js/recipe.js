try{
  function search()
  {

    var searchValue=$("#searchKey").val();
    if(searchValue == null || searchValue == "")
    {
      console.log(searchValue);
      // e.preventDefault();
      alert("Please enter a valid city name");
    }
    else {

    var SearchKeyword=$("#searchKey").val();
    var url="http://opentable.herokuapp.com/api/restaurants?";
    var data="city="+SearchKeyword;



      $.get(url,data).done(function(response)
    {
      $("button").click(function(){
      $("#results").empty();
      });

      for(var i=0;i<response.restaurants.length;i++){
      // $("#photos").append('<div class="imgdiv"></div>');
       console.log(i);

      $("#results").append('<ul class="results__list" id="results__list'+i+'">');
      // $("#results__list"+i).append('<a href="'+response.restaurants[i].reserve_url+'">');
      $("#results__list"+i).append('<li>');
      $("#results__list"+i).append('<figure class="results_fig">');
       $("#results__list"+i).append('<img src="'+response.restaurants[i].image_url+'"alt="recipes"/>');
       $("#results__list"+i).append('</figure>');
       $("#results__list"+i).append('<div class="results_data">');
       $("#results__list"+i).append('<a href="'+response.restaurants[i].reserve_url+'"><h4 class="results_name">'+response.restaurants[i].name+'</h4></a>');
       $("#results__list"+i).append('<p class="results_address">'+response.restaurants[i].address+'</p>');
        $("#results__list"+i).append('<p class="results_city">'+response.restaurants[i].city+'</p>');
         $("#results__list"+i).append('<p class="results_state">'+response.restaurants[i].state+'</p>');
          $("#results__list"+i).append('<p class="results_postalcode">'+response.restaurants[i].postal_code+'</p>');
           $("#results__list"+i).append('<p class="results_state">'+response.restaurants[i].phone+'</p>');
           $("#results__list"+i).append('<p class="results_lat">'+response.restaurants[i].lat+'</p>');
           $("#results__list"+i).append('<p class="results_lng">'+response.restaurants[i].lng+'</p>');

            $("#results__list"+i).append('<button onclick="OnButtonDown(this)" type="button"id="'+i+'"class="searchi-btnn"name="searchDet"value="View Details">View Details</button>');
          $("#results__list"+i).append('</div>');
        $("#results__list"+i).append('</a>');
        $("#results__list"+i).append('</li>');
        $("#results__list"+i).append('</ul>');

      $("#results").append($("#results__list"));



      }


    });
     }
  }
}
catch(e)
{
  alert("API is not working");
}
function OnButtonDown(button)
{
  var SearchKeyword=$("#searchKey").val();
  var url="http://opentable.herokuapp.com/api/restaurants?";
  var data="city="+SearchKeyword;
    $.get(url,data).done(function(response)
  {

  var log=button.id;
  // console.log(response.restaurants[log].address);
  localStorage.setItem('imageDet',response.restaurants[log].image_url);
  localStorage.setItem('reserveDet',response.restaurants[log].reserve_url);
  localStorage.setItem('nameDet',response.restaurants[log].name);
  localStorage.setItem('addressDet',response.restaurants[log].address);
  localStorage.setItem('cityDet',response.restaurants[log].city);
  localStorage.setItem('stateDet',response.restaurants[log].state);
  localStorage.setItem('postCodeDet',response.restaurants[log].postal_code);
  localStorage.setItem('phoneDet',response.restaurants[log].phone);
  localStorage.setItem('latDet',response.restaurants[log].lat);
  localStorage.setItem('lngDet',response.restaurants[log].lng);

// var addr=localStorage.getItem('phoneDet');
// console.log(addr);
  window.location.assign("../searchPage/index.html")

});

}
$(document).ready(function()
{
$("#search").on("click",search);
});
