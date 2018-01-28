// Code One - when HTML has each city's name stated in the select list

// $(document).ready(function () {
// console.log('jquery is loaded');

// // when you select the city and click on it, it will lead to the below function
// $('#city-type').click(changeBackground);

// function changeBackground(event) {
// 	// Prevent default refreshing of page upon click of button.
// 	event.preventDefault();
// 	var cityName = $('#city-type').val();
// 	// when you select the city and click on it, the background image changes to the corresponding city
// 	if (cityName === "NYC") {
// 	$('body').css('background', 'url(images/nyc.jpg) no-repeat');
// 	} else if (cityName === "SF") {
// 	$('body').css('background', 'url(images/sf.jpg) no-repeat');
// 	} else if (cityName === "LA") {
// 	$('body').css('background', 'url(images/la.jpg) no-repeat');
// 	} else if (cityName === "ATX") {
// 	$('body').css('background', 'url(images/austin.jpg) no-repeat');
// 	} else if (cityName === "SYD") {
// 	$('body').css('background', 'url(images/sydney.jpg) no-repeat');
// 	};
// 	$('body').css({'background-size': '1070px 470px', 'background-position-x': '50%'});
// }
// });



// Code Two - add each city's name to HTML by jquery

$(document).ready(function () {
console.log('jquery is loaded');

var counter = 0;
// trigger function when drop down menu is clicked
$('#city-type').click(function (event) {
	event.preventDefault();
	// create an array which houses the names of the cities
	var arrayOfNames = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];
	// use for loop to iterate through the array of city names individually 
	for (var i = 0; i < arrayOfNames.length; i++) {
	// attach the html tag <option> to each city name so that they will show in the dropdown list
	var currentName = '<option>' + arrayOfNames[i] + '</option>';
	// use if statement to limit the number of times the city names can be appended to the html 
	if (counter <= 4) {
		$(currentName).appendTo('select');
		counter++;
		}
   	}

   	// obtain the value of the city name selected
	var getSelectValue = $('#city-type').val();
	// use if else statement to show the corresponding image when a city name is selected
	if (getSelectValue === 'NYC') {
	$('body').css('background', 'url(images/nyc.jpg) no-repeat');
	} else if (getSelectValue === 'SF') {
	$('body').css('background', 'url(images/sf.jpg) no-repeat');
	} else if (getSelectValue === 'LA') {
	$('body').css('background', 'url(images/la.jpg) no-repeat');
	} else if (getSelectValue === 'ATX') {
	$('body').css('background', 'url(images/austin.jpg) no-repeat');
	} else if (getSelectValue === 'SYD') {
	$('body').css('background', 'url(images/sydney.jpg) no-repeat');
	}

	// make the background image stretch to fill the entire screen and in the right position
	$('body').css({'background-size': '1280px 590px', 'background-position-x': '50%'});
});
});
