
var root = document.getElementById("project_layout");
var assets = document.getElementById("assets");
$.getJSON("projects.json",function(data){

  for(var i = 0; i < data.length; i++){
    (function(){var project = data[i];
    var img = document.createElement("img");
    img.src = project.img;
    img.setAttribute("id",i+"")
    assets.append(img);
    var el = document.createElement("a-box");
    el.setAttribute("src",project.img);
    el.setAttribute("scale","1.3 1.3 1.3");
    //
    // var evt = document.createElement("a-animation");
    // evt.setAttribute("attribute","rotation");
    // evt.setAttribute("to","360 360 360");
    // evt.setAttribute("repeat","indefinite");
    // evt.setAttribute("dur","1000");
    // evt.setAttribute("fill","forwards");
    //el.appendChild(evt);

    el.addEventListener("click", function(){location.href = project.href;});
    root.append(el);
  })();
  }

});
