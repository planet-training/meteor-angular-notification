Package.describe({
  name: 'planettraining:angular-notification',
  version: '1.1.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for angular-notification',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/planet-training/meteor-angular-notification.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('angular-notification/angular-notification.js');
});
