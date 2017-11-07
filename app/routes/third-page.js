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
        },
        testCreateRecord() {
            //在本地store中创建记录
            let user = this.get('store').createRecord('user', {
                id: 3,
                firstName: 'Li',
                lastName: 'Shuxue3-mirage',
                email: 'baidu@qq.com',
                isTest: false
            });
            //持久化记录，会发送post请求
            user.save();
        },
        testUpdateRecord() {
            this.get('store').findRecord('user', 1).then(function(tyrion) {
                tyrion.set('firstName', "Yollo");
            });
        },
        testDeleteRecord() {
            this.get('store').findRecord('user', 2).then(function(user) {
                user.deleteRecord();
                Ember.Logger.log('isDelete : ' + user.get('isDeleted')); // => true
                user.save();     //持久化，发送请求

                //上面的操作可以用下面一行实现
                //ser.destroyRecord();
            });
        }
    }
});
