var flag=-1;
var count=-1;
var circle=["Slide1.png","Slide2.jpg","Slide3.jpg","Slide6.jpg","Slide9.jpg","Slide10.jpg"];
var rectangle=["Slide1.png","Slide2.jpg","Slide4.jpg","Slide7.jpg","Slide9.jpg","Slide11.jpg"];
var triangle=["Slide1.png","Slide2.jpg","Slide5.jpg","Slide8.jpg","Slide9.jpg","Slide12.jpg"];


function setshape(){
	var str=document.getElementById("fname").value;
	var array = str.split(" ");
	if(array.length>3 || str.trim()==""){
		document.getElementById("instruction").innerHTML="Submit Input Parameters(seperated by space) and Click on Next";
		alert("Invalid Number of Parameters");
	}
	else{
		flag=array.length;
		count=-1;
		document.getElementById("instruction").innerHTML="";
	}
	
}

function init(){
    flag=-1;
	count=-1;
	document.getElementById("instruction").innerHTML="Submit Input Parameters(seperated by space) and Click on Next";
	}
	
function next(){
	if(flag!=-1){
		count=count+1;
		if(count==6){
			count=0;
		}
		var image = document.getElementById('myImage');
		if(flag==1){
			image.src = circle[count];
		}
		if(flag==2){
			image.src = rectangle[count];
		}
		if(flag==3){
			image.src = triangle[count];
		}
	}
}

function prev(){
	if(flag!=-1){
		count=count-1;
		if(count==-1){
			count=5;
		}
		var image = document.getElementById('myImage');
		if(flag==1){
			image.src = circle[count];
		}
		if(flag==2){
			image.src = rectangle[count];
		}
		if(flag==3){
			image.src = triangle[count];
		}
	}
}
