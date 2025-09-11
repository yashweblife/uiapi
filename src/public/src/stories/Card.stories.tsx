import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../components/Button/Button';
import Card, { CardAction, CardBody, CardHeader } from '../components/Card';
import Table, { TableColumn, TableHeader, TableRow } from '../components/Table';

const meta = {
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <>
            <CardHeader>
                <h1>Card Header</h1>
                <Button click={() => { }}>Button</Button>
            </CardHeader>
            <CardBody>
                <Table>
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
                </Table>
            </CardBody>
            <CardAction>
                <Button click={() => { }}>Button</Button>
                <Button variant="secondary" click={() => { }}>Button</Button>
            </CardAction>
        </>
    }
};