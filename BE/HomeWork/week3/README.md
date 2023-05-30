# 블로그 프로젝트 view.py 작성

블로그 프로젝트의 CRUD를 위한 view.py와 tests.py를 작성했습니다. 

자세한 개발일지는 아래 링크를 방문해주세요.

[김애용의 개발 블로그](https://aeyong-dev.tistory.com/14)

<br>

# 코드리뷰: 최한예빈님

### 질문한 것

> `render()`와 `redirect()`의 차이를 아시나요?

`render()`는 html 파일을 렌더링 해 달라는 함수입니다. 

하지만 `redirect()`는 url.py에서 지정한 url로 이동시켜주는 함수입니다.

<br>

### 공통적으로 모르는 것

예빈님은 `reverse()`함수를 사용하지 않았습니다. 

`redirect()` 함수 내부에 `reverse()`를 사용하지 않아도 정상적으로 작동되는데, 무슨 차이가 있을까요? 