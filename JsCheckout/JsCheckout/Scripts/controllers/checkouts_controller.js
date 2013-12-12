Checkouts.CheckoutsController = Ember.ArrayController.extend({
    actions: {
        createOrderRow: function () {
            var beskrivning = this.get('newOrderRow');
            if (!beskrivning.trim()) { return; }

            // Create the new model
            var checkout = this.store.createRecord('checkout', {
                beskrivning: beskrivning,
                antal: 40.0,
                kostnad: 400,
                moms: 25,
                totalt: 0
            });

            // Clear the  text field
            this.set('newOrderRow', '');

            // Save the new model
            checkout.save();
        },
        
        totaltotal: function () {
            var remaining = this.get('kostnad');
            return remaining;
        }.property('@each.totalt')
    }
});