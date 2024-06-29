import React, { CSSProperties } from 'react';

import {
  ContainerPropsType,
  FlexColumnPropsType,
  FlexRowPropsType,
  GridRowPropsType,
} from './Layout.type';
import styles from './Layout.module.scss';

const FlexRow = React.forwardRef<HTMLElement, FlexRowPropsType>(
  (
    {
      hasBoxShadow,
      children,
      style,
      alignItems,
      justifyContent,
      width,
      gap,
      flexWrap,
      ...divProps
    },
    ref
  ) => {
    const styleProps: CSSProperties = {
      '--align-items': alignItems,
      '--justify-content': justifyContent,
      '--width': width,
      '--gap': gap,
      '--flex-wrap': flexWrap,
    } as CSSProperties;

    const classNames = [
      styles.flexRow,
      style,
      hasBoxShadow && styles.boxShadow,
    ].join(' ');

    return (
      <div
        className={classNames}
        {...divProps}
        style={styleProps}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
      >
        {children}
      </div>
    );
  }
);

const FlexColumn = React.forwardRef<HTMLElement, FlexColumnPropsType>(
  (
    {
      hasBoxShadow,
      children,
      style,
      alignItems,
      justifyContent,
      width,
      gap,
      ...divProps
    },
    ref
  ) => {
    const styleProps: CSSProperties = {
      '--align-items': alignItems,
      '--justify-content': justifyContent,
      '--width': width,
      '--gap': gap,
    } as CSSProperties;
    const classNames = [
      styles.flexColumn,
      style,
      hasBoxShadow && styles.boxShadow,
    ].join(' ');

    return (
      <div
        className={classNames}
        style={styleProps}
        {...divProps}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
      >
        {children}
      </div>
    );
  }
);

const GridRow = React.forwardRef<HTMLElement, GridRowPropsType>(
  (
    {
      hasBoxShadow,
      style,
      width,
      gap,
      alignItems,
      templateColumns,
      smallScreenTemplateColumns,
      justifyItems,
      children,
      ...divProps
    },
    ref
  ) => {
    const styleProps: CSSProperties = {
      '--width': width,
      '--gap': gap,
      '--align-items': alignItems,
      '--justify-items': justifyItems,
      '--template-columns': templateColumns,
      '--small-screen-template-columns': smallScreenTemplateColumns,
    } as CSSProperties;

    const classNames = [
      styles.gridRow,
      style,
      hasBoxShadow && styles.boxShadow,
    ].join(' ');

    return (
      <div
        className={classNames}
        style={styleProps}
        {...divProps}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
      >
        {children}
      </div>
    );
  }
);

const Container = React.forwardRef<HTMLElement, ContainerPropsType>(
  ({ children, hasBoxShadow, ...divProps }, ref) => {
    const classNames = [
      styles.container,
      hasBoxShadow && styles.boxShadow,
    ].join(' ');

    return (
      <div
        className={classNames}
        {...divProps}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
      >
        {children}
      </div>
    );
  }
);

const All = {
  FlexRow,
  GridRow,
  FlexColumn,
  Container,
};
export default All;
