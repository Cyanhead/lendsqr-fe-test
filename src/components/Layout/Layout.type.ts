import { CSSProperties } from "react";
import { BaseChildrenPropsType, CleanedBaseDivPropsType } from "../../toolkit/react";

type LayoutPropsType = {
  readonly alignItems?: CSSProperties['alignItems'];
  readonly gap?: CSSProperties['gap'];
  readonly width?: CSSProperties['width'];
  readonly style?: string;
  readonly hasBoxShadow?: boolean;
};

type CombinedLayoutPropsType = LayoutPropsType & BaseChildrenPropsType & CleanedBaseDivPropsType;

export type FlexRowPropsType = CombinedLayoutPropsType & {
  readonly justifyContent?: CSSProperties['justifyContent'];
  readonly flexWrap?: CSSProperties['flexWrap'];
};

export type FlexColumnPropsType = CombinedLayoutPropsType & {
  readonly justifyContent?: CSSProperties['justifyContent'];
};

export type GridRowPropsType = CombinedLayoutPropsType & {
  readonly templateColumns?: CSSProperties['gridTemplateColumns'];
  readonly smallScreenTemplateColumns?: CSSProperties['gridTemplateColumns'];
  readonly justifyItems?: CSSProperties['justifyItems'];
};

export type ContainerPropsType = BaseChildrenPropsType & CleanedBaseDivPropsType & { readonly hasBoxShadow?: boolean; }
