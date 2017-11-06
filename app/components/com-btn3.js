import Ember from 'ember';

export default Ember.Component.extend({
    /* 
     * 自定义标签名
     * 默认情况下，每个组件是一个<div>元素，渲染后为<div id="ember180" class="ember-view">，
     * 使用自定义元素，渲染后为<a id="ember180" class="ember-view">
     */
    tagName: 'a',
    
    /*
     * 自定义类名
     * 通过设置classNames属性为一个字符串数组，可以指定组件元素的类名：
     * 1. classNames: ['primary']
     * 2. classNameBindings: ['isEnabled:enabled:disabled'],
     *    isEnabled: true
     * 3. classNameBindings: ['priority'],
     *    priority: 'highestPriority'
     */
    classNameBindings: ['isEnabled:enabled:disabled'],
    isEnabled: true,
    
    /*
     * 自定义属性
     * 通过attributeBindings可以绑定属性到代表组件的DOM元素：
     */
    attributeBindings: ['href'],
    href: "http://emberjs.com"
});
