let galleryImage = document.querySelector("#imgDiv");
let dataDiv = document.querySelector("#dataDiv");
let nextBtn = document.querySelector("#next");
let previousBtn = document.querySelector("#previous");
//backgroundImg
	const arr = [];
	arr[0] ="group1.jpg";
	arr[1] = "group2.jpg";
	let myImage = document.getElementsByTagName("body")[0];
	myImage.style.backgroundImage = 'url(' + arr[0] + ')';
	let i = 0;
	let imgChange = () =>{
	//myImage.style.backgroundImage = 'url(' + arr[0] + ')';
	if(i === arr.length){
			i = 0;
	}
	myImage.style.backgroundImage = 'url(' + arr[i] + ')';
		i++;
	};
	window.onload = setInterval(imgChange,5000);

nextBtn.addEventListener("click" , ()=>{x++;

	if(x === data.length){
		x=0;
	}
	nextPic()
});
previousBtn.addEventListener("click" , ()=>{
	if (x >0) {
		x--;
		nextPic();
	  }
	else if(x===0){
		x=data.length-1
		nextPic()
	}
	else {
		nextPic()
	}
});

let imgLocation = 'images/';
let x= 0;
//data.forEach(photo => {
let img = document.createElement("img");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");
let p6 = document.createElement("p");
let p7 = document.createElement("p");
let p8 = document.createElement("p");
const nextPic = () =>{
	let fullName = data[x].firstName +" "+ data[x].lastName;
	let title = data[x].title;
	let nationality = data[x].nationality;
	let alt = data[x].alt;
	let skills = data[x].skills;
	let whySofterDeveloper = data[x].whySofterDeveloper;
	let longTermVision = data[x].longTermVision;
	let motivatesMe = data[x].motivatesMe;
	let favoriteQuote = data[x].favoriteQuote;
	let joinedOn = data[x].joinedOn;


	img.src = imgLocation+data[x].src;

	h1.textContent = fullName;

	p.textContent = title;

	p1.textContent = nationality;

	p2.textContent = alt;

	p3.textContent = skills;

	p4.textContent = whySofterDeveloper;

	p5.textContent = longTermVision;

	p6.textContent = motivatesMe;

	p7.textContent = favoriteQuote;

	p8.textContent = joinedOn;


	galleryImage.appendChild(img);
	dataDiv.appendChild(h1);
	dataDiv.appendChild(p);
	dataDiv.appendChild(p1);
	dataDiv.appendChild(p2);
	dataDiv.appendChild(p3);
	dataDiv.appendChild(p4);
	dataDiv.appendChild(p5);
	dataDiv.appendChild(p6);
	dataDiv.appendChild(p7);
	dataDiv.appendChild(p8);

};
nextPic();

	//
	// const images = [];
	// images[0].src = ".group1.jpg";
	// images[1].src = "group2.img";
	// const backgroundImg = () =>{
	// 	setInterval(()=>{
	// 		for(let i = 0; i<images.length;i++){
	// 			document.getElementsByTagName("body").style.backgroundImage = 'url("' + images[i] +'")';
	// 		}
	// 	},3000);
	// 	window.onload = backgroundImg;
	// }
