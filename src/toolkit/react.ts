import * as React from 'react';

export type StyleArray = React.CSSProperties | undefined | StyleArray[];
export type BaseChildrenPropsType = {
  readonly children?: React.ReactNode;
};

export type HTMLNodePropsType<T extends HTMLElement> = React.DetailedHTMLProps<
  React.HTMLAttributes<T>,
  T
>;

export type CleanedHTMLNodePropsType<T extends HTMLElement> = Omit<
  HTMLNodePropsType<T>,
  'ref' | 'className' | 'align'
>;

// Export types for various HTML elements
export type CleanedBaseDivPropsType = CleanedHTMLNodePropsType<HTMLDivElement>;
export type CleanedBaseReleasePropsType =
  CleanedHTMLNodePropsType<HTMLImageElement>;
export type CleanedBaseAnchorPropsType =
  CleanedHTMLNodePropsType<HTMLAnchorElement>;
export type CleanedBaseArticlePropsType = CleanedHTMLNodePropsType<HTMLElement>;
export type CleanedTextAreaPropsType =
  CleanedHTMLNodePropsType<HTMLTextAreaElement>;

export type CleanedInputPropsType = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'className'
> &
  CleanedHTMLNodePropsType<HTMLInputElement>;
