import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    beforeModel() {
        let secondPageController = this.controllerFor('second-page');
        secondPageController.set('testPromise', true);
        //secondPageController.set('testPromise', false);
    },
    model(){
        let promise = new RSVP.Promise( (resolve, reject) => {
            if(this.controllerFor('second-page').get('testPromise')){
                // on success
                Ember.run.later(function() {
                    resolve({ msg: 'we are success' });
                }, 5000);
            }else{
                // on failure
                Ember.run.later(function() {
                    reject({ msg: 'we are failure' });
                }, 5000);
            }
        });
        return promise;
    },
    actions: {
        loading(transition, originRoute) {
            Ember.Logger.log('route loading ...');
            Ember.Logger.log(transition);
            Ember.Logger.log(originRoute);
            return true; // 冒泡操作；allows the loading template to be shown
        },
        error(error, transition) {
            Ember.Logger.log('route error ...');
            Ember.Logger.log(error);
            Ember.Logger.log(transition);
            return true; // 冒泡操作；allows the error template to be shown
        }
    }
});
