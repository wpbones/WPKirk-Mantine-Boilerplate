import { Center, Tabs, Box, Stack, Flex, Group, Grid, Burger, Paper, Container } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { showNotification } from '@mantine/notifications';

import classes from './Demo.module.scss';

export const Demo = () => {
  return (
    <Center w={'100%'} h={'80dvh'}>
      <Paper p={'md'} radius={'lg'} shadow="md" withBorder w={'50%'}>
        <Stack>
          <div className={classes.title}>Header</div>

          <Tabs orientation="vertical" variant="outline" defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery">Smart</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" px="md">
              <GettingStartedExample />
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Paper>
    </Center>
  );
};

export function GettingStartedExample() {
  return (
    <DataTable
      height={300}
      withTableBorder
      borderRadius="md"
      withColumnBorders
      striped
      highlightOnHover
      // provide data
      records={[
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        // more records...
      ]}
      // define columns
      columns={[
        {
          accessor: 'id',
          // this column has a custom title
          title: '#',
          // right-align column
          textAlign: 'right',
        },
        { accessor: 'name' },
        {
          accessor: 'party',
          // this column has custom cell data rendering
          render: ({ party }) => (
            <Box fw={700} c={party === 'Democratic' ? 'blue' : 'red'}>
              {party.slice(0, 3).toUpperCase()}
            </Box>
          ),
        },
        { accessor: 'bornIn' },
      ]}
      // execute this callback when a row is clicked
      onRowClick={({ record: { name, party, bornIn } }) =>
        showNotification({
          title: `Clicked on ${name}`,
          message: `You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}`,
          withBorder: true,
        })
      }
    />
  );
}
