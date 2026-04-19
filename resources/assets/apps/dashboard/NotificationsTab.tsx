import { Button, Group, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { __ } from '@wordpress/i18n';

export const NotificationsTab = () => {
  const show = (color: string, title: string, message: string) =>
    notifications.show({ title, message, color, withBorder: true });

  return (
    <Stack gap="md">
      <Group>
        <Button color="green" onClick={() => show('green', __('Success', 'wp-kirk'), __('All good.', 'wp-kirk'))}>
          {__('Success', 'wp-kirk')}
        </Button>
        <Button color="yellow" onClick={() => show('yellow', __('Warning', 'wp-kirk'), __('Careful now.', 'wp-kirk'))}>
          {__('Warning', 'wp-kirk')}
        </Button>
        <Button color="red" onClick={() => show('red', __('Error', 'wp-kirk'), __('Something broke.', 'wp-kirk'))}>
          {__('Error', 'wp-kirk')}
        </Button>
      </Group>
    </Stack>
  );
};
