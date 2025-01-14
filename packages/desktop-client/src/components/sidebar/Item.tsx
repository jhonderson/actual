import React, {
  type ComponentType,
  type MouseEventHandler,
  type ReactNode,
  type SVGProps,
} from 'react';

// eslint-disable-next-line no-restricted-imports
import { styles, colors, type CSSProperties } from '../../style';
import Block from '../common/Block';
import View from '../common/View';

import ItemContent from './ItemContent';

type ItemProps = {
  title: string;
  Icon: ComponentType<SVGProps<SVGElement>>;
  to?: string;
  children?: ReactNode;
  style?: CSSProperties;
  indent?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  forceHover?: boolean;
  forceActive?: boolean;
};

function Item({
  children,
  Icon,
  title,
  style,
  to,
  onClick,
  indent = 0,
  forceHover = false,
  forceActive = false,
}: ItemProps) {
  const hoverStyle = {
    backgroundColor: colors.n2,
  };

  const content = (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
      }}
    >
      <Icon width={15} height={15} />
      <Block style={{ marginLeft: 8 }}>{title}</Block>
      <View style={{ flex: 1 }} />
    </View>
  );

  return (
    <View style={{ flexShrink: 0, ...style }}>
      <ItemContent
        style={{
          ...styles.mediumText,
          paddingTop: 9,
          paddingBottom: 9,
          paddingLeft: 19 + indent,
          paddingRight: 10,
          textDecoration: 'none',
          color: colors.n9,
          ...(forceHover ? hoverStyle : {}),
          ':hover': hoverStyle,
        }}
        to={to}
        onClick={onClick}
        activeStyle={{
          borderLeft: '4px solid ' + colors.p8,
          paddingLeft: 19 + indent - 4,
          color: colors.p8,
        }}
        forceActive={forceActive}
      >
        {content}
      </ItemContent>
      {children ? <View style={{ marginTop: 5 }}>{children}</View> : null}
    </View>
  );
}

export default Item;
