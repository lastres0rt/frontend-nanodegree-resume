var bio = {
	"name" : "Rachel Keslensky",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile" : "650-549-5729",
		"email" : "rach@lid.cc",
		"github" : "https://github.com/lastres0rt",
		"twitter" : "@lastres0rt",
		"location" : "Santa Clara, CA"
	},
	"welcomeMessage" : "Developer, Illustrator, Comic Book Maker",
	"skills" : [
		"JavaScript", "HTML", "CSS", "UX"
	], 
	"biopic" : "http://placekitten.com/g/300/300"
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

var work = {
	"jobs" : [
		{
			"employer" : "Dynamic Marketing Systems",
			"title" : "Usabilty Specialist",
			"location" : "Norcross, GA",
			"dates" : "2011-2014",
			"description" : "Front-End design and development work for Marketing campaigns."
		},
		{
			"employer" : "Last Res0rt Studios",
			"title" : "Freelance Writer / Illustrator",
			"location" : "Santa Clara, CA",
			"dates" : "2007-Present",
			"description" : "Comic Book Illustration and Publishing"
		}
	]
};

var education = {
	"schools" : [
		{
			"name" : "Georgia Institute of Technology",
			"location" : "Atlanta, GA",
			"degree" : "Bachelor of Science",
			"majors" : "Computer Science",
			"dates" : 2008,
			"url" : "http://www.gatech.edu/"
		},
		{
			"name" : "Georgia Institute of Technology",
			"location" : "Atlanta, GA",
			"degree" : "Master of Science",
			"majors" : "Human-Computer Interaction",
			"dates" : 2012,
			"url" : "http://www.gatech.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/nanodegree"
		}
	]
}; 