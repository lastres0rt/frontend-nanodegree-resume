var contactMe = {
	mobile : "650-549-5729",
	email : "rach@lid.cc",
	github : "https://github.com/lastres0rt",
	twitter : "@lastres0rt",
	location : "Santa Clara, CA"
}


var bio = {
	name : "Rachel Keslensky",
	role : "Front-End Developer",
	contacts : contactMe, // Object goes here
	welcomeMessage : "Developer, Illustrator, Comic Book Maker",
	skills : ["JavaScript", "HTML", "CSS", "UX"], // Array goes here
	biopic : "http://placekitten.com/g/300/300" // URL goes here 
	// display : "" //Function goes Here
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formatMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formatGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var headBox = $("#header");
var contactBox = $("#footerContacts");

headBox.prepend(formattedWelcome);
headBox.prepend(formattedRole);
headBox.prepend(formattedName);
headBox.prepend(formattedBioPic);

contactBox.append(formatMobile);
contactBox.append(formatEmail);
contactBox.append(formatGitHub);
contactBox.append(formatTwitter);
contactBox.append(formatLocation);

headBox.append(HTMLskillsStart);

function formatSkills(element, index, array) {
	var formatSkill = HTMLskills;
	formatSkill = formatSkill.replace("%data%", element);
 	headBox.append(formatSkill);
}

bio.skills.forEach(formatSkills);