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



# 2022-01-25

## Java

### 프로그래밍해서 프로그램을 실행시키는 방식
  - 컴파일 방식과 인터프리팅 방식을 같이 사용
  - Entry Point - main 함수를 최초로 실행시킨다.
  - 함수 = 메서드

  - 1. 변수를 선언 - 어떤 종류의 값을 할 것인지 정함
  - 2. 변수에 값을 저장(대입연산)
  - 3. 연산, 처리하기
  - 4. 결과를 화면에 출력
  - 5. 함수를 찾아 실행(호출)
 
### 자료형(Data Type)
  - boolean 논리형(true, false) => 0, 1
  - byte    정수형
  - short   정수형
  - int     정수형(32bit = 4byte)
  - long    정수형 => long long
  - float   실수형
  - double  실수형 => 기본형

  - char    문자형 => 결국 정수형이다(컴퓨터는 문자를 못읽기 때문) - 2bytes
  - String  문자열형 => 클래스형

### 데이터 입력 시 고려사항
  - 1. 데이터들이 필요, 사용되는가?
  - 2. 데이터들의 특성, 범위
  - 3. 계산
  - 4. 판단

### 실수를 만들고 그것을 10~50 사이의 임의의 정수 출력하기

```
public class MyClass {
    public static void main(String args[]) {
      // 임의의 실수 값 받는다.
      double ran = Math.random();
      System.out.println(ran);
      
      // 이것을 정수로 변환
      int min = 10;
      int max = 35;
      // 길이/개수 ?
      int num = (int)(ran*10000 %(max-min+1)+min); // 형변환 =>()변수명 => 소괄호는 형변환
      System.out.println(num);
    }
}
```

### 조건 실행문
  - 조건이 참이라면 실행한다.
  - 문(statement) : 식들의 모음
  ```
  if(){
    내용
  }
  ```
  
  ex) 일부분 골라내기
  ```
  if(80<= A && A <90) {
    // 일부분만 골라 내는것
  }
  
  if(A>=90){
    // 숫자적으로 구분
  }
  ```
  
  ex) switch문
  ```
  // 변환표, 매핑(mapping)에서 사용
  // 입력값 => 변환 => 변환값 출력
  int day = 0;
  String wday = ""; //빈문자열
  
  switch(){
    // 값에 따라 실행할 부분 선택
    case 0 : 
      wday = "일요일";
      break;
    case 1 : 
      wday = "월요일";
      break;
    case 2 : 
      wday = "화요일";
      break;
    case 3 : 
      wday = "수요일";
      break;
    case 4 : 
      wday = "목요일";
      break;
    case 5 : 
      wday = "금요일";
      break;
    case 6 : 
      wday = "토요일";
      break;
  }
  System.out.println( wday );
  ```
  
  ex) switch로 점수 ABCF 주기
  
  ```
  // case는 break가 없으면 아래로 내려감
  
  public class MyClass {
    public static void main(String args[]) {
      
      int score = 26;
      // 90 A , 70~89 B, 50~69 C, F
      String grade = "";
      
      switch (score/10) {
          case 10:
          case 9 :
              wday = "A";
              break;
          case 8 :
          case 7 :
              wday = "B";
              break;
          case 6 :
          case 5 :
              wday = "C";
              break;
          case 4 :
              wday = "F";
          default :
              wday = "F";
      }
      
      System.out.println( grade );
    }
  }
  ```
  
### 반복문
  - for while do-while
  - 조건이 참인 동안 계속 실행한다
  - 초기식; 조건식; 증강식
  - ~에서부터 시작 ~까지 실행한다.
  - 실행동안 ~씩 변한다(증강식)
  - 멈추는 조건, 상황 필수
  
  ex)
  ```
  for( int i=0; i<5 i+=1 ) {
    Syetem.out.println(i);
  }
  ```
  
  - 하나씩 꺼내는 식
  - for-each
  
  ex)
  ```
  for(int x : li){
  
  }
  ```

  ex) 5개씩 행을 끊어서 숫자를 나열
  
  ```
  public class MyClass {
    public static void main(String args[]) {
      
      // 1~25까지 연속하는 정수를 출력하세요
      for (int n=1; n<26; n+=1){
          System.out.print(n+" ");
      }
      System.out.println();
      
      // 1~25 연속 정수 출력 -1행당 5개씩
      // 5의 배수 X
      int count = 0; // 각행에서 출력 개수
      for(int n=12; n<63; n+=1){
          System.out.print(n + " ");
          count += 1;
          if(count == 5){
            System.out.println();
            count = 0; // 늘어난 숫자 값을 초기화
        }}
        // i번당 k번 반복 실행
        int num = 1;
        for( int i=0; i<5; i+=1){
            for(int k=1; k<=5; k+=1){
                System.out.print( i*5 + k + " ");
                // System.out.print(num + " ");
                // num +=1;
            }
            System.out.println();
        }
        
      
    }
  }
  ```
  
  ex) 실수값을 세자리정수로 만들고 각자리 숫자를 합해서 짝수면 출력
  ```
  public class MyClass {
    public static void main(String args[]) {
      // 임의의 실수 값 받는다.
      double ran = Math.random();
      System.out.println(ran);
      
      // 이것을 정수로 변환
      int min = 100;
      int max = 999;
      int num = (int)(ran*10000 %(max-min+1)+min);
      System.out.println(num);
      
      int temp = num;
      int sum = 0;
      for(; temp > 0; temp /=10){
          int d3 = temp % 10;
          sum += d3;
      }
      
      if(sum%2 == 0){
          System.out.println(num + " => " + sum);
      } else {
          System.out.println("error");
      }
    }
  }
  ```

  ex) 세자리숫자가 연속된 숫자면 출력
  ```
  public class MyClass {
    public static void main(String args[]) {
      // 임의의 실수 값 받는다.
      double ran = Math.random();
      
      // 이것을 정수로 변환
      int min = 100;
      int max = 999;
      int num = (int)(ran*10000 %(max-min+1)+min);
      
      // 세자리 정수 : 각자리 값이 크기 순으로 연속하는지 판단
      int d1 = num / 100;
      int d2 = num / 10 % 10;
      int d3 = num % 10;
      if(d1+1 == d2 && d2+1 == d3){
          System.out.println(num);
      } else{
          System.out.println(num + "=> 비연속");
      }
    }
  }
  ```
  
  - 세가지 반복문 차이
  - 
  ```
  public class MyClass {
    public static void main(String args[]) {
      
      // for문
      int n = 1;
      for(; n<5; n+=1){
      }
      
      // while문
      // 조건식을 먼저 실행
      int m = 0;
      while( m < 5 ){
          m+=1;
      }
      
      // do while문
      // 일단 한번은 무조건 실행
      do{
          // 실행 값
          // 파일접근, 키보드 입력 유효검사
      } while();
    }
  }
  ```
  
## Python 3

### 프로그래밍해서 프로그램을 실행시키는 방식
  - 1. 컴파일 방식 => 진입점 필수
  - 2. 인터프리팅 방식 => 코드를 바로 실행

### 자료형 예약어 없음
  - a = 10
    b = 12.34
    c = 'james'

### 조건 실행문
  ```
  if 조건식:
    참일 때 실행 될 내용
  ```

### 반복문
  - range(x, y, z)
  - x는 최소값, y는 최고값, z는 증강값

  - 1~25까지 한줄 출력하기
  ```
 for n in range(1,26) :
        print(n, end=", "
  ```
