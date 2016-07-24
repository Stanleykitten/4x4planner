#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      Brendan
#
# Created:     16/07/2016
# Copyright:   (c) Brendan 2016
# Licence:     <your licence>
#-------------------------------------------------------------------------------

import re
import copy
import json

class Course():

    def __init__(self,name):

        self.category = ""
        self.name = name #.trim()
        self.number = ""
        self.grades = ""
        self.schoolcreds = ""
        self.uccreds = ""
        self.prereqs = "None"
        self.interest = "None" #opt
        self.linked = "N/A" #opt
        self.description = ""

def main():
    #open that dank file tho
    file_location = r"C:\Users\Brendan\Documents\GitHub\4x4planner"
    file_name = r"\courses.txt"
    outfile = "courses.js"
    filepath = file_location + file_name
    f = open(filepath)

    # Define regexpressions
    categories = r'^(English|Social Sciences|World Language|Mathematics|Biological Sciences|Physical Sciences)$'
    pCats = re.compile(categories)
    pCourseNameNum = re.compile(r'^(.*)((\d{6}) - (\d{6}))$')
    pCourseGrade = re.compile(r'^(Grades: )(.*)$')
    pCourseCredits = re.compile(r'^(Credits: )(.*)$')
    pCourseUCCreds = re.compile(r'^(UC/CSU: )(.*)$')
    pCoursePrereqs = re.compile(r'^(Recommended Prerequisites: )(.*)$')
    pCourseInterest = re.compile(r'^(Interest: )(.*)$')
    pCourseLinked = re.compile(r'(Linked Course: )(.*)$')
    pCourseTrash = re.compile(r'^[0-9]+$')
    pCourseEverything = re.compile(r'(.*)$')

    # Intial variables
    currentCategory = ''
    course = Course('none')
    courses =[]
    isFirst = True

    #loop through all courses
    for line in f:

        description = True

        m = pCats.match(line)
        if (m != None):
            #get course category
            currentCategory = m.group()
            description = False
            #break or continue


        #get course name
        m = pCourseNameNum.search(line)
        if (m != None):
            # We have a new course
            if isFirst:
                isFirst = False
            else:
                courses.append(copy.copy(course))

            course = Course(m.group(1))
            course.number = m.group(2)
            course.category = currentCategory
            description = False

        m = pCourseGrade.search(line)
        if (m != None):
            course.grades = m.group(2)
            description = False

        m = pCourseCredits.search(line)
        if(m != None):
            course.schoolcreds = m.group(2)
            description = False

        m = pCourseUCCreds.search(line)
        if (m != None):
            course.uccreds = m.group(2)
            description = False

        m = pCoursePrereqs.search(line)
        if (m != None):
            course.prereqs = m.group(2)
            description = False

        m = pCourseInterest.search(line)
        if (m != None):
            course.interest = m.group(2)
            description = False

        m = pCourseLinked.search(line)
        if (m != None):
            course.linked = m.group(2)
            description = False

        m = pCourseTrash.search(line)
        if (m != None):
            description = False

        if description == True:
            m = pCourseEverything.search(line)
            tempvariable = course.description
            course.description = ("%r%s" % (tempvariable,(str(m.group(1)))))
            #print Course.description

            #get course category
            # print m.group(2) +": " + m.group(1)

            #get course name
            #course = Course(m.group())

        #get course grade
        #get course credits
        #get other credits
        #get prereqs
        #opt: get interest
        #opt: get linked course
        #get description

    #print json.dumps(courses)
    courses.append(copy.copy(course)) #for the last one
    print json.dumps([ob.__dict__ for ob in courses])
    outf = open(outfile, 'w')
    outf.write(json.dumps([ob.__dict__ for ob in courses]))

if __name__ == '__main__':
    main()
