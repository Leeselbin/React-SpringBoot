#### 버전확인

noder --version, npm --version

#### npm , npx

npm -> 라이브러리 다운 -빌드 -> 프로젝트3개가 있으면 로컬에 다 다운받는다

npx -> 라이브러리 다운 -빌드 -> 프로젝트가 이미다운받은게 있으면 재사용 -> 실행 -> 삭제

#### React 설치

npx create-react-app 이름
(ex) npx create-react-app blog

#### JSX

javascript에다 HTML코드를 적는문법
HTML에서 java쓸라면 jsp템플릿엔진 쓰는거랑 같은맥락

#### React 특징

- SPA(Single Page Application) -> a태그 같은거 못쓴다.
- 페이지를 이동하는거 -> body의 내용을 바꾸는 것이라 이해하면됨

#### 바벨 자바스크립트 ES5 -> ES6 바뀌면서 함수안먹는거 바꿔주는 오픈소스

---

#### JSX 문법

// (1) return시에 하나의 Dom만 리턴할 수 있다.

```javascript
function App() {
  return (
    <div>
      <div></div>
      TEST
    </div>
  );
}
```

// (2) 변수선언은 let 혹은 const로만 해야한다. 호이스팅때문에 ^^
// (2) hoisting 궁금하면 500원!

```javascript
const a = 10;
function App() {
  const b = 20;
  return <div>TEST</div>;
}
```
