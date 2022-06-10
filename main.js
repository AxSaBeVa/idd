//objectDetector = "";
img = "";
status = "";
objects = [];



    /*fill(255, 0, 0); 
    text("99% Perro 1% alien", 45, 75); 
    noFill(); stroke(255, 0, 0); 
    rect(30, 60, 450, 350 );
    

    fill("#FF000");
   
    fill(255, 0, 0); 
    text("99% Gato 1% alien", 320, 120); 
    noFill(); stroke(255, 0, 0); 
    rect(300, 90, 270, 320 );
    
}*/

function preload(){
     img = loadImage('dog_cat.jpg');
     } 
     function setup() {
          canvas = createCanvas(380, 380); 
          canvas.center();
          video = createCapture(VIDEO);
          video.hide();
          objectDetector = ml5.objectDetector('cocossd', modelLoaded);
          document.getElementById("status").innerHTML = "Estatus:detectando objetos";

         }
     function modelLoaded(){
         console.log("Modelo cargado");
         status = true;
         //objectDetector.detect(video, gotResults);
     }

     function gotResults(error, results){
          if(error){ console.log(error); 
        } console.log(results); 
    } 



    function draw() { 
        image(video, 0, 0, 380, 380); 
        if(status != ""){ 
            r = random(255);
            g = random(255);
            b = random(255);
            objectDetector.detect(video, gotResults);
            for(var i=0; i<objects.length;i++){ document.getElementById("status").innerHTML = "Estatus: objeto detectado"; 
            document.getElementById("number_of_objects").innerHTML = "Numero de objetos detectados"+objects.length;
            fill(r, g, b); percent = floor(objects[i].confidence * 100); text(objects[i].label + " "+ percent + "%", objects[i].x+15, objects[i].y+15); 
            noFill(); 
            stroke(r, g, b); 
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
          } 
        }
    }