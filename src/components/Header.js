import React from 'react';
import styled from 'styled-components';

const StyledHeaderListdiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

//하나의 컴포넌트를 생성(재사용)

// styled-components => js파일과 css파일관리
const Header = () => {
  return (
    <div>
      <StyledHeaderListdiv>
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
        </ul>
      </StyledHeaderListdiv>
    </div>
  );
};

export default Header;
