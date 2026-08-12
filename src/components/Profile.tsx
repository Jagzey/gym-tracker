import { exampleUser } from '../data/profileData'
import { useState } from 'react';
import type { UserProfile } from '../data/profileData'

const currentUser: UserProfile = {
    name: "",
    age: 0,
    sex: "",
    height: "",
    weight: 0
};

function addUserToLocalStorage() {
    if (localStorage.length != 0) {
        setCurrentUser();

        return;
    }
    else {

        localStorage.setItem("name", exampleUser.name);
        localStorage.setItem("age", exampleUser.age.toString());
        localStorage.setItem("sex", exampleUser.sex);
        localStorage.setItem("height", exampleUser.height);
        localStorage.setItem("weight", exampleUser.weight.toString());

        setCurrentUser();
    }
}

const ProfileCard = () => {

    return (
        <div className="generic-card profile-card">
            <section>
                <ul>
                    <li className="name">
                        <p className="card-text">
                            Name: <span>{currentUser.name}</span>
                        </p>
                    </li>
                    <li className="age">
                        <p className="card-text">
                            Age: <span>{currentUser.age}</span>
                        </p>
                    </li>
                    <li className="sex">
                        <p className="card-text">
                            Sex: <span>{currentUser.sex}</span>
                        </p>
                    </li>
                    <li className="height">
                        <p className="card-text">
                            Height: <span>{currentUser.height}</span>
                        </p>
                    </li>
                    <li className="weight">
                        <p className="card-text">
                            Weight: <span>{currentUser.weight}lbs</span>
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    )
};

const EditProfileCard = () => {

    const [name, setName] = useState(currentUser.name);
    const [age, setAge] = useState(currentUser.age.toString());
    const [sex, setSex] = useState(currentUser.sex);
    const [height, setHeight] = useState(currentUser.height);
    const [weight, setWeight] = useState(currentUser.weight.toString());

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("sex", sex);
        localStorage.setItem("height", height);
        localStorage.setItem("weight", weight);
        setCurrentUser();
    }

    return (
        <div className="generic-card profile-card">
            <section>
                <h3>Edit User Profile</h3>

                <form className="update-profile-form" onSubmit={handleSubmit}>
                    <ul>
                        <li className="name">
                            <p className="card-text">
                                Name: 
                                <span>
                                    <input className="generic-input" name="profile-name" value={name} onChange={(e) => setName(e.target.value)}></input>
                                </span>
                            </p>
                        </li>
                        <li className="age">
                            <p className="card-text">
                                Age: 
                                <span>
                                    <input className="generic-input" name="profile-age" value={age} onChange={(e) => setAge(e.target.value)}></input>
                                </span>
                            </p>
                        </li>
                        <li className="sex">
                            <p className="card-text">
                                Sex: 
                                <span>
                                    <input className="generic-input" name="profile-sex" value={sex} onChange={(e) => setSex(e.target.value)}></input>
                                </span>
                            </p>
                        </li>
                        <li className="height">
                            <p className="card-text">
                                Height: 
                                <span>
                                    <input className="generic-input" name="profile-height" value={height} onChange={(e) => setHeight(e.target.value)}></input>
                                </span>
                            </p>
                        </li>
                        <li className="weight">
                            <p className="card-text">
                                Weight:
                                <span>
                                    <input className="generic-input" name="profile-weight" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
                                </span>
                            </p>
                        </li>
                    </ul>

                    <button className="update-profile-button" type="submit">Update Profile</button>
                </form>
                
            </section>
        </div>
    )
};

const CreateProfileButton = () => {
    return (
        <button className="generic-button edit-profile-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            <p>Edit Profile</p>
        </button>
    )
}

const setCurrentUser = () => {
    currentUser.name = localStorage.getItem("name") ?? "";
    currentUser.age = Number(localStorage.getItem("age")?.toString() ?? "");
    currentUser.sex = localStorage.getItem("sex") ?? "";
    currentUser.height = localStorage.getItem("height") ?? "";
    currentUser.weight = Number(localStorage.getItem("weight") ?? "");
}

const Profile = () => {
    addUserToLocalStorage();

    return (
        <div className="main-section">
            <main className="profile-content">
                <div className="profile-header">
                    <h2>Profile</h2>
                    <CreateProfileButton />
                </div>
                <div className="profile-body">
                    <ProfileCard />
                    <EditProfileCard />
                </div>
            </main>
        </div>
    )
};

export default Profile;