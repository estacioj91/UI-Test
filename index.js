//toggles menu items from highlighted to not highlighted
function menuClick(event) {
	var menuItems = document.getElementsByClassName("menu-item");
	//shade all items
	for (let i = 0; i < menuItems.length; i++) {
		//hides menu icon
		menuItems[i].childNodes[1].classList.remove("on");
		menuItems[i].childNodes[1].classList.add("off");
		//shades menu items
		menuItems[i].classList.remove("highlighted");
		menuItems[i].classList.add("shaded");
	}
	//highlights menu item clicked
	var elementClicked = event.target.parentElement;
	elementClicked.childNodes[1].classList.add("on");
	elementClicked.classList.remove("shaded");
	elementClicked.classList.add("highlighted");
}
function timer() {
	var sec = 59;
	var time = "00:";

	var timer = setInterval(function() {
		if (sec < 10) {
			console.log(time);
			time = "00:0";
		}
		document.getElementById("time").innerHTML = time + sec;
		sec--;
		if (sec < 0) {
			clearInterval(timer);
		}
	}, 1000);
}
timer();
