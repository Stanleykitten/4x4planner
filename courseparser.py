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
        self.name = name
        self.number = ""
        self.grades = ""
        self.schoolcreds = ""
        self.uccreds = ""
        self.prereqs = ""
        self.interest = "optional!!" #opt
        self.linked = "optional!!!" #opt
        self.description = ""

def main():
    #open that dank file tho
    file_location = r"C:\Users\Brendan\Documents\GitHub\4x4planner"
    file_name = r"\courses.txt"
    filepath = file_location + file_name
    f = open(filepath)

    # Define regexpressions
    categories = r'^(English|Social Science|World Language|Mathematics|Biological Sciences|Physical Sciences)$'
    pCats = re.compile(categories)
    pCourseNameNum = re.compile(r'^(.*)((\d{6}) - (\d{6}))$')
    # Intial variables
    currentCategory = ''
    course = Course('none')
    courses =[]
    isFirst = True

    #loop through all courses
    for line in f:
        m = pCats.match(line)
        if (m != None):
            #get course category
            currentCategory = m.group()

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
    print json.dumps([ob.__dict__ for ob in courses])

if __name__ == '__main__':
    main()
