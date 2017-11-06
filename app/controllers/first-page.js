import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        testConfirmActionFirstpage() {
            Ember.Logger.log('this is test confirm action called by component in first page');
        },
        testCancleActionFirstpage() {
            Ember.Logger.log('this is test cancle action called by component in first page');
        }
    }
});
