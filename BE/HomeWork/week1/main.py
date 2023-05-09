from  StudentManagerService import *
from  Student import *
# from Student import *

def main(manager):
    while(1):
        print("============")
        print("1. 학생 추가")
        print("2. 전체 학생 조회")
        print("3. 학생 조회")
        print("4. 학생 제거")
        print("5. 학생 수정")
        print("6. 학생 성적순 정렬")
        print("7. 종료")
        print("============")
        userNum = input(">>")
        
        if userNum == "1":
            studnetNumber = input("학번: ")
            name = input("이름: ")
            age = input("나이: ")
            major = input("전공: ")
            score = input("학점: ")
            newStudent = Student(studnetNumber, name, age, major, score)
            manager.add_student(newStudent)

        elif userNum == "2":
            for i in manager.list_student():
                print(i)

        elif userNum == "3":
            name = input("이름: ")
            print("-----")
            print(manager.search_student(name))

        elif userNum == "4":
            name = input("이름: ")
            manager.delete_student(name)

        elif userNum == "5":
            name_to_correct = input("이름: ")
            print("새 학생의 정보를 입력합니다.")
            studnetNumber = input("학번: ")
            name = input("이름: ")
            age = input("나이: ")
            major = input("전공: ")
            score = input("학점: ")
            newStudent = Student(studnetNumber, name, age, major, score)
            manager.update_student(name_to_correct, newStudent)

        elif userNum == "6":
            manager.sort_student()
            print("학생이 정렬되었습니다.")
            """
            TODO: managerimpl.py codefix
            """
        
        elif userNum == "7":
            raise SystemExit
        
        else:
            print("잘못 입력하셨습니다. 다시 입력하세요.")
        
if __name__ == '__main__':
    manager = StudentManagerService()
    main(manager)