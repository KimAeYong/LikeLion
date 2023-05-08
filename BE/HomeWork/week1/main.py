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
        print("6. 종료")
        print("============")
        userNum = int(input(">>"))
        #왜 파이썬은 switch-case 문이 없을까?
        if userNum == 1:
            studnetNumber = input("학번: ")
            name = input("이름: ")
            age = input("나이: ")
            major = input("전공: ")
            score = input("학점: ")
            newStudent = Student(studnetNumber, name, age, major, score)
            manager.add_student(newStudent)

        elif userNum ==2:
            for i in manager.list_student():
                print(i)

        elif userNum ==3:
            name = input("이름: ")
            print(manager.search_student(name))
            #왜 에러뜸???

        elif userNum ==4:
            name = input("이름: ")
            manager.delete_student(name)

        elif userNum ==5:
            studnetNumber = input("학번: ")
            name = input("이름: ")
            age = input("나이: ")
            major = input("전공: ")
            score = input("학점: ")
            newStudent = Student(studnetNumber, name, age, major, score)
            manager.update_student(name, newStudent)
            # 이 함수를 실행했을 떄 입력을 받고싶지만, 조건이 맞지 않게돼버려서..

        elif userNum==6:
            raise SystemExit
        else:
            print("잘못 입력하셨습니다. 다시 입력하세요.")
        
if __name__ == '__main__':
    manager = StudentManagerService()
    main(manager)