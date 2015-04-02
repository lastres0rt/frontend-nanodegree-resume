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
		"JavaScript", "HTML", "CSS", "UX"
	], 
	"biopic" : "http://placekitten.com/g/300/400"
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
	]
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
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Last Res0rt",
			"dates" : "2007-Present",
			"description" : "Cyberpunk graphic novel posted a page a week at a time.",
			"images": [" ", " "]
		}
	]
};

var headBox = $("#header");
var contactBox = [$("#topContacts"), $("#footerContacts")];
var workBox = $("#workExperience");

var formatTop = [
	HTMLheaderRole.replace("%data%", bio.role),
	HTMLheaderName.replace("%data%", bio.name)
]

var formatBottom = [
	HTMLbioPic.replace("%data%", bio.biopic),
	HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
]

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

if(bio.skills.length > 0){
	headBox.append(HTMLskillsStart);
	var skillBox = $("#skills");
	for (skill in bio.skills) {
		var formatSkill = HTMLskills;
		formatSkill = formatSkill.replace("%data%", bio.skills[skill]);
	 	skillBox.append(formatSkill);
	}
}

for(job in work.jobs) {
	workBox.append(HTMLworkStart);
	var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(formatEmployer + formatTitle);
}