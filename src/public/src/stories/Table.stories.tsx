import type { Meta, StoryObj } from '@storybook/react-vite';

import Index, { TableColumn, TableFooter, TableHeader, TableRow } from '../components/Table/index';

const meta = {
  component: Index,
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      <>
        <TableHeader headers={['Header 1', 'Header 2', 'Header 3']} />
        <TableRow>
          <TableColumn>Cell 1</TableColumn>
          <TableColumn>Cell 2</TableColumn>
          <TableColumn>Cell 2</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>Cell 1</TableColumn>
          <TableColumn>Cell 2</TableColumn>
          <TableColumn>Cell 2</TableColumn>
        </TableRow>
        <TableRow>
          <TableColumn>Cell 1</TableColumn>
          <TableColumn>Cell 2</TableColumn>
          <TableColumn>Cell 2</TableColumn>
        </TableRow>
        <TableFooter>
          <TableRow>
            <TableColumn></TableColumn>
            <TableColumn></TableColumn>
            <TableColumn>Footer 1</TableColumn>
          </TableRow>
        </TableFooter>
      </>
  }
};