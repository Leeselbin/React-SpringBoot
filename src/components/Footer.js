import React from 'react';
import styled from 'styled-components';

const StyledFooterListdiv = styled.div`
  border: 1px solid black;
  height: 300px;
`;

//하나의 컴포넌트를 생성(재사용)

// styled-components => js파일과 css파일관리
const Footer = () => {
  return (
    <div>
      <StyledFooterListdiv>
        <ul>
          <li>오시는길: 서울 강남구...</li>
          <li>전화번호: 02002002</li>
        </ul>
      </StyledFooterListdiv>
    </div>
  );
};

export default Footer;
