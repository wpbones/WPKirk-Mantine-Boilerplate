import { Badge, Text } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { __ } from '@wordpress/i18n';

import { useAjax } from './use-ajax';

interface WPUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const TableTab = () => {
  const { data, error, isLoading } = useAjax<WPUser[]>('users');

  if (error) {
    return <Text c="red">{error.message}</Text>;
  }

  return (
    <DataTable
      withTableBorder
      borderRadius="md"
      striped
      highlightOnHover
      height={320}
      fetching={isLoading}
      records={data ?? []}
      columns={[
        { accessor: 'id', title: '#', width: 60, textAlign: 'right' },
        { accessor: 'name', title: __('Name', 'wp-kirk') },
        { accessor: 'email', title: __('Email', 'wp-kirk') },
        {
          accessor: 'role',
          title: __('Role', 'wp-kirk'),
          render: ({ role }) => (
            <Badge color={role === 'administrator' ? 'blue' : 'gray'} variant="light">
              {role}
            </Badge>
          ),
        },
      ]}
    />
  );
};
