export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

// ../types/index.ts (or wherever ButtonProps is defined)
export interface ButtonProps {
  color?: string;
  fixedWidth?: boolean;
  onClick?: () => void; // Mark as optional
  children: React.ReactNode;
  disabled?: boolean; // Add this line
  name?: string;
}


export interface ImageProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  t: any;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}
