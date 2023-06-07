type THeaderProps = {
  column: string;
};

export const THeader = ({ column }: THeaderProps) => <th>{column}</th>;
