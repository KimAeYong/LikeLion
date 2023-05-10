from StudentManagerRepo import *

class StudentManageImpl(StudentManagerRepo):
    def __init__(self):
        self.__studentDict = {}

    def add_student(self, student):
        self.__studentDict[student.get_name()] = student

    def list_student(self):
        return self.__studentDict.keys()

    def search_student(self, name):
        return self.__studentDict.get(name, "학생이 존재하지 않습니다")
    
    def delete_student(self, name):
        self.__studentDict.pop(name, "학생이 존재하지 않습니다")
        return
        
    def update_student(self,name, student):
        self.delete_student(name)
        self.add_student(student)

    def sort_student(self):
        scores = list(self.__studentDict.values())
        scores.sort(reverse=True, key=lambda x:x.get_score())
        sorted_names = []
        for i in scores:
            sorted_names.append(i.get_name())
        print(sorted_names) #['yoon', 'park', 'kim', 'kwak'] 출력됨
        return sorted_names #none으로 return됨??