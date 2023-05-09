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
        """
        TODO: code fix, it's not working
        """
        # print("굿")
        scores=[]
        for i in self.__studentDict.values():
            scores.append(i.get_score())
        scores.sort(reverse=True)
        for i in range(len(scores)):
            print(scores[i])
        return scores