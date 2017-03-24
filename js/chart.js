myLabel = [];
myData = [];
myColor =[];



function reload() {
    while((myData.length > 0)||(myLabel.length>0)||(myColor.length>0) ){
        myData.pop();
        myLabel.pop();
        myColor.pop();
    }
    eachData = 0;
    eachLabel = 0;

   var canvas = document.getElementById('myCanvas');
   var ctx = canvas.getContext('2d'); ctx.clearRect(0,0,canvas.width,canvas.height);
   ctx.beginPath();
}



function data() {   
    eachData = document.getElementById('data').value;
    eachLabel = document.getElementById('label').value;
    eachColor = document.getElementById('color').value;

    parseInt(eachData);

    if (eachData < 0) {
        document.getElementById('show').innerHTML = "Invalid Value!!!";
        reload();
    }else if(eachData>0){
      document.getElementById('show').innerHTML = eachData +" Added for analysis";
    }
    
    myData.push(eachData);
    myLabel.push(eachLabel);
    myColor.push(eachColor);
 
}


function barChart() {       
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');     
    var total = 0;
    var min = myData[0];
    var max = myData[0]; 
    var width  = 100;
    var x = width* 0.4;
    var x2;
    

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath(); 
    ctx.fillStyle = 'white'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);        
    

    if (myData.length >5) {
        width = (canvas.width/myData.length)
        x = width*0.1;
        width = (canvas.width/myData.length) -x;
    }     

    for (var i in myData) {
        if (myData[i] >= max) {
            max =parseFloat(myData[i]);
        }
    }

    ctx.moveTo(7,0);
    ctx.lineTo(7,480);
    ctx.lineTo(600,480);
    ctx.fillStyle ='black';
    ctx.stroke();
    ctx.font = '14px serif';

    if (myData.length>20) {
        ctx.font = '10px serif';
    }

    if (myData.length>30) {
        ctx.font = '7px serif';
    }
    x2 = x; 

    for (var i=0; i < myData.length; i++) {
        var y = myData[i];
        var y2 = (y/max)*450;
        ctx.fillStyle =myColor[i];               
        ctx.fillRect(x, 480 - y2, width, y2);        
        ctx.fillStyle = 'black';
        ctx.fillText(myData[i], x+x2, 480 - y2);
        ctx.fillText(myLabel[i], x+x2, 495);
        x += width + x2;
    }
}


function histogram() {       
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');     
    var total = 0;
    var min = myData[0];
    var max = myData[0]; 
    var width  = 100;
    var x = width* 0.4;
    var x2;    

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);        


    if (myData.length >5) {
        width = (canvas.width/myData.length)
        x = width*0.1;
        width = (canvas.width/myData.length) -x;
    }     

    for (var i in myData) {
        if (myData[i] >= max) {
            max =parseFloat(myData[i]);
        }
    }

    ctx.moveTo(7,0);
    ctx.lineTo(7,480);
    ctx.lineTo(600,480);
    ctx.fillStyle ='black';
    ctx.stroke();
    ctx.font = '14px serif';

    if (myData.length>20) {
        ctx.font = '10px serif';
    }

    if (myData.length>30) {
        ctx.font = '7px serif';
    }
    x2 = x; 

    for (var i=0; i < myData.length; i++) {
        var y = myData[i];
        var y2 = (y/max)*450;
        ctx.fillStyle =myColor[i];               
        ctx.fillRect(x, 480 - y2, width, y2);
        ctx.strokeRect(x, 480 - y2, width, y2);      
        ctx.fillStyle = 'black';
        ctx.fillText(myData[i], x+x2, 480 - y2);
        ctx.fillText(myLabel[i], x+x2, 495);
        x += width;
    }
}


function pieChart(){
    var canvas = document.getElementById('myCanvas');    
    var ctx = canvas.getContext('2d');
    var total = 0;
    var prevAngle = 0;
    var fraction, angle, midAngle, x, y, labelRadius;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);        

    
    for (var i in myData){
        total +=parseFloat(myData[i]);
    }
    
    for (var i in myData){
        fraction = myData[i]/total;        

        angle = prevAngle + fraction*Math.PI*2;        
        ctx.fillStyle = myColor[i];
        ctx.beginPath();        
        ctx.arc(300,250,250,prevAngle,angle,false);
        ctx.lineTo(300,250);
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
        midAngle = prevAngle + (angle - prevAngle) / 2;
        labelRadius = 150 * .75;
        x = 300 + (labelRadius) * Math.cos(midAngle);
        y = 250 + (labelRadius) * Math.sin(midAngle);
        ctx.font = '16px serif';
        ctx.fillStyle = 'black';
        ctx.fillText(myLabel[i], x, y);
        ctx.fillText(Math.abs(Math.floor(fraction*360))+ '\xB0 ', x+10, y-20);        
        prevAngle = angle;
    }
}  
function lineChart(){        
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');    
    var max = myData[0]
    var y,y2,x2;
    var x = 0;  

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);   
    ctx.font = '16px serif';
    ctx.fillStyle ='black';
    ctx.moveTo(7,0);
    ctx.lineTo(7,480);
    ctx.lineTo(600,480);           
    ctx.moveTo(7,480);

    for (var i in myData) {
        if (myData[i] >= max) {
            var max =parseFloat(myData[i]);
            console.log(max)
        }
    }

    x2 = x;
    for (var i in myData){        
        y = myData[i];
        var y2 = (y/max)*450;        
        x += 50;
        ctx.fillStyle = 'black';
        ctx.lineTo(x,480 - y2);   
        ctx.fillStyle = 'black';
        ctx.fillText(myData[i], x ,480 - y2);
        ctx.fillText(myLabel[i], x+x2, 495);
        ctx.stroke();
    }
}