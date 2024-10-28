import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui',
  styleUrl: 'ui.css',
  shadow: true,
})
export class ui {
  @Prop() text: string;

  render() {
    return <div>{this.text}</div>;
  }
}
