import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        testConfirmAction() {
            Ember.Logger.log('this is test confirm action called by component');
        },
        testCancleAction() {
            Ember.Logger.log('this is test cancle action called by component');
        }
    }
});
