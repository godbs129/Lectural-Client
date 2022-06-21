import styled from 'styled-components';

export const ItemWrap = styled.div`
  width: 100%;
  border: 0.5px solid #d1d8e5;
  height: 15%;
  margin-bottom: 10%;
  border-radius: 20px;
  padding: 14px;
  background: #f8f9fb;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ItemHeaderArrow = styled.div`
  cursor: pointer;
`;

export const ItemContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;

export const ItemContentTop = styled.div`
  width: 100%;
`;

export const ItemContentTopPlace = styled.div`
  width: fit-content;
  font-size: 13px;
  color: #767676;
  border-bottom: 1px solid #767676;
`;

export const ItemContentTopTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; ;
`;

export const ItemContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;
`;

export const ItemContentBottomTags = styled.div`
  width: fit-content;
  padding: 13px;
  height: 25px;
  background: white;
  font-size: 13px;
  color: #767676;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

export const ItemContentBottomInfo = styled.div``;

export const ItemContentBottomInfoData = styled.div`
  font-size: 13px;
  color: #767676;
`;
