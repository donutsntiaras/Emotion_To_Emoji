Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DpinfwOUo/model.json',modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

function check() {
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
 
function gotResult(error, results) {
    if(error){
        console.log(error);
    }else{
       console.log(results);
       document.getElementById("result_emotion_name").innerHTML=results[0].label;
       document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    

    if(results[0].label == "Happy"){
       document.getElementById("update_emoji").innerHTML="&#128552";
    }

    if(results[0].label == "Sad"){
        document.getElementById("update_emoji").innerHTML="&#128532";
    }

    if(results[0].label == "Angry"){
        document.getElementById("update_emoji").innerHTML="&#128548";
    }


    if(results[1].label == "Happy"){
        document.getElementById("update_emoji2").innerHTML="&#128552";
     }
 
     if(results[1].label == "Sad"){
         document.getElementById("update_emoji2").innerHTML="&#128532";
     }
 
     if(results[1].label == "Angry"){
         document.getElementById("update_emoji2").innerHTML="&#128548";
     }
    }
}