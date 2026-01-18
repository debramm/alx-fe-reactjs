import { useContext } from 'react';
import UserContext from '../UserContext';
import UserDetails from './UserDetails';

function UserProfile() {
  // consume context here
  const userData = useContext(UserContext);

  return <UserDetails userData={userData} />;
}

export default UserProfile;
