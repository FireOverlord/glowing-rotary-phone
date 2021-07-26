
var status="";
objs=[];
function preload(){
 

}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video.createCapture(VIDEO,modelLoaded);
    video.hide
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("STATUS").innerHTML="";
}
function modelLoaded(){
    window.alert("Coco SSD has loaded");
    status=true;
document.getElementById("STATUS").innerHTML="SCANNING PICTURE";
objectDetector.detect(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(":( Failed to load answer");
    }else{
        console.log(results);
objs=results;
    }
}
function draw(){
    image(img,0,0,500,500);
    if(status!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResult);
        for(c=0;c<objs.length;c++){    
            document.getElementById("STATUS").innerHTML="SCANNED:UPLOADING RESULTS";
            document.getElementById("obj123").innerHTML="         LENGTH OF OBJECTS ARE"+objs.length;
            fill(r,g,b);
            percent=floor(objs[r].confidence*100);  
            text(objs[c].label+" "+percent+ "%",objs[c].x+15,objs[c].y+15);
            noFill();
            stroke(r,g,b);
            rect(objs[c].x/500,objs[r].y/500,objs[c].width,objs[c].height);
        }
    }   
}
