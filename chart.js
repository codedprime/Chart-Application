myLabel = [];
myData = [];
myColor =[];
var eachData, eachLabel,eachColor;

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
    console.log(eachData);
    parseInt(eachData);
    // parseInt(eachColor);
    myData.push(eachData);
    myLabel.push(eachLabel);
    myColor.push(eachColor);
    // console.log(myData); 
    //console.log(myLabel);    
}

function barChart() {       
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');    
    ctx.clearRect(0,0,canvas.width,canvas.height);   
    ctx.beginPath();   
    var total = 0;
    var max = myData[0]; 
    var x = width* 0.4;
    //myData = [40,30,100,20,60]
    var width  = 100;

    if (myData.length >5) {
        width = (canvas.width/myData.length)
        x = width*0.1;
        width = (canvas.width/myData.length) -x
        }

    var x2 = x;              
    for (var i in myData) {
        if (myData[i] >= max) {
            max =parseFloat(myData[i]);    
          }         
    }

    // Draws the X and Y-axis
    ctx.moveTo(0,0);
    ctx.lineTo(0,480);
    ctx.lineTo(600,480);
    ctx.fillStyle ='black';
    ctx.stroke();

    //console.log(max);                   
            
            
    //set the font size and reduce it to 10px if the data input is greater than 20.
    ctx.font = '16px serif';
    if (myData.length>20) {
        ctx.font = '10px serif';
    }
    if (myData.length>30) {
        ctx.font = '7px serif';
    }


    for (var i=0; i < myData.length; i++) {
    // The code below draws the rectangular bars
        var y = myData[i];
        var y2 = (y/max)*450;
        ctx.fillStyle ='green';               
        ctx.fillRect(x, 480 - y2, width, y2);
        console.log('max is:'+max)
        console.log(y2)
      

         // Adds a label to each sector
        ctx.fillStyle = 'black';
        ctx.fillText(myData[i], x+x2, 480 - y2);
        ctx.fillText(myLabel[i], x+x2, 495);

        x += width + x2;
    }
            
}

function histogram(){
    // This function draws a histogram

    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    var width = 50;
    var x = 50; 
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.font = '16px serif';

    for (var i in myData) {
        // Draws the rectaugular bars
        var y = myData[i];
        ctx.fillStyle = "green";
        ctx.fillRect(x, canvas.height - y, width, y);
        ctx.strokeRect(x, canvas.height - y, width, y);
        ctx.fillStyle = 'black';
        ctx.fillText(myData[i], x+10, canvas.height - y);    
        x += width;
    }
                  
}

function pieChart() {

    var canvas = document.getElementById('myCanvas');
    canvas.border=0;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();          
           
           
    // var colors = ["blue", "red", "yellow", "green", "orange",
    //"brown","purple","violet","grey","black"];
    var total = 0;
    //myData = [40,30,100,20,60]

    for (var i in myData) {
      // Calculayes the total data input
        total +=parseFloat(myData[i]);
      }

    var prevAngle = 0;

    for (var i in myData){
        var fraction = myData[i]/total;
        console.log(myData[i]);
        var angle = prevAngle + fraction*Math.PI*2;
        // console.log(angle);
        ctx.fillStyle = myColor[i];
        ctx.beginPath();
        // ctx.moveTo(200,200);
        ctx.arc(200,200,150,prevAngle,angle,false);
        ctx.lineTo(200,200);
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();

        var midAngle = prevAngle + (angle - prevAngle) / 2;
        var labelRadius = 150 * .75;
        var x = 200 + (labelRadius) * Math.cos(midAngle);
        var y = 200 + (labelRadius) * Math.sin(midAngle);
        ctx.font = '24px serif';
        ctx.fillStyle = 'black';
        ctx.fillText(myLabel[i], x, y);
        ctx.fillText(myData[i]+ '\xB0 ', x+10, y-20);          
        prevAngle = angle;
    }
}  

function lineChart(){        
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    var x = 0;
    ctx.moveTo(0,canvas.height);
    ctx.font = '16px serif';
    for (var i in myData) {
        var y = myData[i];
        x += 50;
        ctx.lineTo(x,canvas.height - y);
        ctx.fillStyle = 'black';
        ctx.fillText(myData[i], x ,canvas.height - y);
        ctx.stroke();
    }
}