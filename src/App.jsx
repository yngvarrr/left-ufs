import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      width: '100vw' 
    }}>
      <Sidebar />
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1, 
        textAlign: 'center' 
      }}>
        <h1>Welcome to Our Landing Page</h1>
        <p>This is a simple landing page built with React.</p>
        <button onClick={() => alert('Button Clicked!')}>Click Me</button>
      </div>
    </div>
  );
};

export default App;
