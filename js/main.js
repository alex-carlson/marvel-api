var character = "spider";
var pubKey = "0fb645fe32ae0b61e9750c0543e3f614";
var privateKey = "313cab61af3042cb4beb65362745de60711a169d";

$(document).ready(function(){
  var ts = Math.round((new Date()).getTime() / 1000);
  var hash = md5(ts+privateKey+pubKey);

  return $.ajax({
      url: "http://gateway.marvel.com:80/v1/public/characters?nameStartsWith="+character+"&apikey="+pubKey+"&hash="+hash+"&ts="+ts,
    })
    .done(function(data){
      var d = data.data.results;

      $('#data').empty();

      for(i = 0; i < d.length; i++){
        $('#data').append("<div class='card clearfix'><img src='"+d[i].thumbnail.path+"/portrait_xlarge.jpg"+"'><h2><a href='" + d[i].resourceURI+"?apikey="+pubKey + "'>" + d[i].name + "</a></h2><p>"+ d[i].description + "</p></div>");
      }
    });
});

function getData(){

  var ts = Math.round((new Date()).getTime() / 1000);
  var hash = md5(ts+privateKey+pubKey);
  var character = $('#char').val();

  return $.ajax({
      url: "http://gateway.marvel.com:80/v1/public/characters?nameStartsWith="+character+"&apikey="+pubKey+"&hash="+hash+"&ts="+ts,
    })
    .done(function(data){
      var d = data.data.results;

      $('#data').empty();

      for(i = 0; i < d.length; i++){
        $('#data').append("<div class='card clearfix'><img src='"+d[i].thumbnail.path+"/portrait_xlarge.jpg"+"'><h2><a href='" + d[i].resourceURI+"?apikey="+pubKey + "'>" + d[i].name + "</a></h2><p>"+ d[i].description + "</p></div>");
      }
    });
}
