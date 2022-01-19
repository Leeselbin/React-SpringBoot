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

(1) return시에 하나의 Dom만 리턴할 수 있다.

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

(2) 변수선언은 let 혹은 const로만 해야한다. 호이스팅때문에 ^^ hoisting 궁금하면 500원! const는 상수 let은 변수

```javascript
const a = 10;
function App() {
  const b = 20;
  return (
    <div>
      {a},{b}
    </div>
  );
}
```

(3) if사용 불가능X -> 삼항연산자 (조건 ? 값(true) : 값(false))

```javascript
const a = 10;
function App() {
  const b = 20;
  return <div>안녕{a === 10 ? '10입니다' : '10이아닙니다'}</div>;
}
```

(4) 조건부 렌더링 -> {b === 20 && 값(true) } // b가 20이면 true 근데 fasle 는 없다!

```javascript
const a = 10;
function App() {
  const b = 20;
  return (
    <div>
      안녕{a === 10 ? '10입니다' : '10이아닙니다'}
      <h1>렌더링테스트{b === 20 && '20입니다'}</h1>
    </div>
  );
}
```

(5) return에서 한줄이면 ()괄호가 필요없는데 태그2개이상이면 ()괄호필요하다!!

```javascript
function App() {
  return (
    <div>
      <div></div>
    </div>
  );
}
```

(6) 변수는 있는데 값이 지정안되면 undefined

```javascript
let a = 10; //변수
const b = 20; //상수
function App() {
  let c; //
  console.log(1, c); // undefined뜬다. java엿으면 null
  return <div>안녕</div>;
}
```

(7) CSS디자인

- 내부에 적는 방법 style={} - 추천 하지 않는다!!!!!!
- 외부 파일에 적는 방법 - ex) import './App.css';
- 라이브러리 사용(부트스트랩, component-styled)

```javascript
const mystyle = {
  color: 'red',
};

let a = 10; //변수
const b = 20; //상수
function App() {
  return <div style={{ mystyle }}>안녕</div>;
}
```
