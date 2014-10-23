Dumb = new DumbCollection('dumber')

if (Meteor.isClient) {
  Template.dumbTemplate.helpers({
    items: function () {
      return Dumb.find()
    }
  });

  Template.dumbTemplate.events({
    'click button': function () {
      Dumb.sync({failCallback: function(err) { console.log('FAIL', err); }});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    collection = Dumb//._collection
    if(!collection.find().count()) {
      collection.insert({name: 'foo'}) //_id: 'foo',  _id: collection._makeNewID(), 
      collection.insert({name: 'bar'})
      collection.insert({name: 'baz'})
    }
  });
}
