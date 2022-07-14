# Custom theme README

## Requirements

* [Barrio Theme](https://www.drupal.org/project/bootstrap_barrio)

* gulp CLI version >= 2.2.0

* npm >= 6.14.4

* node >= 10.19.0

## Description

This is a Barrio subtheme that simplifies integrating Bootstrap 5 SASS with Drupal.

This subtheme is compatible with Barrio Bootstrap 5 (5.5.x).

This subtheme overrides almost all Drupal CSS and replaces, where posible, Bootstrap's SASS variables.

## Installation

1. Install node.js and npm on your local.
2. Inside the theme directory, run `npm install --global gulp-cli`, then run `npm install`.
3. Change permissions on the node modules directory: `chmod -R u+x node_modules`
4. Update line 47 of the gulpfile.js file with your local domain to enable browser synch.
5. Install the theme and enable as default in the Drupal Admin UI.
5. On the the theme settings page in the Drupal Admin UI, set Load library to CDN.


## Compilation

To generate the CSS, just run `gulp` in the theme directory.
