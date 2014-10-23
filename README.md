Stripped down test of Richard Silverton's dumb collections package for Meteor: [richsilv:meteor-dumb-collections](https://github.com/richsilv/meteor-dumb-collections)

Assuming [Meteor](http://meteor.com) is installed:
```
% meteor run
```

1. Navigate to `http://localhost:3000`
1. Press `sync` button to sync the documents from the server
1. Reload the page with JS console open to see failure loading from `localStorage`

```
Exception in defer callback: Error: Meteor does not currently support objects other than ObjectID as ids
  ...
```
