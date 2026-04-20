# WPKirk-Mantine-Boilerplate

A full admin application built on **[Mantine](https://mantine.dev) 8.x**, end to end: theming,
dark mode toggle, tabs, form validation, modals, notifications, and a DataTable backed by a real
WordPress AJAX endpoint. Use this when you want a modern, polished admin UI without reinventing
the primitives.

> **Why Mantine 8 and not 9?** Mantine 9 requires React 19, while WordPress core currently ships
> React 18 via `@wordpress/element`. Staying on 8 keeps us aligned with the WP runtime, avoids a
> second React bundle, and lets us use `createRoot` from `@wordpress/element`. WP Bones v3 will
> bump once WP core moves to React 19.

## What this demos

`resources/assets/apps/mantine-ui/index.tsx` wires a four-tab admin page:

- **Form tab** — `@mantine/form` with sync validation (min-length site name, regex email)
- **Table tab** — `mantine-datatable` + `useSWR`, fed by a real `admin-ajax.php` endpoint
  (`action=users`) that shapes `get_users()` into a typed `WPUser` interface
- **Modals tab** — `@mantine/modals`: `openConfirmModal` + plain `modals.open`
- **Notifications tab** — success / warning / error Mantine toasts
- **Theme & dark mode** — `theme.ts` with a custom `wpBlue` palette; a sun/moon toggle flips
  `useMantineColorScheme`

**Key files to read first:**

| File | What to look at |
| --- | --- |
| `resources/assets/apps/mantine-ui/index.tsx` | MantineProvider, tabs layout, theme wiring |
| `resources/assets/apps/mantine-ui/theme.ts` | Custom palette + `scale: 0.85` density tuning |
| `resources/assets/apps/mantine-ui/scope-reset.scss` | Undoes Mantine's global `body` styles inside WP admin |
| `resources/assets/apps/mantine-ui/use-ajax.ts` | Typed `useSWR` wrapper over `admin-ajax.php` |
| `plugin/Ajax/MyAjax.php` | WP AJAX provider returning shaped `WPUser[]` |
| `plugin/Http/Controllers/Dashboard/DashboardController.php` | Enqueues the app + nonce |

## Smoke test (manual, ~30s)

With the plugin active:

1. Log in to `wp-admin` and open **WP Kirk Mantine → Main View**.
2. Open devtools Console — check `window.WPKirkMantine.nonce` is defined.
3. Click **Form** tab — try submitting an empty form → validation errors appear; submit a valid
   one → success notification.
4. Click **Table** tab — a DataTable with real WP users renders (SWR loading → populated).
5. Click **Modals** tab → both buttons open Mantine modals; confirm modal fires a notification.
6. Click **Notifications** tab → all three buttons render a notification in the bottom-right.
7. Toggle the sun/moon in the header → whole UI switches between light and dark.

If any of the above fail: check the devtools Console, `wp-content/debug.log`, and verify the
plugin pulled WPBones ≥ 2.0.1 via composer (the v2.0.0 had an inline-script routing bug fixed
in v2.0.1).

## Use as a template

```sh
# 1. clone from the GitHub template
gh repo create my-mantine-plugin --template wpbones/WPKirk-Mantine-Boilerplate --public --clone
cd my-mantine-plugin

# 2. rename the PHP namespace + plugin slug
composer install
php bones rename "My Mantine Plugin"

# 3. build + activate
yarn install && yarn build
wp plugin activate my-mantine-plugin
```

Replace the contents of `apps/mantine-ui/` with your screens. Keep `scope-reset.scss` — without
it, Mantine's global `body` rules leak into the surrounding WP admin UI.

## Framework surface exercised

This boilerplate is the **regression bed for the full-admin-app pattern**:

- `View::withAdminAppsScript()` + `withInlineScript()` on the same handle (exercises the
  inline-scripts routing fixed in WPBones v2.0.1)
- `View::withAdminStyle()` for `prism` highlighting + admin CSS
- `plugin/Ajax/` AJAX provider with nonce verification via `WPKirkMantine.nonce`
- Folder-based app entry `apps/mantine-ui/` (multi-file `index.tsx` + tabs + hooks)
- `wp_set_script_translations()` for `@wordpress/i18n` strings inside the Mantine UI
