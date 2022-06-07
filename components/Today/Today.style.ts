import styled from 'styled-components';

export const Today = styled.div`
  width: 15%;
  height: 100%;
`;

export const TodayTitle = styled.div`
  color: #767676;
  font-size: 14px;
`;

export const TodayCard = styled.div`
  width: 100%;
  height: 35vh;
  margin-top: 13px;
  margin-bottom: 28px;
  border: 0.5px solid #d1d8e6;
  border-radius: 20px;
`;

export const TodayWrap = styled.div`
  height: 98%;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TodayCardImage = styled.div<{ src: string }>`
  height: 55%;
  border-radius: 20px 20px 0 0;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const TodayCardInfo = styled.div`
  height: 45%;
  width: 100%;
  padding: 21px;
  position: relative;
`;

export const TodayCardTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: auto;
`;

export const TodayCardContent = styled.div`
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
`;

export const TodayCardBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 21px;
  padding-right: 42px;
`;

export const TodayCardPlace = styled.div`
  font-size: 12px;
  color: #767676;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const TodayCardData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TodayCardTime = styled.div`
  color: #767676;
  font-size: 15px;
`;

export const TodayCardName = styled.div`
  font-weight: 700;
  font-size: 15px;
`;
