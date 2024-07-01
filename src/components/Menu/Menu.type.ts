export type MenuPropsType = {
  id?: string;
  children: React.ReactNode;
  options: {
    label: string;
    icon: React.ReactNode;
    type?: 'text' | 'button';
    onClick: () => void;
  }[];
  anchor?: 'top' | 'bottom' | 'left' | 'right';
  willUseParentPosition?: boolean;
};
