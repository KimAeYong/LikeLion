import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage, SignInPage, SignUpPage } from './pages';
import WrapperContainer from 'styles/WrapperContainer.styled';

function App() {
  return (
    <WrapperContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </WrapperContainer>
  );
}

export default App;
