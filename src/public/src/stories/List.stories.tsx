import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../components/Button/Button';
import List, { Item, ListFooter, ListHeader } from '../components/List/List';

const meta = {
  component: List,
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>
      <ListHeader title="List Header" />
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 4</Item>
      <Item>Item 5
        <Button
          click={() => { }}
        >
          Button
        </Button>
      </Item>
      <ListFooter>Footer</ListFooter>
    </>
  }
};
export const Numbered: Story = {
  args: {
    variant: "number",
    children: <>
      <ListHeader title="List Header" />
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 4</Item>
      <Item>Item 5</Item>
      <ListFooter>Footer</ListFooter>
    </>
  }
};
export const Bulleted: Story = {
  args: {
    variant: "bullet",
    children: <>
      <ListHeader title="List Header" />
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
      <Item>Item 4</Item>
      <Item>Item 5</Item>
      <ListFooter>Footer</ListFooter>
    </>
  }
};