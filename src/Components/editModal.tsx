import { Box, Modal } from "@mui/material";
import { Member } from "../types";
import {useState} from "react";
import MemberForm from "./form-component";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

interface MemberEditFormProps {
    member: Member;
    onSubmit: (member: Member) => void;
    isOpen : boolean;
    onCancel: ()=> void;
  }
const EditFormModal: React.FC<MemberEditFormProps> = ({ member, onSubmit, isOpen, onCancel}) => {
    


    return(
        <div>
        <Modal
        open={isOpen}
        onClose={onCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <MemberForm member={member} onSubmit={onSubmit}/>
        </Box>
        
      </Modal>
      </div>
    )

}

export default EditFormModal;

