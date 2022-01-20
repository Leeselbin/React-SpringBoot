import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between; //삭제버튼 오른쪽으로
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center; //가운데정렬
`;

const ListPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '내용1' },
    { id: 2, title: '내용2' },
    { id: 3, title: '내용3' },
    { id: 4, title: '내용4' },
    { id: 5, title: '내용5' },
  ]);

  const handleWrite = () => {
    // ListPage 의 setPosts에 무엇을 담아야 함?
    let post = { id: 6, title: '인풋값' };
  };

  return (
    <div>
      <h1>리스트페이지</h1>
      <form>
        <input type="text" placeholder="제목" />
        <button type="button" onClick={handleWrite()}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호: {post.id} 제목:{post.title}
          </div>
          <button>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
