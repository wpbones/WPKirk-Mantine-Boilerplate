<?php

namespace WPKirk\Ajax;

use WPKirk\WPBones\Foundation\WordPressAjaxServiceProvider as ServiceProvider;

class MyAjax extends ServiceProvider
{
  /**
   * Ajax actions available to both logged and not-logged users.
   * The boilerplate only needs logged-in endpoints, so this is empty.
   *
   * @var array
   */
  protected $trusted = [];

  /**
   * Ajax actions available only to logged-in users with $capability.
   *
   * @var array
   */
  protected $logged = ['users'];

  /**
   * Ajax actions available only to not-logged-in users (typically frontend).
   *
   * @var array
   */
  protected $notLogged = [];

  /**
   * Capability required to invoke logged-in actions.
   *
   * @var string
   */
  protected $capability = 'manage_options';

  /**
   * Expected request field that carries the nonce.
   *
   * @var string
   */
  protected $nonceKey = 'nonce';

  /**
   * Nonce hash used for verification. Must match the hash used by
   * Controllers when they inject the nonce into the page via
   * `withInlineScript('dashboard', 'const WPKirkMantine = ...')`.
   *
   * @var string
   */
  protected $nonceHash = 'wp-kirk-mantine';

  /**
   * Return a small list of real WordPress users for the DataTable demo.
   * Shaped to match the WPUser interface in the React code.
   */
  public function users()
  {
    $users = get_users([
      'number'  => 10,
      'orderby' => 'ID',
      'order'   => 'ASC',
    ]);

    $response = array_map(function ($user) {
      $roles = $user->roles;
      return [
        'id'    => (int) $user->ID,
        'name'  => $user->display_name,
        'email' => $user->user_email,
        'role'  => isset($roles[0]) ? $roles[0] : 'subscriber',
      ];
    }, $users);

    wp_send_json($response);
  }
}
