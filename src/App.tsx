import { useState } from "react";
import "./App.css";
import MemberForm from "./Components/form-component";
import MembersTable from "./Components/table-component";
import { Member } from "./types";
import EditFormModal from "./Components/editModal";
import { Grid } from "@mui/material";

function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [memberToEdit, setMemberToEdit] = useState<Member | null>(null);
  const [open, setOpen] = useState(false);

  const submitForm = (data: Member) => {
    data.memberId = members.length + 1;
    setMembers([...members, data]);
  };

  const onEditModalOpen = (rowToEdit: number) => {
    setMemberToEdit(members[rowToEdit]);
    setOpen(true);
  };

  const onMemberEdit = (data: Member) => {
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
      <Grid container justifyContent="center" py="1.5rem" minHeight="100vh">
        <Grid item xs={12} md={7} width="100%" marginBottom={4}>
          <div>
            <MemberForm onSubmit={submitForm} />
          </div>
        </Grid>
        <Grid item xs={12} md={7} width="100%" marginBottom={4}>
        <div>
          <MembersTable members={members} openEditModal={onEditModalOpen} />
        </div>
        </Grid>

        {memberToEdit && (
          <EditFormModal
            member={memberToEdit}
            onSubmit={onMemberEdit}
            isOpen={open}
            onCancel={onModalClose}
          />
        )}
      </Grid>
    </div>
  );
}

export default App;
