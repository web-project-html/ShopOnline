var click_rate = 0;


function clicked(a){
	if (click_rate%2 == 0) {
	a.src = "https://cdn.iconscout.com/icon/free/png-256/close-3114451-2598229.png";
	click_rate = click_rate + 1;
}
	else{
	a.src = "https://flyclipart.com/thumb2/menu-three-horizontal-lines-symbol-868496.png";
	click_rate = 0;
	}
}