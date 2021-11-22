import Button from './Button'

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    icon: {
      options: ['done', 'error', 'loading'],
      control: { type: 'radio' },
    },
  }
}

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({})

Main.args = {
  children: 'Hello',
}
// export const Done = () => <Button icon="done">Button</Button>;
// export const Error = () => <Button icon="error">Button</Button>;
// export const Loading = () => <Button icon="loading">Button</Button>;
