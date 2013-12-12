Checkouts.Router.map(function () {
    this.resource('checkouts', { path: '/' });
});

Checkouts.CheckoutsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('checkout');
    }
});