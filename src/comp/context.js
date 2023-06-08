import UserContext from './UserContext';

function App() {
  const [userProfile, setUserProfile] = useState({
    id: null,
    name: "",
    role: "",
    location: "",
    email: "",
    phone: "",
    mobile: "",
    address: null,
    bloodType: "",
    isActive: false,
    Photo: "",
  });

  return (
    <UserContext.Provider value={{...userProfile, setUserProfile}}>
      {/* Your components go here. They will now have access to the user profile via UserContext. */}
    </UserContext.Provider>
  );
}
