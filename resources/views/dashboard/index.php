<!--
 |
 | In $plugin you'll find an instance of Plugin class.
 | If you'd like can pass variable to this view, for example:
 |
 | return PluginClassName()->view( 'dashboard.index', [ 'var' => 'value' ] );
 |
-->

<?php ob_start() ?>

<div class="wp-kirk wrap wp-kirk-sample">

  <div class="wp-kirk-toc-content">

    <?php wpkirk_section(__('Live Demo', 'wp-kirk')); ?>

    <div id="mantine-ui-root"></div>

    <?php wpkirk_section(__('Package.json', 'wp-kirk')); ?>
    <?php wpkirk_code('@/package.json'); ?>

    <?php wpkirk_section(__('React Entry Point', 'wp-kirk')); ?>
    <?php wpkirk_code('@/resources/assets/apps/mantine-ui/index.tsx'); ?>

    <?php wpkirk_section(__('Theme', 'wp-kirk')); ?>
    <?php wpkirk_code('@/resources/assets/apps/mantine-ui/theme.ts'); ?>

    <?php wpkirk_section(__('AJAX Hook (SWR + typed)', 'wp-kirk')); ?>
    <?php wpkirk_code('@/resources/assets/apps/mantine-ui/use-ajax.ts'); ?>

    <?php wpkirk_section(__('Form Tab', 'wp-kirk')); ?>
    <?php wpkirk_code('@/resources/assets/apps/mantine-ui/FormTab.tsx'); ?>

    <?php wpkirk_section(__('Table Tab', 'wp-kirk')); ?>
    <?php wpkirk_code('@/resources/assets/apps/mantine-ui/TableTab.tsx'); ?>

    <?php wpkirk_section(__('Modals Tab', 'wp-kirk')); ?>
    <?php wpkirk_code('@/resources/assets/apps/mantine-ui/ModalsTab.tsx'); ?>

    <?php wpkirk_section(__('Notifications Tab', 'wp-kirk')); ?>
    <?php wpkirk_code('@/resources/assets/apps/mantine-ui/NotificationsTab.tsx'); ?>

    <?php wpkirk_section(__('Controller', 'wp-kirk')); ?>
    <?php wpkirk_code('@/plugin/Http/Controllers/Dashboard/DashboardController.php'); ?>

    <?php wpkirk_section(__('AJAX Provider', 'wp-kirk')); ?>
    <?php wpkirk_code('@/plugin/Ajax/MyAjax.php'); ?>

    <?php wpkirk_section(__('Developing', 'wp-kirk')); ?>
    <?php wpkirk_code('yarn dev', ['language' => 'sh']); ?>

    <?php wpkirk_section(__('Build', 'wp-kirk')); ?>
    <?php wpkirk_code('yarn build', ['language' => 'sh']); ?>

  </div>

  <?php wpkirk_toc('Mantine UI') ?>

</div>
