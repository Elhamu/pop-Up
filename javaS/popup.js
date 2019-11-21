var img = document.getElementsByClassName("img-fluid");
var lightbox= document.querySelector(".lightbox");
var lightboxContainer=document.querySelector(".lightboxContainer");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");
var imgArray=[];
var currentIndex = 0;
for(var i = 0; i<img.length;i++){
	imgArray.push(img[i]);
	img[i].addEventListener("click",function(e){
var imgSrc = e.target.src;
lightbox.classList.add("show");
lightboxContainer.style.backgroundImage = "url("+imgSrc+")";

 currentIndex = imgArray.indexOf(e.target)
	})
}
next.addEventListener("click",function(){
	nextMove();

})
function nextMove(){
 		currentIndex ++;
 	if(currentIndex == imgArray.length){
 	currentIndex = 0;

 }

 	lightboxContainer.style.backgroundImage= "url("+imgArray[currentIndex].src+")"
}
prev.addEventListener("click",function(){
	prevMove();

})
function prevMove(){
 		currentIndex --;
 	if(currentIndex <0){
 	currentIndex = imgArray.length -1;

 }

 	lightboxContainer.style.backgroundImage= "url("+imgArray[currentIndex].src+")"
}
close.addEventListener("click",function(){
	lightbox.classList.remove("show")
})
lightbox.addEventListener("click",function(e){
	if(lightbox == e.target){
		lightbox.classList.remove("show")
	}
})

document.addEventListener("keydown",function(e){
	if(e.keyCode == 27){
		lightbox.classList.remove("show");
	}
	else if(e.keyCode == 39){
		nextMove();
	}
	else if(e.keyCode == 37){
		prevMove();
	}
})