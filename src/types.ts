export enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export interface Member {
  firstName: string;
  lastName: string;
  dob: string;
  feePaid: boolean;
  gender: GenderEnum;
}
