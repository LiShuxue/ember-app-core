import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    title: DS.attr(),
    artist: DS.attr(),
    songCount: DS.attr()
});
