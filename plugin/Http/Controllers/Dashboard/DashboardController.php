<?php

namespace WPKirk\Http\Controllers\Dashboard;

use WPKirk\Http\Controllers\Controller;

class DashboardController extends Controller
{
  public function index()
  {
    $nonce = wp_create_nonce('wp-kirk-mantine');

    return WPKirk()
      ->view('dashboard.index')
      ->withAdminStyle('prism')
      ->withAdminScript('prism')
      ->withAdminStyle('wp-kirk-common')
      ->withAdminAppsScript('dashboard', true)
      ->withInlineScript('dashboard', 'const WPKirkMantine = ' . json_encode(['nonce' => $nonce]) . ';', 'before');
  }
}
