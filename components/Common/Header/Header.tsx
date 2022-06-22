import * as S from './Header.style';
import Logo from '../../../public/assets/Logo.svg';
import { useLogin } from '../../../hooks/Login/useLogin';
import { useEffect, useState } from 'react';
import useQueryParam from '../../../lib/useQueryParam';
import { useRecoilState } from 'recoil';
import { tokenAtom, userAtom } from '../../../store/userStore';
import Token from '../../../lib/token';

const Header = (): JSX.Element => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const { gotoDauthLogin, login, getUserInfo } = useLogin();

  const [code, setCode] = useState<string | null>(
    useQueryParam('code') as string
  );

  useEffect(() => {
    if (code !== null) {
      login(code);
    }
    setCode(null);
  }, [code]);

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token]);

  return (
    <S.Header>
      <S.Wrapper>
        <Logo />
        {!token ? (
          <S.LoginBtn onClick={gotoDauthLogin}>로그인</S.LoginBtn>
        ) : (
          <S.UserProfile>
            <S.UserProfileName>
              {user.name} {user.accessLevel === 1 ? '학생' : '선생님'}
            </S.UserProfileName>
            <S.UserProfileImage url={user.profileImage} />
          </S.UserProfile>
        )}
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
