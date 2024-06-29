import { CSSProperties } from 'react';
import { CleanedBaseReleasePropsType } from '../../toolkit/react';

export type IconPropsType = CleanedBaseReleasePropsType & {
  readonly src: string;
  readonly alt?: string;
  readonly width?: CSSProperties['width'];
};
