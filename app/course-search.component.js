'use strict';

//make sure module knows what's goin on over here
angular.
	module('coursecatApp').
	component('courseSearch', {
		template:
			'<p>Select a Course:</p>' +
			'<select ng-model="selectedCourse" ng-options="x.name for x in $ctrl.courses">' +
			'</select>' +
			'<h2>You selected: {{selectedCourse.name}}</h2>' +
			"<p>Its number is: {{selectedCourse.number}}</p>" +
			'<p>grades: {{selectedCourse.grades}}</p>' +
			'<p>schoolcreds: {{selectedCourse.schoolcreds }}</p>' +
			'<p>uccreds: {{selectedCourse.uccreds}}</p>' +
			'<p>prereqs: {{selectedCourse.prereqs}}</p>' +
			'<p>interest: {{selectedCourse.interest}}</p>' +
			'<p>linked: {{selectedCourse.linked}}</p>' +
			'<p>Description: {{selectedCourse.description}}</p>',

		controller: function CourseSearchController() {
    	this.courses = [
				{
			    "category": "English",
			    "name": "ENGLISH PREP 1-2 ",
			    "number": "000318 - 000319",
			    "grades": "9th",
			    "prereqs": "None",
			    "interest": "Focus on developing basic writing skills",
			    "uccreds": "N\/A",
			    "schoolcreds": "10",
			    "linked": "English 1-2",
			    "description": "English Prep is a ninth grade course designed to help students to gain skills necessary for success in High School English 1-2. The course will focus on the identification and strengthening of specific reading, writing, listening and speaking skills which will enable students to meet ninth grade standards. Students will be taught a variety of strategies, using both narrative and expository works, to become more effective readers and writers. NOTE: Students receive elective credit only."
			  },
			  {
			    "category": "English",
			    "name": "HIGH SCHOOL ENGLISH 1-2 ",
			    "number": "000301 - 000302",
			    "grades": "9th",
			    "prereqs": "None",
			    "interest": "Traditional 9th grade English course",
			    "uccreds": "B or G",
			    "schoolcreds": "10",
			    "linked": "N\/A",
			    "description": "HS English 1-2 builds on knowledge and skills developed in middle school. Students will continue to develop their thinking-in-writing by practicing a variety of writing modes including description, narration, and literary analysis. Students will learn the basics of the academic essay, developing their understanding of appropriate paragraph structure. Concurrently, they will acquire and use specific skills to read and respond to different genres of literature, including the short story, myths and legends, the novel, and assorted non-fiction. Students will continue to practice descriptive, narrative and analytical writing, while also acquainting themselves with reflective writing and formal academic research. They will develop more sophisticated responses to literature, learning to create and support inferences about characters, moods, themes, etc. They will read literary works of greater complexity and scope, and thereby prepare themselves for more advanced English courses. This course may be used to meet the UC\/CSU \"B\" or \"G\" requirement."
			  },
			  {
			    "category": "English",
			    "name": "HONORS HIGH SCHOOL ENGLISH 1-2 ",
			    "number": "000303 - 000304",
			    "grades": "9th",
			    "prereqs": "None",
			    "interest": "Students who enjoy and are successful in Language Arts.",
			    "uccreds": "B or G",
			    "schoolcreds": "10",
			    "linked": "N\/A",
			    "description": "Students will read novels, short stories, drama, poetry, and an array of short non-fiction texts. They will write argument, narrative, and informative\/explanatory essays. In addition to analyzing literature, they will also apply critical thinking to study art and the media. This course may be used to meet the UC\/CSU \"B\" or \"G\" requirement."
			  },
			  {
			    "category": "English",
			    "name": "HIGH SCHOOL ENGLISH 3-4 ",
			    "number": "000310 - 000311",
			    "grades": "10th",
			    "prereqs": "None",
			    "interest": "Traditional 10th grade English Course",
			    "uccreds": "B or G",
			    "schoolcreds": "10",
			    "linked": "N\/A",
			    "description": "Through a thematic approach to the study of literature and written composition, students in High School English 3-4 will broaden their knowledge of literature and its cultural elements. They will improve their ability to understand their connection to literature, develop writing and thinking skills, master punctuation and grammar skills, and further improve listening and speaking skills. Writing modes addressed will include: reflective, interpretive, and evaluative. Also, a research-based controversial issue essay will be required. This course may be used to meet the UC\/CSU \"B\" or \"G\" requirement."
			  },
			  {
			    "category": "English",
			    "name": "HONORS HUMANITIES 1-2 ",
			    "number": "000313 - 000314",
			    "grades": "10th",
			    "prereqs": "English 1-2 or Honors English 1-2",
			    "interest": "Preparing for more rigorous Language Arts",
			    "uccreds": "B or G",
			    "schoolcreds": "10",
			    "linked": "N\/A",
			    "description": "Honors Humanities is an academically challenging and rigorous study of the arts and literature throughout history. The course studies man\u2019s relationship with society, nature and himself. Students write in a variety of essay modes including: informative\/explanatory, argumentative, narrative, and research. The course involves library research, outside reading, peer cooperation and formal public speaking. Students study Western culture and the arts beginning with the Renaissance continuing to our current era in order to understand how the historical context in which a piece of writing, music, or art is created gives added meaning, as does the political or social milieu. This course may be used to meet the UC\/CSU \"B\" or \"G\" requirement."
			  },
			  {
			    "category": "English",
			    "name": "AMERICAN LITERATURE 1-2 ",
			    "number": "000387 - 000388",
			    "grades": "11th",
			    "prereqs": "English 3-4 or Honors Humanities",
			    "interest": "Traditional 10th grade English Course",
			    "uccreds": "B or G",
			    "schoolcreds": "10",
			    "linked": "N\/A",
			    "description": "American Literature 1-2 includes the study of the historical, cultural, and philosophical significance of famous American works from various literary movements. Examples of authors studied include Emerson, Hawthorn, Douglas, Twain, Fitzgerald, Hughes, Steinbeck, Salinger, Plath, Miller and Angelou. Students read and respond to numerous non-fiction texts as well, including literary criticism, essays, and articles. Student writing includes a narrative piece, the Defend\/Challenge\/Qualify on-demand essay, rhetorical pr\u00e9cis, and continued practice of the literary analysis essay format. Speaking and listening skills are addressed through oral responses to texts and multimedia presentations. Students continue vocabulary development through the SAT vocabulary unit. This course may be used to meet the UC\/CSU \"B\" or \"G\" requirement."
			  },
			  {
			    "category": "English",
			    "name": "HONORS AMERICAN LITERATURE 1-2 ",
			    "number": "000382 - 000383",
			    "grades": "11th",
			    "prereqs": "English 3-4 or Honors Humanities",
			    "interest": "Seek a more rigorous Language Arts experience and is good preparation for AP English",
			    "uccreds": "B or G",
			    "schoolcreds": "10",
			    "linked": "Offered as both a single-term course or linked with AP U.S. History 1-2",
			    "description": "Honors Survey of American Literature 1-2 is taught at a faster pace and in greater depth than the regular American Literature 1-2 course. Honors American Literature includes the study of the historical, cultural, philosophical, and psychological significance of famous works from all American literary movements--Puritanism through Post-Modernism. Examples of authors studied include Edwards, Bradstreet, Henry, Thoreau, Poe, Hawthorn, Twain, Dickinson, Fitzgerald, Hughes, Hurston, Steinbeck, Salinger, Plath, Miller, and Wilder. Students read and respond to numerous non-fiction texts as well, including literary criticism, essays, and articles. Student writing includes a narrative piece, the Defend\/Challenge\/Qualify on-demand essay, short text analysis, rhetorical pr\u00e9cis, poetry explication, and continued practice of the literary analysis essay format. Speaking and listening skills are addressed through oral responses to texts, Socratic Seminar, and multimedia presentations. Students continue vocabulary development through the SAT vocabulary unit. This course may be used to meet the UC\/CSU \"B\" or \"G\" requirement. UC approved for extra honors credit (A=5, B=4, C=3)."
	  		}
			];
		}
});
