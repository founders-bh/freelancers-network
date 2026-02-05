# Freelancers Network

The self-sustainable, not-for-profit, open-source network for freelancers.

## Contents

- [Vike](#vike)
  - [Plus files](#plus-files)
  - [Routing](#routing)
  - [SSR](#ssr)
  - [HTML Streaming](#html-streaming)
- [Photon](#photon)

## Vike

This app is ready to start. It's powered by [Vike](https://vike.dev) and [Vue](https://vuejs.org/guide/quick-start.html).

### Plus files

[The + files are the interface](https://vike.dev/config) between Vike and your code.

- [`+config.ts`](https://vike.dev/settings) — Settings (e.g. `<title>`)
- [`+Page.vue`](https://vike.dev/Page) — The `<Page>` component
- [`+data.ts`](https://vike.dev/data) — Fetching data (for your `<Page>` component)
- [`+Layout.vue`](https://vike.dev/Layout) — The `<Layout>` component (wraps your `<Page>` components)
- [`+Head.vue`](https://vike.dev/Head) - Sets `<head>` tags
- [`/pages/_error/+Page.vue`](https://vike.dev/error-page) — The error page (rendered when an error occurs)
- [`+onPageTransitionStart.ts`](https://vike.dev/onPageTransitionStart) and `+onPageTransitionEnd.ts` — For page transition animations

### Routing

[Vike's built-in router](https://vike.dev/routing) lets you choose between:

- [Filesystem Routing](https://vike.dev/filesystem-routing) (the URL of a page is determined based on where its `+Page.vue` file is located on the filesystem)
- [Route Strings](https://vike.dev/route-string)
- [Route Functions](https://vike.dev/route-function)

### SSR

SSR is enabled by default. You can [disable it](https://vike.dev/ssr) for all or specific pages.

### HTML Streaming

You can [enable/disable HTML streaming](https://vike.dev/stream) for all or specific pages.

## Photon

[Photon](https://photonjs.dev) is a next-generation infrastructure for deploying JavaScript servers.

See [Introducing Photon](https://vike.dev/blog/photon) and [Why Photon](https://photonjs.dev/why) to learn more.


## License

Copyright (C) 2026 Freelance Founders for Business Systems.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, version 3.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received [a copy of the GNU Affero General Public License along with this program](./LICENSE). If not, see <https://www.gnu.org/licenses/>.
