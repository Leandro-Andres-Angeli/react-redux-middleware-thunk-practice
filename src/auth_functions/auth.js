import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
export const createNewUser = async ({ email, password, displayName }) => {
  const auth = getAuth();
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
