function changeImage() {
	var timetable = document.getElementById("timetable")
	var option1 = document.getElementById("option1");
	var option2 = document.getElementById("option2");
	var labgroup = document.getElementById("labgroup");
	timetable.setAttribute("src","assets/timetable"+option1.value+option2.value+labgroup.value+".png")
}