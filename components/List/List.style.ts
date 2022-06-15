import styled from 'styled-components';

export const List = styled.div`
  width: 23%;
  margin-left: 58px;
  margin-right: 58px;
  height: 100%;
`;

export const ListTitle = styled.div`
  color: #767676;
  font-size: 14px;
`;

export const ListWrap = styled.div`
  height: 98%;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
