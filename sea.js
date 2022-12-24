object=[]
function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectdetector=ml5.objectDetector("cocossd", modelloaded)
    document.getElementById("status").innerHTML="status: detecting objects"
}
img=""
status=""
function modelloaded(){
    console.log("modelloaded")
    status=true
objectdetector.detect(img, gotresult)
}

function gotresult(error, results){
    if(error){
        console.log(error)
    }
    console.log(results)
    object=results
}
function preload(){
    img=loadImage("sea.jpg")
}
function draw(){
    image(img, 0, 0, 640, 420)
    if(status!=""){
        for(i=0;i<object.length;i++){
            fill("red")
            document.getElementById("status").innerHTML="status:objectdetected"
            percent=floor(object[i].confidence*100)
            text(object[i].label+" "+percent, object[i].x+15, object[i].y+15)
            noFill()
            stroke("red")
            rect(object[i].x, object[i].y, object[i].width, object[i].height)
        }

    }
}
