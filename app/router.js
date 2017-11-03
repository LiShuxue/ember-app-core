import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('application-loading');
  this.route('application-error');
  this.route('first-page');
  this.route('second-page');
});

export default Router;
