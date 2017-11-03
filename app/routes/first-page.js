import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    beforeModel(transition) {
        // beforeModel() receives the current transition as an argument
        console.log('before model...');
        console.log(transition);
    },
    model() {
        console.log('model...')
        let test1 = [{
            title: 'first title',
            body: 'first body'
        }, {
            title: 'second title',
            body: 'second body'
        }, {
            title: 'third title',
            body: 'third body'
        }];
        let test2 = [{
            title: 'first title2',
            body: 'first body2'
        }, {
            title: 'second title2',
            body: 'second body2'
        }, {
            title: 'third title2',
            body: 'third body2'
        }];

        return RSVP.hash({
            test1,
            test2
        });
    },
    afterModel(model, transition) {
        //It receives the resolved model as the first parameter and the transition as the second one.
        console.log('after model...');
        console.log(model);
        console.log(transition);
    },
    redirect(model, transition) {
        console.log('redirect...');
    },

    actions: {
        willTransition(transition) {
            /**
             * transition.abort()
             * Any hook that has access to this transition object has the ability to immediately abort the transition by calling transition.abort(),
             * transition.retry()
             * and if the transition object is stored, it can be re-attempted at a later time by calling transition.retry().
             */
            console.log('willTransition...');
            console.log(transition);
        }
    }
});
