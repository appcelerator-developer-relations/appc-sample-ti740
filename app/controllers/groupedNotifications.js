/**
 * Docs: https://docs.appcelerator.com/platform/latest/#!/guide/iOS_Interactive_Notifications
 *
 */

 function btnClk() {
     schedule('id_1', 'New Notification', 'These', new Date().getTime() + 3000, "my_thread");
     schedule('id_2', 'Another Notification', 'Are', new Date().getTime() + 4000, "my_thread");
     schedule('id_3', 'Yet Another Notification', 'Some', new Date().getTime() + 5000, "my_thread");
     schedule('id_4', 'One more okay?', 'Pointless', new Date().getTime() + 6000, "other_thread");
     schedule('id_5', 'This is the last one', 'Notifications', new Date().getTime() + 7000, "other_thread");
 };

 function schedule(identifier, title, body, date, thread) {
     Ti.App.iOS.scheduleLocalNotification({
         identifier: identifier,
         alertTitle: title,
         alertBody: body,
         threadIdentifier: thread,
         summaryArgument: 'My Summary',
         summaryArgumentCount: 1,
         date: date,
         category: 'DOWNLOAD_CONTENT'
     });
 }

 var acceptAction = Ti.App.iOS.createUserNotificationAction({
     identifier: 'ACCEPT_IDENTIFIER',
     title: 'Accept',
     activationMode: Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND,
     destructive: false,
     authenticationRequired: true
 });

 // An action that does not open the app (background action)
 var rejectAction = Ti.App.iOS.createUserNotificationAction({
     identifier: 'REJECT_IDENTIFIER',
     title: 'Reject',
     activationMode: Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND,
     destructive: true,
     authenticationRequired: false
 });

  // An action that does not open the app (background action), but lets the developer
 // type in a text (iOS 9+)
 var respondAction = Ti.App.iOS.createUserNotificationAction({
     identifier: 'RESPOND_IDENTIFIER',
     title: 'Respond',
     activationMode: Ti.App.iOS.USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND,
     behavior: Ti.App.iOS.USER_NOTIFICATION_BEHAVIOR_TEXTINPUT, // or: Ti.App.iOS.USER_NOTIFICATION_BEHAVIOR_DEFAULT,
     authenticationRequired: false
 });

 // Create an example notification category
 var downloadContent = Ti.App.iOS.createUserNotificationCategory({
     identifier: 'DOWNLOAD_CONTENT',
     actionsForDefaultContext: [acceptAction, rejectAction, respondAction]
 });

 // Register for user notifications and categories
 Ti.App.iOS.registerUserNotificationSettings({
     types: [
         Ti.App.iOS.USER_NOTIFICATION_TYPE_ALERT
     ],
     categories: [downloadContent]
 });

 // Monitor notifications received while app is in the background
 Ti.App.iOS.addEventListener('localnotificationaction', function(e) {
     alert('event: localnotificationaction');
 });

 // Validate notification settings
 Ti.App.iOS.addEventListener('usernotificationsettings', function(e) {
     Ti.API.info('event: usernotificationsettings');
 })

 // Monitor notifications received while app is in the foreground
 Ti.App.iOS.addEventListener('notification', function(e) {
     alert('event: notification');
 });
