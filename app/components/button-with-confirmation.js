import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submitConfirm() {
            //call the onConfirm property to invoke the passed in action
            this.get('onConfirm')();
        },
        cancelConfirm() {
            this.get('onCancle')();
        }
    }
});
