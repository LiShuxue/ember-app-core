import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    fullName: Ember.computed('firstName', 'lastName', function(){
        let firstName = this.get('firstName');
        let lastName = this.get('lastName');
        return `${firstName} ${lastName}`;
    }),
    email: DS.attr('string'),
    isTest: DS.attr('boolean', { defaultValue: false }),
    birthday: DS.attr('date', { 
        defaultValue() { return new Date(); } 
    })
});
