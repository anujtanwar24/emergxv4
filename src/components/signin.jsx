import { signInWithGoogle } from "../firebase";

function SignIn() {
  return (
    <div className="App">
      <button class="btn--super" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
     
     
    </div>
  );
}

export default SignIn;