import './App.css';
import StudentProfile from './components/student-profile';
import { Segment } from 'semantic-ui-react'
import { useState } from 'react';

function App() {
    const usersArray = ['yohan-jb26', 'saifsandouka', 'yonimendel', 'YaakovHatam', 'alexandreguz', 'Egegas', 'ArielgGodlevsky'];
    const [bookmarkedUsers, setBookmarkedUsers] = useState(['yohan-jb26']);

    const toggleBookmarked = (username) => {
        const userIndex = bookmarkedUsers.indexOf(username);
        if (userIndex > -1) {
            debugger;
            bookmarkedUsers.splice(userIndex, 1)
            setBookmarkedUsers([...bookmarkedUsers]);
        } else {
            setBookmarkedUsers([...bookmarkedUsers, username]);
        }

        console.log(bookmarkedUsers);
    }
    return (
        <Segment.Group horizontal>
            {usersArray.map(u => <Segment key={u}><StudentProfile
                bookmarked={bookmarkedUsers.indexOf(u) > -1}
                onBookmarkUpdate={toggleBookmarked}
                username={u} />
            </Segment>)}
        </Segment.Group>
    );
}

export default App;
