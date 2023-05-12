# 학생 관리 시스템

CRUD 기능을 제공하는 학생 관리 시스템입니다. 

1번을 누르면 테스트 케이스가 실행됩니다.

2번을 누르면 원하는 대로 사용하실 수 있습니다. 

<br>

# 과제 코드리뷰: 수비님

### 고칠 사항

- 학생을 수정할 때 없는 학생을 입력하면 예외처리 하기
- 학생 정렬 후 출력 기능 추가하기(배열을 return받고 출력을 하지 않았음...)

<br>

### 질문받은 내용들

(1) Student 객체에서 __init__을 사용하는 이유

Student 객체의 속성값(name, age...)을 초기화 해줄 필요가 있기 때문입니다.

(2) dictionary 자료구조를 사용하는 이유

key(Student.name), value(Student) 쌍으로 학생을 쉽게 검색할 수 있습니다. 
또한 keys(), values(), pop() 등의 연산으로 쉽게 작업을 수행할 수 있습니다.

<br>

### 우연히 찾아낸 문제점

```python
def sort_student(self):
        scores = list(self.__studentDict.values())
        scores.sort(reverse=True, key=lambda x:x.get_score())
        sorted_names = []
        for i in scores:
            sorted_names.append(i.get_name())
        return sorted_names
```

원래 위의 코드를 아래와 같이 수정하는 것이 더 좋지 않을까?

```python
    def sort_student(self):
        scores = []
        for k in self.__studentDict.keys():
            scores.append((self.__studentDict.get(k).get_score(), k))
        return sorted(scores, reverse=True)
```
배열 하나를 덜 씀으로써 공간복잡도를 줄일 수 있다. 

친구에게 코드를 보여줬다가 우연히 발견하게 되었다. 

도와준 동혁이에게 압도적인 감사를..