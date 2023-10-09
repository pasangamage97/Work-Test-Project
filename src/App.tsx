import { useState } from 'react';
import './App.css';
import MemberForm from './Components/form-component';
import MembersTable from './Components/table-component';
import { GenderEnum, Member } from './types';

function App() {

  const [members, setMembers] = useState<Member[]>([]);
  const submitForm = (data:Member)=>{
    console.log(data);
    setMembers([...members,data]);
    
  }

  return (
    <div className="App">
      <MemberForm onSubmit={submitForm}/>
      <MembersTable members={members}/>
    </div>
  );
}

export default App;
