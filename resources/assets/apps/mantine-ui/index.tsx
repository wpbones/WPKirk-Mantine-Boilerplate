import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import 'mantine-datatable/styles.css';
import './scope-reset.scss';

import {
  ActionIcon,
  Container,
  Group,
  MantineProvider,
  Paper,
  Tabs,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { IconBell, IconForms, IconMoon, IconSun, IconTable, IconWindowMaximize } from '@tabler/icons-react';
import { createRoot } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { FormTab } from './FormTab';
import { ModalsTab } from './ModalsTab';
import { NotificationsTab } from './NotificationsTab';
import { TableTab } from './TableTab';
import { theme } from './theme';

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <ActionIcon variant="default" size="lg" onClick={toggleColorScheme} aria-label="Toggle color scheme">
      {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  );
};

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Notifications position="bottom-right" zIndex={999999} />
      <ModalsProvider>
        <Container size="lg" py="md">
          <Group justify="space-between" mb="md">
            <Title order={2} c="var(--mantine-color-text)">
              {__('Mantine Boilerplate', 'wp-kirk')}
            </Title>
            <ColorSchemeToggle />
          </Group>

          <Paper p="md" shadow="sm" withBorder>
            <Tabs defaultValue="form" keepMounted={false}>
              <Tabs.List>
                <Tabs.Tab value="form" leftSection={<IconForms size={16} />}>
                  {__('Form', 'wp-kirk')}
                </Tabs.Tab>
                <Tabs.Tab value="table" leftSection={<IconTable size={16} />}>
                  {__('Table', 'wp-kirk')}
                </Tabs.Tab>
                <Tabs.Tab value="modals" leftSection={<IconWindowMaximize size={16} />}>
                  {__('Modals', 'wp-kirk')}
                </Tabs.Tab>
                <Tabs.Tab value="notifications" leftSection={<IconBell size={16} />}>
                  {__('Notifications', 'wp-kirk')}
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="form" pt="lg">
                <FormTab />
              </Tabs.Panel>
              <Tabs.Panel value="table" pt="lg">
                <TableTab />
              </Tabs.Panel>
              <Tabs.Panel value="modals" pt="lg">
                <ModalsTab />
              </Tabs.Panel>
              <Tabs.Panel value="notifications" pt="lg">
                <NotificationsTab />
              </Tabs.Panel>
            </Tabs>
          </Paper>
        </Container>
      </ModalsProvider>
    </MantineProvider>
  );
};

const container = document.getElementById('mantine-ui-root');
if (container) {
  createRoot(container).render(<App />);
}
