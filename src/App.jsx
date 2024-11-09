import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col items-center justify-between py-4">
        <h1>Hello, Programming Hero!</h1>
        <Outlet />
        <h1>footer</h1>
      </div>
    </>
  );
}

export default App;
