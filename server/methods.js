Meteor.methods({
  addResolution(resolution) {
    check(resolution, String);
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    ResolutionsStore.insert({
      complete: false,
      createdAt: new Date(),
      text: resolution,
      user: Meteor.userId(),
    });
  },
  toggleResolution(resolution){
    check(resolution, Object);
    if (Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('not-authorized');
    }
    ResolutionsStore.update(resolution._id, {
      $set: {complete: !resolution.complete}
    });
  },
  deleteResolution(resolution){
    check(resolution, Object);
    if (Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('not-authorized');
    }
    ResolutionsStore.remove(resolution._id);
  },
});
