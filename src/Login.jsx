import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../public/firebase/firebase.init';
import { useState } from 'react';

function Login() {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  return (
    <div>
      {user ? (
        <div className="flex flex-col justify-around items-center h-[50vh]">
          <div className="flex flex-col gap-2 items-center justify-center">
            <img
              src={user.reloadUserInfo.photoUrl}
              alt=""
              className="rounded-full"
            />
            <h3>{user.displayName}</h3>
          </div>
          <button onClick={handleLogout} className="py-1 px-2 border rounded-md">
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="px-3 py-1 rounded-lg border-[green] border-[0.1px]"
        >
          Login with Google
        </button>
      )}
    </div>
  );
}

export default Login;
