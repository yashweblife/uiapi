import type { Meta, StoryObj } from '@storybook/react-vite';

import List from '../components/List/List';

const meta = {
  component: List,
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
};