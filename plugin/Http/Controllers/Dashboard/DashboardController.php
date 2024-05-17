<?php

namespace WPKirk\Http\Controllers\Dashboard;

use WPKirk\Http\Controllers\Controller;

class DashboardController extends Controller
{
  public function index()
  {
    return WPKirk()
      ->view('dashboard.index')
      ->withLocalizeScripts('app', 'WPKirkMantine', [
        'nonce' => wp_create_nonce('wp-kirk-mantine'),
      ])
      ->withAdminAppsScripts('app', true);
  }
}
