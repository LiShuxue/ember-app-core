import Ember from 'ember';

export default Ember.Component.extend({
    click() {
        Ember.Logger.log('click...');
        return false;  // 禁止冒泡
    },
    doubleClick() {
        Ember.Logger.log('double click...');
        return false;
    },
    mouseEnter() {
        Ember.Logger.log("mouse enter....");
        return false;
    },
    mouseLeave() {
        Ember.Logger.log("mouse leave....");
        return false;
    }
});
