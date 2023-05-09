class Student:
    def __init__(self, studentNumber, name, age, major, score):
        self.studentNumber = studentNumber
        self.name = name
        self.age = age
        self.major = major
        self.score = score
    def __str__(self):
        return f"학번: {self.studentNumber}\n이름: {self.name}\n나이: {self.age}\n전공: {self.major}\n학점: {self.score}"
    def get_score(self):
        return self.score
    def get_name(self):
        return self.name