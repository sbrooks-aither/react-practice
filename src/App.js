import Todo from './components/Todo';

const App = () => {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo title="foo" hi="eek"/> 
      <Todo title="bar" hi="flarp"/> 
      <Todo title="baz" hi="aoreugh"/>
    </div>
  );
};

export default App;