import Ember from 'ember';

export default Ember.Service.extend({
    log(msg) {
        Ember.Logger.log(msg);
    }
});
