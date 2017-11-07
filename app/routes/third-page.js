import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    model() {
        return this.store.findAll('user');
    },
    actions: {
        getUser() {
            Ember.Logger.log('get user..');
            const ajax = this.get('ajax');
            ajax.request('/users').then( response => {
                Ember.Logger.log(response);
            }).catch( error => {
                Ember.Logger.log(error);
            });
            //You can skip setting the method or type keys in your options object when calling request(url, options) by instead calling post(url, options), put(url, options), patch(url, options) or del(url, options).
            // this.get('ajax').post('/XXX', {
            //     data: {
            //         foo: 'bar'
            //     }
            // });
        }
    }
});
