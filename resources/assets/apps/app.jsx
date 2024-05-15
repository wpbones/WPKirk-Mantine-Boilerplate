const { render } = wp.element;

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Demo } from './components/Demo';

const MyApp = () => {
  return (
    <MantineProvider>
      <BrowserRouter basename="/wp-admin/">
        <Routes>
          <Route path="/admin.php" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};

render(<MyApp />, document.getElementById('react-app'));
