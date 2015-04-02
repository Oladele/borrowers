import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed.notEmpty('model.description'),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        console.log ("this is valid")
        return  true;
      } else {
        this.set('errorMessage', 'You have to fill description');
      }
      return false;
    } 
  }
});
