var bio = {
	"name" : "Rachel Keslensky",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile" : "650-549-5729",
		"email" : "rach@lid.cc",
		"github" : "lastres0rt",
		"twitter" : "@lastres0rt",
		"location" : "Santa Clara, CA"
	},
	"welcomeMessage" : "Developer, Illustrator, Comic Book Maker",
	"skills" : [
		"JavaScript", "HTML", "CSS", "UX", "Comic Book Illustration", "Mockups"
	], 
	"biopic" : "http://placekitten.com/g/300/400",
	"display" : function() {
		var formatTop = [
			HTMLheaderRole.replace("%data%", bio.role),
			HTMLheaderName.replace("%data%", bio.name)
		];
		var formatBottom = [
			HTMLbioPic.replace("%data%", bio.biopic),
			HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
		];
		var formatContacts = [
			HTMLmobile.replace("%data%", bio.contacts.mobile),
			HTMLemail.replace("%data%", bio.contacts.email),
			HTMLgithub.replace("%data%", bio.contacts.github),
			HTMLtwitter.replace("%data%", bio.contacts.twitter),
			HTMLlocation.replace("%data%", bio.contacts.location),
		];
		for(detail in formatTop) {
			headBox.prepend(formatTop[detail]);
		}
		for(contacts in contactBox) {
			for (detail in formatContacts) {
				contactBox[contacts].append(formatContacts[detail]);
			}
		}
		for(detail in formatBottom) {
			headBox.append(formatBottom[detail]);
		}
		headBox.append(HTMLskillsStart);
		var skillBox = $("#skills");
		for (skill in bio.skills) {
			var formatSkill = HTMLskills;
			formatSkill = formatSkill.replace("%data%", bio.skills[skill]);
			skillBox.append(formatSkill);
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer" : "Last Res0rt Studios",
			"title" : "Freelance Writer / Illustrator",
			"location" : "Santa Clara, CA",
			"dates" : "2007-Present",
			"description" : "Comic Book Illustration and Publishing"
		},
		{
			"employer" : "Dynamic Marketing Systems",
			"title" : "Usabilty Specialist",
			"location" : "Norcross, GA",
			"dates" : "2011-2014",
			"description" : "Front-End design and development work for Marketing campaigns."
		}
	],
	"display" : function() {
		for(job in work.jobs) {
			workBox.append(HTMLworkStart);
			var thisWork = $(".work-entry:last");
			var thisJob = work.jobs[job];
			var formatEmployer = HTMLworkEmployer.replace("%data%", thisJob.employer);
			var formatTitle = HTMLworkTitle.replace("%data%", thisJob.title);
			thisWork.append(formatEmployer + formatTitle);
			var workDetails = [
				HTMLworkDates.replace("%data%", thisJob.dates),
				HTMLworkLocation.replace("%data%", thisJob.location),
				HTMLworkDescription.replace("%data%", thisJob.description)
			];
			for(detail in workDetails) {
				thisWork.append(workDetails[detail]);
			}
		}
	}
};

var education = {
	"schools" : [
		{
			"name" : "Georgia Institute of Technology",
			"location" : "Atlanta, GA",
			"degree" : "Master of Science",
			"majors" : ["Human-Computer Interaction"],
			"dates" : 2012,
			"url" : "http://www.gatech.edu/"
		},
		{
			"name" : "Georgia Institute of Technology",
			"location" : "Atlanta, GA",
			"degree" : "Bachelor of Science",
			"majors" : ["Computer Science"],
			"dates" : 2008,
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
	],
	"display" : function() {
		for(school in education.schools) {
			eduBox.append(HTMLschoolStart);
			var thisSchoolBox = $(".education-entry:last");
			var thisSchool = education.schools[school];
			var schoolDetails = [
				HTMLschoolName.replace("%data%", thisSchool.name) + HTMLschoolDegree.replace("%data%", thisSchool.degree),
				HTMLschoolDates.replace("%data%", thisSchool.dates),
				HTMLschoolLocation.replace("%data%", thisSchool.location),
				HTMLschoolMajor.replace("%data%", thisSchool.majors)
			];
			for(detail in schoolDetails) {
				thisSchoolBox.append(schoolDetails[detail]);
			}
		};
		if (education.onlineCourses.length > 0){
			eduBox.append(HTMLonlineClasses);
		};
		for(course in education.onlineCourses) {
			eduBox.append(HTMLschoolStart);
			var thisSchoolBox = $(".education-entry:last");
			var thisCourse = education.onlineCourses[course];
			var courseDetails = [
				HTMLonlineTitle.replace("%data%", thisCourse.title) + HTMLonlineSchool.replace("%data%", thisCourse.school),
				HTMLonlineDates.replace("%data%", thisCourse.date),
				HTMLonlineURL.replace("%data%", thisCourse.url)
			];
			for(detail in courseDetails) {
				thisSchoolBox.append(courseDetails[detail]);
			}
		}
	}
};

var projects = {
	"projects" : [
		{
			"title" : "Last Res0rt",
			"dates" : "2007-Present",
			"description" : "Cyberpunk graphic novel posted a page a week at a time.",
			"images": ["http://placekitten.com/g/500/250", "http://placekitten.com/g/300/250"]
		},
		{
			"title" : "Boom Boom Kyuun",
			"dates" : "April 2014",
			"description" : "Unpublished iOS game. Keep your fire-breathing goat friend alive in the minefields!",
			"images": ["http://placekitten.com/g/250/250", "http://placekitten.com/g/550/250"]
		},
		{
			"title" : "Astrowolf Fur Pebble",
			"dates" : "January 2015",
			"description" : "Watchface app for the Pebble Smartwatch.",
			"images": ["http://placekitten.com/g/350/250", "http://placekitten.com/g/450/250"]
		}
	],
	"display" : function() {
		for(proj in projects.projects) {
			projBox.append(HTMLprojectStart);
			var thisProjBox = $(".project-entry:last");
			var thisProj = projects.projects[proj];
			var projDetails = [
				HTMLprojectTitle.replace("%data%", thisProj.title),
				HTMLprojectDates.replace("%data%", thisProj.dates),
				HTMLprojectDescription.replace("%data%", thisProj.description)
			];
			for(detail in projDetails) {
				thisProjBox.append(projDetails[detail]);
			}
			for(image in thisProj.images){
				thisProjBox.append(HTMLprojectImage.replace("%data%", thisProj.images[image]));
			}
		}
	}
};

var headBox = $("#header");
var contactBox = [$("#topContacts"), $("#footerContacts")];
var workBox = $("#workExperience");
var projBox = $("#projects");
var eduBox = $("#education");

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

function inName(name) {
	name = name.trim().split(' ');
	console.log(name);
    name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase(); // Capitalize the first
    name[1] = name[1].toUpperCase();
    
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
// EOF