import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 823px;
  display: flex;
  height: 37px;
  justify-content: space-between;
  margin-top: 41px;
  margin-bottom: 48px;
  align-items: center;
`;

export const LoginBtn = styled.div`
  color: #767676;
  font-size: 15px;
  cursor: pointer;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfileName = styled.div`
  color: #767676;
  font-size: 15px;
  margin-right: 20px;
`;

export const UserProfileImage = styled.div<{ url: string }>`
  background-image: ${(props) => `url(${props.url})`};
  width: 37px;
  height: 37px;
  background-repeat: no-repeat;
  background-size: 60px;
  border-radius: 30px;
  background-position: center;
`;
