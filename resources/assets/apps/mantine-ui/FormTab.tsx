import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { __ } from '@wordpress/i18n';

interface SettingsForm {
  siteName: string;
  email: string;
}

export const FormTab = () => {
  const form = useForm<SettingsForm>({
    initialValues: { siteName: '', email: '' },
    validate: {
      siteName: (value) => (value.trim().length < 2 ? __('Too short', 'wp-kirk') : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : __('Invalid email', 'wp-kirk')),
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    notifications.show({
      title: __('Saved', 'wp-kirk'),
      message: `${values.siteName} · ${values.email}`,
      color: 'green',
    });
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          label={__('Site name', 'wp-kirk')}
          placeholder={__('My awesome site', 'wp-kirk')}
          {...form.getInputProps('siteName')}
        />
        <TextInput
          label={__('Email', 'wp-kirk')}
          placeholder="you@example.com"
          {...form.getInputProps('email')}
        />
        <Group justify="flex-end">
          <Button type="submit">{__('Save', 'wp-kirk')}</Button>
        </Group>
      </Stack>
    </form>
  );
};
