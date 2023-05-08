class Student:
    def __init__(self, studentNumber, name, age, major, score):
        self.studentNumber = studentNumber
        self.name = name
        self.age = age
        self.major = major
        self.score = score
    def getName(self):
        return self.name