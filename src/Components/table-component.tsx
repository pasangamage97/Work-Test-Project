import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { type MRT_ColumnDef } from "material-react-table";
import { Member } from "../types";
import { MenuItem } from "@mui/material";

const MembersTable: React.FC<{
  members: Member[];
  openEditModal: (rowId: number) => void;
}> = ({ members, openEditModal }) => {
  console.log(members);
  const columns = useMemo<MRT_ColumnDef<Member>[]>(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "dob",
        header: "Date of Birth",
      },
      {
        accessorKey: "gender",
        header: "Gender",
      },
      {
        header: "Membership Fee Paid ?",
        accessorFn: (originalRow) => {
          if (originalRow.feePaid) return "Paid";
          else return "Not Paid";
        },
        id: "feePaid",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={members}
      enableRowActions
      renderRowActionMenuItems={({ row }) => [
        <MenuItem key="edit" onClick={() => openEditModal(row.index)}>
          Edit
        </MenuItem>,
      ]}
    />
  );
};

export default MembersTable;
