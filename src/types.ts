export interface IFormData {
  username: string;
  birth: string;
  city: string;
  checked: boolean;
  isMale: boolean;
}

export interface IFormProps {
  updateValues: (args: IFormData) => void;
}

export interface ICardProps {
  values: IFormData;
}

export interface IErrors {
  username?: string;
  birth?: string;
  checked?: boolean;
}
