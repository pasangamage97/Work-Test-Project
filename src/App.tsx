import { useState } from "react";
import "./App.css";
import MemberForm from "./Components/form-component";
import MembersTable from "./Components/table-component";
import { GenderEnum, Member } from "./types";
import EditFormModal from "./Components/editModal";

function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [memberToEdit, setMemberToEdit] = useState<Member | null>(null);
  const [open, setOpen] = useState(false);

  const submitForm = (data: Member) => {
    console.log(data);
    data.memberId = members.length + 1;
    setMembers([...members, data]);
  };

  const onEditModalOpen = (rowToEdit: number) => {
    setMemberToEdit(members[rowToEdit]);
    setOpen(true);
  };

  const onMemberEdit = (data: Member) => {
    console.log(data);
    setMembers(
      members.map((member) => {
        if (member.memberId == data.memberId) {
          return data;
        } else {
          return member;
        }
      })
    );
    setMemberToEdit(null);
    setOpen(false);
  };

  const onModalClose = () => {
    setMemberToEdit(null);
    setOpen(false);
  };

  return (
    <div className="App">
      <MemberForm onSubmit={submitForm} />
      <MembersTable members={members} openEditModal={onEditModalOpen} />
      {memberToEdit && (
        <EditFormModal
          member={memberToEdit}
          onSubmit={onMemberEdit}
          isOpen={open}
          onCancel={onModalClose}
        />
      )}
    </div>
  );
}

export default App;
