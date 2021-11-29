import { useContext,useState } from 'react';
import './ProfileSection.scss'
import AuthContext from './../../context/AuthContext';


const ProfileSection = ({handleLogout}) => {

    const [del, setDel] = useState(0);

    const handleChange = ()=>{setDel(1)};


    const userObj = useContext(AuthContext);
    const { profileImg, name } = userObj;
    return (
        <div className="profile-section">
            <div className="img-container">
                <img alt="image" src={profileImg} />
            </div>
            {name}
            <div className="action-items" onClick={handleChange}>
                {del}
            </div>
        </div>
    )
}

export default ProfileSection;