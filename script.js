setInterval(setClock, 1000);

const hourHand=document.querySelector('.hand');

const minuteHand=document.querySelector('.minute');
const secondHand=document.querySelector('.second');
const secondMinorHand=document.querySelector('.second-minor')
function setClock(){
		const currentTime= new Date();
		const secondRatio=currentTime.getSeconds()/60;
		const minuteRatio=currentTime.getMinutes()/60 + currentTime.getSeconds()/3600;
		const hourRatio=currentTime.getHours()/12 + currentTime.getMinutes()/720;
		
		
		
		
		setRotation(hourHand,hourRatio*360);
		setRotation(minuteHand,minuteRatio*360);
		setRotation(secondHand,secondRatio*360);
		setRotation(secondMinorHand,secondRatio*360+180);
		
};

function setRotation(element,rotationRatio){
				element.style.setProperty('--rotation', rotationRatio);
}

setClock();
