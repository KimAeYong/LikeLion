class Student:
    def __init__(self, studentNumber, name, age, major, score):
        self.studentNumber = studentNumber
        self.name = name
        self.age = age
        self.major = major
        self.score = score
    def __str__(self):
        print(f"학번: {self.studentNumber}")
        print(f"이름: {self.name}")
        print(f"나이: {self.age}")
        print(f"전공: {self.major}")
        print(f"학점: {self.score}")

    