ResolutionsStore = new Mongo.Collection('resolutions');

Meteor.publish('allResolutions', function() {
  return ResolutionsStore.find();
});

Meteor.publish('userResolutions', function() {
  return ResolutionsStore.find({user: this.userId});
});
