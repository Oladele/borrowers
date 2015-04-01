import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    function() {
      var desc = this.get('model.description');
      return !Ember.isEmpty(desc);
    } 
  ),
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
