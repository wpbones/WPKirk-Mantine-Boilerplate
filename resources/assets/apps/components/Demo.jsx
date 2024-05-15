import { Center, Stack, Flex, Grid, Burger, Paper, Container } from '@mantine/core';

import classes from './Demo.module.scss';

export const Demo = () => {
  return (
    <Center w={'100%'} h={'80dvh'}>
      <Paper p={'md'} radius={'lg'} shadow="md" withBorder w={'50%'}>
        <Stack>
          <div className={classes.title}>Header</div>
          <Grid>
            <Grid.Col span={'content'}>
              <div>Sidebar</div>
            </Grid.Col>
            <Grid.Col span={'auto'}>
              <div>Body</div>
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>
    </Center>
  );
};
