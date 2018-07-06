$('#enter').on('click', function() {
var apiKey = INSERT YOUR KEY HERE
var city = $("#city").val();
var country = $("#country").val();
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&APPID="+apiKey+"&units=imperial";

$('form').on("submit",function(e){
  e.preventDefault()
  $.ajax({
    url: apiUrl,
    success: function(response){
    $('h1').html("The current weather in " +city+ ', ' + country + " is " + response.main.temp);
    console.log(response)// server response
  },
    error: function(response){
      console.log(response)
    }
  })
})

var apiURL2 = "https://chroniclingamerica.loc.gov/suggest/titles/?q=" + city;
$.ajax({
  url: apiURL2 ,
  success: function(response){
    console.log(response)
    response[1].forEach(function(el){
      $('ul').append("<li> " + el + ' <a href="'+response[3][0]+'"> '+response[3][0]+' </a> </li>' )
    })
  },
  error: function(err){
    console.log(err)
  }
})
})
