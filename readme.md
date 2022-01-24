# readme

- 변수명
  - 식별 값 = 핸드폰번호 같은 것(변수들을 구분하기 위하여)(유니크값)

## 변수와 상수는 상자
  - 변수는 값이 바뀔 수 있음
  - 상수는 값이 바뀌지 않음

## 학생점수 처리할 때 한명당 3개 과목 합산
  - 각 과목당 점수 범위를 알아야함
    - 국어(0~100), 영어(0~900), 수학(0~400)
    - 900을 기준으로 점수를 받고 총합은 1400으로 계산

## 프로토콜 정하기(기준)
  - 정규협약
  - 데이터 사이즈, 구분

## bit(비트) binary digit
  -  컴퓨터의 전기적 상태를 나타내는 방법
  -  0과 1로 표기하여 2진수

  - *Byte*
    - 문자, 숫자 및 기호등을 나타내기 위하여 8개의 bit 를 묶은 것

# 배열 Array
  - 여러 개의 '자료'를 저장하는 형태 
    - 하나의 변수에 하나의 '자료'를 저장
    
  - 여러개의 변수를 저장
  - 각각의 변수는 '이름'으로 구분, 배열에서는 '번호'로 구분
    - 0번부터 시작, 0부터 1개가 잇음 
  
  - 길이 (변수들의 개수)

  - 배열안에 변수들(요소) = element
    - 음수값은 잘쓰지 않음(파이썬에서는 사용함) 

ex)
```
10개의 배열이 존재함. 0~9까지
마지막요소의 번호는 길이 -1
```

# File
  - Computer내에 '자료'들을 보관/저장
  - It에선 100%영구적인건 없다
  - 확장자 - 마침표(.)로 구분
    - file format과 용도에 따라 구분함

  - File System
    - 운영체제에서 file들을 관리하는 방법
    - 운영체계가 다르면 보통 실행이 다 안된다
    - 현재는 웹브라우저(웹앱)가 운영체계가 되어서 프로그램이 실행되는 추세다
 
 # 식별값 identification
  - '이름' , 위치, 번호 => 여러 개 중 하나를 구별하기 위한 규칙
  - 중복이 없는 유일한 값 (unique value)
  - 가시성 (visibility, scope)
    - 보이는 부분(현재 실행되는 부분)
    - '지역성'이라고 표현되기도 함
  - 같은 directory에 같은 이름의 file 2개
  - '이름'은 같지만 '내용'은 다르다
    - 변경되었다.
    - 같은것이 아니다 

 # Programming
  - 프로그래밍 언어
  - 기계어 > 어셈블리어 > 고급(수준)언어
  - 언어는 다른 이에게 자신의 생각을 전달하는 목적
 
 # 함수
  - x를 주었을 때 y가 되는 관계를 표현하는 수식
  - 독립적인 실행 단위 : 프로그램을 구성하는 부품
  - 자주 사용되는 기능, 처리를 재사용이 편함
  - 함수들의 모음을 라이브러리라 함

  - *호출(call)* // *요청(request)*
    - 함수명();
    - 받을것 = 함수명();
    - 함수명(줄것이 있다);
    - 받을 것 = 함수명(줄 것);

  ### 함수가 실행되고 어떠한 결과가 생기는가
    - 입력    처리    출력
    - (전달) {실행} = 반환()
  
  # 논리
  
  ex)
  ```
  중3이면 출입 가능 중3이아니면 출입불가능
    - 중학생 and 3학년이면 출입 가능
  ```
  
  ```
  지하철에 탑승하려면 무슨조건이 있을까?
  문제)
  ```
  
  # 연산
  
    - 일정한 규칙에 따라 계산하다
    - 연산자(Operator)
       - 규칙을 기호 또는 단어로 정한 것
       - 덧셈 연산자 +
       
   # 변수 Variable
    - 자료, 값 을 저장
    
    변수명 = 저장할 값
    
    - 하나의 '값'만 저장
    - 상수 Constant
    
# JAVA & Python3

1. 변수선언

## Java

```
// class 선언
public class MyClass {
    // 메소드 선언
    public static void main(String[] args){
        // 변수선언
        int num = 10;
        
        // num변수의 값을 콘솔에 출력
        System.out.println(num);
    }
}
```

## Python

```
num = 10;
# print 함수에 num 변수 값을 전달한다
# 화면에 num 변수의 값을 출력하려면, print 함수를 호출
print(num)
```

2. 논리연산 자료형 표현

## Java

```
// class 선언
public class MyClass {
    // 메소드 선언
    public static void main(String[] args){
        
        // 변수를 먼저생성, 만들기 => 저장
        // 1. 저장할 값에 따라 자료형을 쓴다
        // 왼쪽 항 반드시 변수명이여야함
        boolean result = (10 < 20); // ~이면
        System.out.println(10 <= 20); // ~이면
        System.out.println(10 == 20); // ~이면
        System.out.println(10 != 20); // ~이면
        // 논리 연산 결과 -> 논리값 : true, false
        
    }
}
```

## Python

```
num = (10<20);
print(num)
// True, False
```

### 문제 0~1사이의 실수(소수)를 구하고 그 값이 10~45사이의 숫자가 되도록 하는 함수

```
from random import *

i = random()

x = randint(10,44)

r = i+x

R = 10<=r<=45
print(R)

```

3. 논리연산을 하려면 관계 연산이 여러개 필요하다
4. 산술연산은 단순하게 값을 산술 계산을 하는거다

- 즉 산술연산이 되어야 값을 구해 관계연산이 되고 true, false가 있어야 논리연산이 가능하다.
