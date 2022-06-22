import styled from 'styled-components';

export const AdminWrap = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdminMenuWrap = styled.div`
  width: 45%;
  height: 60px;
  background: #f8f8f8;
  border-radius: 12px;
  display: flex;
  justify-content: center;
`;

export const AdminMenu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedMenu = styled.div<{ select: boolean }>`
  color: ${(props) => (props.select ? 'black' : '#D0D0D0')};
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export const AdminContent = styled.div`
  margin-top: 20px;
  width: 35%;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ::-webkit-scrollbar {
    display: none;
  }
`;
