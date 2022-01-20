#### 버전확인

noder --version, npm --version

#### npm , npx

npm -> 라이브러리 다운 -빌드 -> 프로젝트3개가 있으면 로컬에 다 다운받는다

npx -> 라이브러리 다운 -빌드 -> 프로젝트가 이미다운받은게 있으면 재사용 -> 실행 -> 삭제

#### React 설치

npx create-react-app 이름
(ex) npx create-react-app blog

#### style-components 설치

Why use? : css파일로 따로 만드는건 재사용성있다는 장점
: but style-component쓰면 Header나 Footer같은 거 컴포넌트에 편함

```
- with npm
npm install --save styled-components
- with yarn
yarn add styled-components
```

#### JSX

javascript에다 HTML코드를 적는문법
HTML에서 java쓸라면 jsp템플릿엔진 쓰는거랑 같은맥락

#### React 특징

- SPA(Single Page Application) -> a태그 같은거 못쓴다.
- 페이지를 이동하는거 -> body의 내용을 바꾸는 것이라 이해하면됨
- export default App <-- App함수를 외부에 노출시키겟다
- import 할때는 import App from './App'; <<<- ./ 는 같은폴더

- 다른파일에 잇는 let num = 10 변수를 땡겨올때는 import {num} from './App'이런식으로
- import {변수} from 경로;

#### 바벨 자바스크립트 ES5 -> ES6 바뀌면서 함수안먹는거 바꿔주는 오픈소스

---

#### CSS 선언

- import './App.css';
- <div calssName="css에서정의한 태그"> text </div>

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

---

## React Hooks 라이브러리~~!!!

#### concat, filter, map, slice, 스프레드(전개) 연산자

      ```html
      //1. 깊은복사 ->  a,b에서 b에복사하고 데이터변경하면 a는 안바뀌는거
      const a = [1, 2, 3];
      const b = [...a]; // [1,2,3] 스프레드 연산자
      console.log('1.============= 스프레드 연산자');
      b.push(4); // b의 데이터 변경
      console.log(`a의값 ${a}`); // 1,2,3
      console.log(`b의값 ${b}`); // 1,2,3,4

      //2. concat 추가하기
      console.log('2.============= 추가하기');
      const a2 = [1, 2, 3];
      const b2 = a2.concat(4); // a2에 4가추가된 배열이 b2로간다
      console.log(`a2의값 ${a2}`); // 1,2,3
      console.log(`b2의값 ${b2}`); // 1,2,3,4
      const c2 = [0, ...a2, 4]; // concat이랑 똑같다. 앞뒤 다추가가능 but 사이는 추가안됨
      console.log(`c의값 ${c2}`); // 0,1,2,3,4
      ```
      //3. filter 걸러내기 , 삭제하기
      console.log('3.============= 걸러내기');
      const a3 = [1, 2, 3];
      const b3 = a3.filter((n) => {
        return n != 1;
      }); // bool을 return 받는다 -> true만 걸러낸다.
      // 1이 아닌것만 true니깐 2,3출력된다.
      console.log(b3); // 2,3

      //4. slice 잘라내기
      console.log('3.============= 잘라내기');
      const a4 = [1, 2, 3];
      const b4 = a4.slice(0, 2); // 0번index부터 1번index까지
      console.log(b4); // [1,2]
      const c4 = [a4.slice(0, 2)]; //
      console.log(c4); // 배열안에 [[1,2]]
      const d4 = [...a4.slice(0, 2)]; // 스프레드로 흩뿌려주면
      console.log(d4); // [1,2] 가 출력된다.

      console.log('============= 삽입 ');
      const e4 = [...a4.slice(0, 2), 4, ...a4.slice(2, 3)];
      console.log(e4); // [1,2,4,3] 가 출력된다.

      // 5. map 반복하기
      console.log('5.============= 반복하기');
      const a5 = [1, 2, 3];
      //   for (let i = 0; i < a5.length; i++) {
      //     console.log(a5[i]);
      //   }
      //   a5.forEach((n) => {
      //     console.log(n);
      //   }); // a5 출력 변수는 마음대로 적어도된다
      // return값이 void이다
      const b5 = a5.map((n) => {
        return n;
      });
      console.log(b5); // 1,2,3
      ```

#### useEffect()

실행시점
(1) App() 함수가 최초 실행될 때 - 그림이 최초 그려질 때
(2) 상태 변수가 변경될 때 (그게 dependencyList에 등록되어 있어야함)
(3) 의존리스트 관리를 할 수 있다.

표현 useEffect

```javascript
fuction App(){
useEffect(() =>{
      //콜백함수 들어감
      console.log('useEffect 실행됨');
}, [어떠한 data가 들어갈떄 콜백을할지 결정할 data]);
// [] 빈공백이면 어느곳에도 의존하지않아서 최초에만 실행된다.
}
export default App;
```

#### useMemo() - 메모라이제이션(기억)

예를들어 상태변수가 변경될때마다 마운트가 싹다시되니깐 부분별로 바꾸려고 씀

표현 useMemo

```javascript
fuction App(){
 const [list, setList] = useState([1, 2, 3, 4]);
 const addResult = useMemo(() => getAddResult(), [list]);
 // useMemo(() => 함수, dependency)
 // list가 변할때에만 getAddResult()가 실행된다.
 return
export default App;
```

---

#### props

<Home boards={boards} /> <- props예시
