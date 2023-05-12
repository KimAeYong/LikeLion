from  StudentManagerService import *
from  Student import *

def main(manager):
    
    n = input("테스트 케이스를 실행하려면 1번, 그렇지 않으면 2번, 종료하려면 아무 키나 누르세요.")
    if n=="1":
        print("테스트 케이스 입니다.")
        print("학생 객체를 생성합니다.")
        std1 = Student(1,"kim",20,"cs",3)
        std2 = Student(2,"park",22,"cs",3.2)
        std3 = Student(3,"yoon",25,"cs",4.1)
        std4 = Student(4,"kwak",28,"cs",2.6)
        std5 = Student(5,"han",21,"cs",3.8)
        print("학생 1~5를 추가합니다.")
        manager.add_student(std1)
        manager.add_student(std2)
        manager.add_student(std3)
        manager.add_student(std4)
        manager.add_student(std5)
        print("전체 학생을 조회합니다.")
        print("========")
        for i in manager.list_student():
                    print(i)
        print("========")
        print("yoon 학생을 조회합니다.")
        print(manager.search_student("yoon"))
        print("========")
        print("han 학생을 삭제합니다.")
        print("...")
        manager.delete_student("han")
        print("삭제 완료.")
        print("다시 전체 학생을 조회하여 삭제되었음을 확인합니다.")
        for i in manager.list_student():
                    print(i)
        print("========")
        print("yoon 학생을 수정해보겠습니다.")
        print("...")
        new_yoon = Student(3,"yoon",25,"art",4.1)
        manager.update_student("yoon", new_yoon)
        print("수정 완료.")
        print("수정되었는지 조회하여 확인합니다.")
        print(manager.search_student("yoon"))
        print("yoon학생이 미대생이 되었습니다.")
        print("========")

        print("성적순으로 정렬하겠습니다.")
        names = manager.sort_student()
        for name in names:
            print(name[1])
        print("========")

        print("테스트 케이스를 종료합니다.")
        print("시스템을 종료합니다.")
        raise SystemExit
    
    elif n=="2":
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
                # TODO: 없는 학생 입력했을때 예외처리
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
                #TODO: 배열 출력하기
                print("학생이 정렬되었습니다.")
            
            elif userNum == "7":
                raise SystemExit
            
            else:
                print("잘못 입력하셨습니다. 다시 입력하세요.")

    else:
         raise SystemExit
        
if __name__ == '__main__':
    manager = StudentManagerService()
    main(manager)



"""
hello world!!
hello world!!
"""