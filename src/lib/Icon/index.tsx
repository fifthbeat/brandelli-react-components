import * as React from 'react';
import { Icon } from './styles';

interface IconProps {
 /** Define position and icon's label */
 label?: {pos: string, text: string};
 /** Define img to load */
 img: string | React.ReactSVGElement;
 /** Define if icon is filled or outlined */
 theme?: 'outline' | 'fill';
 /** Define icon's color */
 color?: string;
 /** Define component size */
 size?: string;
}

export default class extends React.Component<IconProps, {}>{

  constructor(props: IconProps) {
  super(props);
  this.state = {};
  }


  render() {
    const {label, img} = this.props;
    return (
      <Icon {...this.props}>
        {img}
        {label && <span>{label.text}</span>}
      </Icon>
    );
  }
}
