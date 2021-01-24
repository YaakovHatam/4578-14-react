import './App.css';
import StudentProfile from './components/student-profile';
import { Segment } from 'semantic-ui-react'

function App() {
    const usersArray = ['Yohan-jb26', 'saifsandouka', 'yonimendel', 'YaakovHatam', 'alexandreguz', 'Egegas', 'ArielgGodlevsky'];
    return (
        <Segment.Group horizontal>
            {usersArray.map(u => <Segment key={u}><StudentProfile username={u} /></Segment>)}
        </Segment.Group>
    );
}

export default App;
