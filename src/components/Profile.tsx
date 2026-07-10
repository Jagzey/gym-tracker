import { exampleUser } from '../data/profileData'
import type { UserProfile } from '../data/profileData'

type ProfileProps = {
    exampleUser: UserProfile;
}

const ProfileCard = ({ exampleUser }: ProfileProps) => {
    return (
        <div className="generic-card profile-card">
            <section>
                <ul>
                    <li className="name">
                        <p className="card-text">
                            Name: <span>{exampleUser.name}</span>
                        </p>
                    </li>
                    <li className="age">
                        <p className="card-text">
                            Age: <span>{exampleUser.age}</span>
                        </p>
                    </li>
                    <li className="sex">
                        <p className="card-text">
                            Sex: <span>{exampleUser.sex}</span>
                        </p>
                    </li>
                    <li className="height">
                        <p className="card-text">
                            Height: <span>{exampleUser.height}</span>
                        </p>
                    </li>
                    <li className="weight">
                        <p className="card-text">
                            Weight: <span>{exampleUser.weight}lbs</span>
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    )
};

const Profile = () => {
    return (
        <div className="main-section">
            <main className="profile-content">
                <div className="profile-header">
                    <h2>Profile</h2>
                </div>
                <ProfileCard exampleUser={exampleUser}/>
            </main>
        </div>
    )
};

export default Profile;