Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
};

console.log("ml5 Version: ",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GAFFZ8Lnn/json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');    
    }
    
    function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);    
    }
    
    function gotResult(error, results) {
    if(error) {
    console.error(error);    
    }else{
    console.log(reults);
    document.getElementById("result_of_name").innerHTML=results[0].label;
    document.getElementById("result_of_accuracy").innerHTML=results[0].confidence.toFixed(3);    
    }    
    }