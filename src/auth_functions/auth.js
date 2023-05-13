import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { app } from '../firebase_config/firebase_config';
import { loginAction, logoutAction } from '../store/auth-actions';

const auth = getAuth(app);
export const loginUser = ({ email, password }) => {
  return async function (dispatch) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      // return user;
      dispatch(
        loginAction({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || '',
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};
export const createNewUser = async ({ email, password, displayName }) => {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,

      email,
      password
    );
    const user = await credentials.user;

    await updateProfile(auth.currentUser, { displayName: displayName });
    console.log(auth.currentUser);
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};
export const signOutUser = () => {
  return async function (dispatch) {
    try {
      signOut(auth)
        .then((res) => dispatch(logoutAction()))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
};
const provider = new GoogleAuthProvider();
export const googleLogin = () => {
  // console.log('in');

  // try {
  //   console.log('in');
  //   const popUp = await signInWithPopup(auth, provider);
  //   const token = GoogleAuthProvider.credentialFromResult(popUp);
  //   const user = popUp.currentUser;
  //   console.log(user);
  //   console.log(token);
  //   return user;
  // } catch (err) {
  //   console.log(err);
  // }
  return async function (dispatch) {
    try {
      console.log('in');
      const popUp = await signInWithPopup(auth, provider);
      const token = GoogleAuthProvider.credentialFromResult(popUp);
      const user = popUp.user;
      console.log(user);
      console.log(token);
      dispatch(
        loginAction({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || '',
        })
      );
      return user;
    } catch (err) {
      console.log(err);
    }
  };
};
