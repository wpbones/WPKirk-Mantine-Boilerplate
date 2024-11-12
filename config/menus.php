<?php

/*
|--------------------------------------------------------------------------
| Plugin Menus routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the menu routes for a plugin.
| In this context, the route are the menu link.
|
*/

return [
  'wp_kirk_mantine_slug_menu' => [
    'page_title' => 'WP Kirk Mantine',
    'menu_title' => 'WP Kirk Mantine',
    'capability' => 'read',
    'icon' => 'wpbones-logo-menu.png',
    'items' => [
      [
        'page_title' => __('Main View', 'wp-kirk'),
        'menu_title' => __('Main View', 'wp-kirk'),
        'capability' => 'read',
        'route' => [
          'get' => 'Dashboard\DashboardController@index',
        ],
      ],
    ],
  ],
];
