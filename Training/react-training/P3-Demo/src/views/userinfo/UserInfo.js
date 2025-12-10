import { useState } from "react";

const UserInfo = () => {
    // const [userInfo, setUserInfo] = useState([
    //     userName,
    //     age
    // ])
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    // const [userData, setUserData] = useState([]);

    let userData=[];
    const changeUsername = (event) => {
        setUserName(event.target.value)
    }

    const changeAge = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        var data = {
            userName: userName,
            age: age
        }
        // setUserData((d) => { return [...d, {
        //     userName: userName,
        //     age: age
        // }] });
        userData.push(data)
        console.log(userData)
    }
    console.log(userData);
    return (
        <div>
            <h1>User Information</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <label>Username</label><br />
                    <input type="text" onChange={changeUsername} /><br /><br />
                    <label>Age (Years)</label> <br />
                    <input type="number" onChange={changeAge} /><br /><br /><br /><br /><br />
                    <button>Add User</button>
                </form>
            </div><br /><br />
            <div>
                <h2>Table Information</h2>
                {/* <div style={{ textAlign: "center" }}> */}
                    {
                        userData.length!==0 && 
                        userData.map((item) => {
                            return (
                                <div>
                                    <h3>{item.userName} - {item.age}</h3>
                                </div>
                            )
                        })
                    }
                {/* </div> */}

            </div>
        </div>
    )
}
export default UserInfo;