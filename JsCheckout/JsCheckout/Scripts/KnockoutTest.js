function Item(description, quantity, amount, vat) {
    this.description = ko.observable(description);
    this.quantity = ko.observable(quantity);
    this.amount = ko.observable(amount);
    this.vat = ko.observable(vat);
    this.total = ko.dependentObservable(function () {
        return (this.amount() * ((vat / 100) + 1) * this.quantity()).toFixed(2);
    }, this);
}

function AppViewModel() {
    var self = this;

    self.items = ko.observableArray([new Item("Example", "1", "2", "3")]);
    self.addItem = function() {
        self.items.push(new Item("New", "", "", ""));
    };
    self.removeItem = function(item) {
        self.items.remove(item);
    };
    
    self.orderTotal = ko.dependentObservable(function () {
        var total = 0;
        ko.utils.arrayForEach(this.items(), function (item) {
            var value = parseFloat(item.total());
            if (!isNaN(value)) {
                total += value;
            }
        });
        return total.toFixed(2);
    }, self);
                                
}
ko.applyBindings(new AppViewModel());
