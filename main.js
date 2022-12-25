window.addEventListener("load", function() {

  let thumbnail = document.querySelectorAll("ytd-thumbnail");
  thumbnail.forEach(function(photo){
    photo.remove()
  })
});
setInterval(function(){
    const recommendations = document.getElementById("secondary")
    recommendations.remove()
},100);
