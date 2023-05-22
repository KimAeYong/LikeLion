import { useNavigate } from 'react-router-dom';
import { LogInForm } from 'components/Auth/index';

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>로그인</h3>

      <LogInForm />

      <div className='bottom-signup'>
        <p>계정이 없으신가요?</p>
        <button className='signupBtn' onClick={() => navigate('/signup')}>
          계정만들기
        </button>
      </div>
    </div>
  );
};

export default SignInPage;