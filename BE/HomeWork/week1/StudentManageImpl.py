import StudentManageRepo
import Student

class StudentManageImpl(StudentManageRepo):
    def __init__(self):
        studentList = {}
    def add_student(self, student):
        self.studentList.add(student)
        return
    def list_student(self):
        for student in self.studntList:
            print(student)
            print()
    def search_student(self, name):
        if name in self.studentList:
            #여기
            return
        else:
            print("찾으려는 학생이 없습니다..")
    def delete_student(self, name):
        if name in self.studentList:
            #here
            return
    def update_student(self, name, student):
        if name in self.studentList:
            print("학생 정보를 다시 입력해주세요.")
            self.delete_student(name)
            self.add_student(student)
