export default function () {
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    // this.get('/posts');                // Collection
    // this.get('/posts/:id');
    // this.post('/posts');               // Creating a resource
    // this.put('/posts/:id');            // Update a resource, or this.patch
    // this.del('/posts/:id');            // Remove a resource

    // store.findRecord('post', 1).then(function(post){ }); The JSON API adapter will automatically send a GET request to /posts/1.

    this.namespace = '/api';

    // 注意对象中一定要声明 type: 'users', 否则就报错
    // 驼峰法命名的属性，这里要用横线-隔开。除id外所有的属性都写在attributes中
    let users = [{
        type: 'users',
        id: 1,
        attributes: {
            "first-name": 'Li',
            "last-name": 'Shuxue',
            email: '123@qq.com',
            "is-test": true
        }
    }, {
        type: 'users',
        id: 2,
        attributes: {
            "first-name": 'Li',
            "last-name": 'Shuxue2',
            email: '123@qq.com',
            "is-test": true
        }
    }];

    this.get('/users', function () {
        return {
            data: users
        };
    });
}