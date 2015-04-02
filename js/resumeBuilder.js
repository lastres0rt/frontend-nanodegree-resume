/* var contactMe = {
	mobile : ""
	email : ""
	github : ""
	twitter : ""
	location : ""
}
*/ 

var bio = {
	name : "Rachel Keslensky",
	role : "Front-End Developer",
	// contacts : contactMe // Object goes here
	welcomeMessage : "Developer, Illustrator, Comic Book Maker",
	skills : ["JavaScript", "HTML", "CSS", "UX"], // Array goes here
	biopic : "http://placekitten.com/g/300/300" // URL goes here 
	// display : "" //Function goes Here
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").append(formattedWelcome);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);