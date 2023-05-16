import './App.css';
import MyComponent from './components/mycomponent';

function App() {
  const element = (
    <h1>hello world!!</h1>
  )
  return (
    <>
    {element}
    <MyComponent></MyComponent>
    </>
  );
}

export default App;