/**
 * Docs: https://docs.appcelerator.com/platform/latest/#!/api/Titanium.App.iOS.UserActivity
 *       https://docs.appcelerator.com/platform/latest/#!/api/Titanium.App.iOS.UserActivity-property-eligibleForPrediction
 *       https://docs.appcelerator.com/platform/latest/#!/api/Titanium.App.iOS.UserActivity-property-persistentIdentifier
 */

var itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({
 itemContentType: Ti.App.iOS.UTTYPE_IMAGE,
 title: 'Titanium Siri Shortcut Tutorial',
 contentDescription: 'Tech Example \nOn: ' + (new Date().toLocaleString()),
});

var activity = Ti.App.iOS.createUserActivity({
 activityType: 'com.appcelerator.sample.ti740',
 title: 'Siri shortcut activity',
 userInfo: {
   msg: 'hello world'
 },
 eligibleForSearch: true,
 eligibleForPrediction: true,
 persistentIdentifier: 'titanium_siri_identifier'
});

activity.addContentAttributeSet(itemAttr);

if (!activity.isSupported()) {
 alert('User Activities are not supported on this device!');
} else {
 activity.becomeCurrent();

 Ti.App.iOS.addEventListener('continueactivity', function(e) {
   Ti.API.info('continueactivity called');
   if (e.activityType === 'com.appcelerator.sample.ti740' && e.userInfo.msg) {
     alert(e.userInfo.msg);
   }
 });
}

activity.addEventListener('useractivitydeleted', function(e) {
 Ti.API.info('useractivitydeleted called');
 alert('user activity deleted');
});

function deleteOneBtnClk() {
 activity.deleteSavedUserActivitiesForPersistentIdentifiers(['titanium_siri_identifier']);
};

function identifierBtnClk() {
 Ti.API.info('persistent identfier is: ' +activity.persistentIdentifier);
 Ti.API.info('\neligibleForPrediction is: ' +activity.eligibleForPrediction);
};

function deleteAllBtnClk() {
 activity.deleteAllSavedUserActivities();
};
