import { useState } from 'react';
import './App.css';

function App() {
  console.log('App 실행됨');
  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '1길동' },
    { id: 2, name: '2길동' },
    { id: 3, name: '3길동' },
    { id: 4, name: '4길동' },
  ];

  const [users, setUsers] = useState(sample); // 레퍼런스 변경되야 동작!

  const download = () => {
    // const a = sample.concat({ id: 5, name: '5길동' });
    // setUsers(a); //강제로 다시그릴려면 [...sample]
    setUsers([...sample, { id: num, name: '5길동' }]);
    setNum(num + 1);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
