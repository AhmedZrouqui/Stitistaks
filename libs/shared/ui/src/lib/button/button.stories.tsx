import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {onClick : { action: "onClick" }}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary'
};

export const Secondary = Template.bind({});
Secondary.args={
  ...Primary.args,
  label: 'Secondary'
}
