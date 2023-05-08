from StudentManagerRepo import *

class StudentManageImpl(StudentManagerRepo):
    def __init__(self):
        self.studentDict = {}

    def add_student(self, student):
        self.studentDict[student.name] = student

    def list_student(self):
        return self.studentDict.keys()

    def search_student(self, name):
        return self.studentDict.get(name, "학생이 존재하지 않습니다")
    
    def delete_student(self, name):
        self.studentDict.pop(name, "학생이 존재하지 않습니다")
        return
        
    def update_student(self,name, student):
        self.delete_student(name)
        self.add_student(student)
    
