import { useNavigate } from 'react-router-dom';
import { LogInForm } from 'components/Auth/index';
import { SignInBox } from 'styles/SignContainer.styled';

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <SignInBox>
      <h3>로그인</h3>

      <LogInForm />

      <div className='bottom-signup'>
        <p>계정이 없으신가요?</p>
        <button className='signupBtn' onClick={() => navigate('/')}>
          계정만들기
        </button>
      </div>
    </SignInBox>
  );
};

export default SignInPage;
