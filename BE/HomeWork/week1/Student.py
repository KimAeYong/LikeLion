class Student:
    def __init__(self, studentNumber, name, age, major, score):
        self.__studentNumber = studentNumber
        self.__name = name
        self.__age = age
        self.__major = major
        self.__score = score
    def get_studentNumber(self):
        return self.__studentNumber
    def get_name(self):
        return self.__name
    def get_age(self):
        return self.__age
    def get_major(self):
        return self.__major
    def get_score(self):
        return self.__score
    def __str__(self):
        return f"학번: {self.get_studentNumber()}\n이름: {self.get_name()}\n나이: {self.get_age()}\n전공: {self.get_major()}\n학점: {self.get_score()}"