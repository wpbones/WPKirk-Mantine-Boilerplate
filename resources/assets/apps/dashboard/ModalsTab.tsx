import { Button, Group, Stack, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { __ } from '@wordpress/i18n';

export const ModalsTab = () => {
  const openConfirm = () =>
    modals.openConfirmModal({
      title: __('Confirm action', 'wp-kirk'),
      children: (
        <Text size="sm">
          {__('This is a sample confirm modal. Click confirm to fire a notification.', 'wp-kirk')}
        </Text>
      ),
      labels: { confirm: __('Confirm', 'wp-kirk'), cancel: __('Cancel', 'wp-kirk') },
      onConfirm: () =>
        notifications.show({
          title: __('Confirmed', 'wp-kirk'),
          message: __('You clicked confirm.', 'wp-kirk'),
          color: 'green',
        }),
    });

  const openAlert = () =>
    modals.open({
      title: __('Alert', 'wp-kirk'),
      children: <Text size="sm">{__('Any Mantine component can be rendered inside.', 'wp-kirk')}</Text>,
    });

  return (
    <Stack gap="md">
      <Text>
        {__(
          'Open modals using the @mantine/modals manager — no local state juggling required.',
          'wp-kirk'
        )}
      </Text>
      <Group>
        <Button onClick={openConfirm}>{__('Open confirm modal', 'wp-kirk')}</Button>
        <Button variant="default" onClick={openAlert}>
          {__('Open alert modal', 'wp-kirk')}
        </Button>
      </Group>
    </Stack>
  );
};
