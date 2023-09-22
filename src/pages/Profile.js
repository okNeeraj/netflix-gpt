import { updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { useDispatch } from "react-redux";
import { updateUser } from "../stores/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  // https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg
  const updatedInfo = {
    displayName: "Naksh",
    photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
  }
  const handleUpdateProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: updatedInfo.displayName,
      photoURL: updatedInfo.photoURL
    }).then(() => {
      console.log('Profile Updated')
      dispatch(updateProfile({
        displayName: updatedInfo.displayName,
        photoURL: updatedInfo.photoURL
      }))
    }).catch((error) => {
      console.log('Error -->', error)
      // An error occurred
    });

    console.log('Updating...')
  }

  return (
    <div className="p-4">
      <h1>My Profile</h1>
      <div className="">
        name: Neeraj <br />
        photoUrl: 'https://sfsdf.com/image.jpg' <br />
      </div>
      <button className="px-6 py-3 bg-red-primary text-white rounded-md mt-3" onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  )
}

export default Profile;
