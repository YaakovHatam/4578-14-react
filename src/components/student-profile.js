import React, { useState, useEffect } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

// const fetchProfile = (username) => fetch(`https://api.github.com/users/${username}`).then(r => r.json());
const fetchProfile = (username) => new Promise((res, rej) => {
    res({
        "login": username,
        "id": 6986221,
        "node_id": "MDQ6VXNlcjY5ODYyMjE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/6986221?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/YaakovHatam",
        "html_url": "https://github.com/YaakovHatam",
        "followers_url": "https://api.github.com/users/YaakovHatam/followers",
        "following_url": "https://api.github.com/users/YaakovHatam/following{/other_user}",
        "gists_url": "https://api.github.com/users/YaakovHatam/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/YaakovHatam/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/YaakovHatam/subscriptions",
        "organizations_url": "https://api.github.com/users/YaakovHatam/orgs",
        "repos_url": "https://api.github.com/users/YaakovHatam/repos",
        "events_url": "https://api.github.com/users/YaakovHatam/events{/privacy}",
        "received_events_url": "https://api.github.com/users/YaakovHatam/received_events",
        "type": "User",
        "site_admin": false,
        "name": "yaakov hatam",
        "company": "@codestackacademy ",
        "blog": "",
        "location": "Jerusalem, Israel",
        "email": null,
        "hireable": true,
        "bio": null,
        "twitter_username": null,
        "public_repos": 54,
        "public_gists": 13,
        "followers": 66,
        "following": 7,
        "created_at": "2014-03-18T11:04:24Z",
        "updated_at": "2021-01-24T15:47:25Z"
    });
});

function StudentProfile(props) {
    const { username, bookmarked } = props;
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
                <Button basic color='blue' onClick={(e) => props.onBookmarkUpdate(username)}>
                    <Icon name={'star' + (!bookmarked ? ' outline' : '')} /> Bookmark
                </Button>
            </Card.Content>
        </Card> : <></>
    );
}

export default StudentProfile;