import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Checkbox,
  Select,
  FormControl,
  InputLabel,
  FormControlLabel,
  Button,
  MenuItem,
} from "@mui/material";
import { GenderEnum, Member } from "../types";

interface MemberFormProps {
  member?: Member;
  onSubmit: (member: Member) => void;
}

const MemberForm: React.FC<MemberFormProps> = ({ member, onSubmit }) => {
  const { register, handleSubmit, control, reset } = useForm<Member>({
    defaultValues: member || {
      firstName: "",
      lastName: "",
      dob: "2000-01-01",
      feePaid: false,
      gender: GenderEnum.other,
    },
  });

  const onFormSubmit = (member: Member) => {
    onSubmit(member);
    reset();
  };

  return (
    <>
      <h2>Member Data</h2>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <TextField
          label="First Name"
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          {...register("lastName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
          fullWidth
          margin="normal"
        />
        <TextField
          type="date"
          label="Date of Birth"
          {...register("dob")}
          fullWidth
          margin="normal"
        />
        <Controller
          name="gender"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl fullWidth margin="normal" error={!!fieldState.error}>
              <InputLabel>Gender</InputLabel>
              <Select label="Gender" {...field}>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="feePaid"
          control={control}
          render={({ field, fieldState }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label="Membership Fee Paid"
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          {" "}
          Submit{" "}
        </Button>
      </form>
    </>
  );
};

export default MemberForm;
