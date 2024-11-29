import { Contacts } from './Contacts'
import { News } from './News' 
import { Cube } from './Cube';

export const Center = (props) => {

    const {user, addToChatWindows, removeFromChatWindows} = props;
    return(
        <section id='center'>
            <Contacts user={user} addToChatWindows={addToChatWindows} removeFromChatWindows={removeFromChatWindows}/>
            <News user={user}/>
            <Cube/>
        </section>
    )
}