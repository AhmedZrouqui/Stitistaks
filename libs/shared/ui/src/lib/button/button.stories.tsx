import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';

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
