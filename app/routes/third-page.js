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
        },
        testFindRecord() {
            const store = this.get('store');

            let findrecord = store.findRecord('user', 1).then( response => {   //先去store中找，如果没有再发请求拿
                Ember.Logger.log('findrecord success:');
                Ember.Logger.log(response);
            }).catch( error => {
                Ember.Logger.log('findrecord failed:');
                Ember.Logger.log(error);
            });

            let peekrecord = store.peekRecord('user', 1); // 只返回store中的数据
            let findall = store.findAll('user');
            let peekall = store.peekAll('user');      //findall和peekall最终返回的数据都是DS.RecordArray，需要用objectAt(index)来获取某一个。不能用arr[i]
        },
        testQueryRecord() {
            this.get('store').query('user', {
                "email": 'baidu@qq.com'
            }).then(function(peters) {

            });
        }
    }
});
