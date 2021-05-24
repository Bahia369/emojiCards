import './App.css';
import contacts from "./data.js";
import Card from './Card';
import emojis from "./data.js"




function createCard(contact) {
    return ( < Card key = { contact.id }
        name = { contact.name.first }
        img = { contact.picture.medium }
        tel = { contact.phone }
        email = { contact.email }
        location = { contact.location.country }

        />
    );
}

// const sampleEmoji = {
//     "title": "Grinning",
//     "symbol": "😀",
//     "keywords": "grinning face happy smiley emotion emotion"
// };


// function App() {
//     return ( <
//         div className = "App" >
//         <
//         h1 > Emojis < /h1> <
//         div className = "row" >

//         <
//         /div> < /
//         div >
//     );
// }

// export default App;