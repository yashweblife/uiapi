import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../components/Button/Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    click: () => {},
    props: {},
    children: 'Button'
  }
};
export const Primary: Story = {
  args: {
    click: () => {},
    variant: "primary",
    props: {style:{backgroundColor:'red'}},
    children: 'Button'
  }
};
export const Secondary: Story = {
  args: {
    click: () => {},
    variant: "secondary",
    props: {style:{backgroundColor:'red'}},
    children: 'Button'
  }
};

export const Small: Story = {
  args: {
    click: () => {},
    size: "small",
    props: {style:{backgroundColor:'red'}},
    children: 'Button'
  }
};
export const Medium: Story = {
  args: {
    click: () => {},
    size: "medium",
    props: {style:{backgroundColor:'red'}},
    children: 'Button'
  }
};
export const Large: Story = {
  args: {
    click: () => {},
    size: "large",
    props: {style:{backgroundColor:'red'}},
    children: 'Button'
  }
};