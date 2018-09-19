# Sample App for Titianum SDK 7.4.0

This sample is for showing the newest features introduced in Axway Titanium SDK 7.4.0. Of course this is not everything introduced in 7.4.0. Check out the full list of features, bugfixes and improvements in the [release notes](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_7.4.0.GA_Release_Note). 

## iOS
On iOS there are several new features and improvements that are great. 

- **New NSUserActivity APIs**: *eligibleForPrediction* and *persistentIdentifier* have been added. These provide a way for your user activities to be easily identified and suggested by Siri for shortcuts. You can see them in action in [`shortcut.js`](https://github.com/appcelerator-developer-relations/appc-sample-ti740/blob/master/app/styles/ios/shortcut.js).
- **New UserNotifications API**, or notification grouping has been added. iOS 12 introduces Notification Grouping, a feature that groups all of the notifications from a single app together in one bundle that prevents the Lock screen from becoming cluttered. How it works can be seen in the [`groupedNotifications.js`](https://github.com/appcelerator-developer-relations/appc-sample-ti740/blob/master/app/controllers/ios/groupedNotifications.js) controller.

### Password Autofill Improvements
While Password Autofill was added with iOS 11, we are revisiting it here along with some new APIs. Password suggestion and One Time Codes have been added to assist with your credential and sigle factor auth code management. Check them out in [`autofill.tss`](https://github.com/appcelerator-developer-relations/appc-sample-ti740/blob/master/app/controllers/ios/autofill.tss), [`suggestion.tss`](https://github.com/appcelerator-developer-relations/appc-sample-ti740/blob/master/app/controllers/ios/suggestion.tss), and [`oneTimeCode.tss`](https://github.com/appcelerator-developer-relations/appc-sample-ti740/blob/master/app/controllers/ios/oneTimeCode.tss)

### More iOS changes

Besides the features above a lot of bugs were fixed too. Obiously, demonstrating this is kind of pointless, so here's the link to the issue list fixed. [Release notes](https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_7.4.0.GA_Release_Note)

## Support

Make sure to reach out to the [Titanium Slack community](http://tislack.org) for questions or file a [JIRA ticket](https://jira.appcelerator.org)
if you run into any issues.

## Author

Eric Wieber, Axway Appcelerator

## License

Apache 2
