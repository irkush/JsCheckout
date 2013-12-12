Checkouts.Checkout = DS.Model.extend({
    beskrivning: DS.attr('string'),
    antal: DS.attr('float'),
    kostnad: DS.attr('float'),
    moms: DS.attr('integer'),
    totalt: DS.attr('float')
});

Checkouts.Checkout.FIXTURES = [
 {
     id: 1,
     beskrivning: 'Ember rad 1',
     antal: 10.0,
     kostnad: 100,
     moms: 25,
     totalt: 10 * 100
 },
 {
     id: 2,
     beskrivning: 'Ember rad 2',
     antal: 20.0,
     kostnad: 200,
     moms: 25,
     totalt: 20 * 200
 },
 {
     id: 3,
     beskrivning: 'Ember rad 3',
     antal: 30.0,
     kostnad: 300,
     moms: 25,
     totalt: 30 * 300
 }
];