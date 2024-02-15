# 막 필기해버리기
- 초기 세팅: npm init -> npm i @types/node -> npm i -g typescript -> npm i -g tsc
- ts는 쉽게 말해서 js 타입 검사용 컴파일러
- tsc ~~ -> 타입스크립트 컴파일러가 컴파일하는 명령어 --> js로 빌드
- node 실행 방법: node src/index.js
- 한번에 실행시켜주는 명령어 tsx(typescript execute)
- 기존의 ts-node의 경우 20버전부터는 권장 x
- 타입스크립트의 컴파일은 작성한 코드에 타입 오류가 없는지 검사하고 없다면 자바스크립트로 변환하는 작업 수행 --> 어떻게 검사하고 버전등 환경 정의를 컴파일러 옵션에서 설정할텐데 이걸 정의하는곳이 tsconfig.json --> tsc --init
- ES lint 설정 시 오류 링크 참조 https://www.inflearn.com/questions/1053604/%EC%84%A4%EC%B9%98-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0%EC%B1%85%EC%9D%84-%EB%AA%A8%EB%A5%B4%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%84%A4%EC%B9%98%EA%B4%80%EB%A0%A8-undici-types?commentId=292567#292567
- 타입 스크립트는 모든 파일을 전역 파일로 취급 -> 다른 ts파일이더라도 동일한 이름의 변수 사용 허용 x