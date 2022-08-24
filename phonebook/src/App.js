
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:"567890-09876" },{
      name: 'Arto Hllas', number:"67890-09876" 
    }
  ]) 
  const [newName, setNewName] = useState('')
  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div> {
        // Map makes new empty array and "x inside of paranthesis ma chai sabai array ko elements one by one ahucha 
        // .<li> le bulllet ko form ma ahucha.... "
       
        persons.map((x)=>(
          <li>{x.name} {x.number}</li>
        ))}
        
      </div>
     
  {/* {[<li>manjila</li>,<li>niru</li>]} */}
    
    </div>
  )
}

export default App