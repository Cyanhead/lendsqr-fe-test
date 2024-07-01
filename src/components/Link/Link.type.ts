import { CleanedBaseAnchorPropsType } from '../../toolkit/react';

export type LinkPropsType = CleanedBaseAnchorPropsType & {
  isExternal?: boolean;
  to: string;
};
