import React, { useState, useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const fetchProfile = (username) => fetch(`https://api.github.com/users/${username}`).then(r => r.json());

function StudentProfile(props) {
    const { username } = props;
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetchProfile(username).then(userData => setUserData(userData));
    }, []);

    return (
        userData ? <Card>
            <Image src={userData.avatar_url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{userData.login}</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in {userData.created_at}</span>
                </Card.Meta>
                <Card.Description>
                    {userData.location}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a><Icon name='user' />{userData.followers} Friends</a>
            </Card.Content>
        </Card> : <></>
    );
}

export default StudentProfile;