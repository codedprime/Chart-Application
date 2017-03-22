myLabel = [];
myData = [];
 var eachData;
 


function reload(){

  while((myData.length > 0)||(myLabel.length>0) ){
    myData.pop();
    myLabel.pop();
}
  eachData = 0;
  eachLabel = 0;

   var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d'); ctx.clearRect(0,0,canvas.width,canvas.height);
             ctx.beginPath();
}



function data()
{        
           
            eachData = document.getElementById('data').value;
            eachLabel = document.getElementById('label').value;
            console.log(eachData);
            parseInt(eachData);
            myData.push(eachData);
            myLabel.push(eachLabel);
            console.log(myData); 
            console.log(myLabel);    
}

function barChart(){       
               var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');     

             ctx.clearRect(0,0,canvas.width,canvas.height);
             ctx.beginPath();
             
            
            var width = 50;
            var x = 50;            
            
           
            ctx.font = '16px serif';
            for (var i=0; i < myData.length; i++){
              var y = myData[i];
               ctx.fillStyle ='green';
              ctx.fillRect(x, canvas.height - y, width, y);
              

             
            ctx.fillStyle = 'black';
            ctx.fillText(myData[i], x+10, canvas.height - y);

            x += width + 10;



            }
            
          }
          function histogram(){

            var canvas = document.getElementById('myCanvas');
            var ctx = canvas.getContext('2d');     
        
            
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.beginPath();
            
            
            var width = 50;
            var x = 50;            
            
           
            ctx.strokeStyle = "black";
            ctx.stroke();
            
            ctx.font = '16px serif';
            for (var i in myData){
              var y = myData[i];
              ctx.fillStyle = "green";
              ctx.fillRect(x, canvas.height - y, width, y);
               
              ctx.strokeRect(x, canvas.height - y, width, y);

              ctx.fillStyle = 'black';
            ctx.fillText(myData[i], x+10, canvas.height - y);
              
              x += width;
            }
            
          }

           function pieChart(){

             var canvas = document.getElementById('myCanvas');
             canvas.border=0;
              
            var ctx = canvas.getContext('2d');     
           

            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.beginPath();          
           
           
           var colors = ["blue", "red", "yellow", "green", "orange",
           "brown","purple","violet","grey","black"];
           var total = 0;
           myData = [40,30,100,20,60]
           for (var i in myData){
             total += myData[i];
           }
          var prevAngle = 0;
           for (var i in myData){
             var fraction = myData[i]/total;
             console.log(myData[i]);
             
             var angle = prevAngle + fraction*Math.PI*2;
             console.log(angle);
             ctx.fillStyle = colors[i];
             ctx.beginPath();
             //ctx.moveTo(200,200);
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
            ctx.fillText(myLabel[i] , x, y);
             
           


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
            for (var i in myData){
              var y = myData[i];
              x += 50;
              ctx.lineTo(x,canvas.height - y);

              ctx.fillStyle = 'black';
            ctx.fillText(myData[i], x ,canvas.height - y);
            
              ctx.stroke();
            }
            
            
           
          }