"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.en = void 0;
var en = {
  application: {
    title: 'IEATTA – Eating Restaurant Tracker!'
  },
  'forms.submit': 'Submit',
  'forms.cancel': 'Cancel',
  'posts.new_post': 'New Post',
  'posts.edit': 'Edit',
  'posts.edit_success': 'Post “{title}” edited.',
  'posts.delete': 'Delete',
  'posts.delete_confirm': 'Delete post “{title}”?',
  'posts.delete_success': 'Post “{title}” deleted.',
  'posts.title': 'Title',
  'posts.url': 'URL',
  'posts.body': 'Body',
  'posts.categories': 'Categories',
  'posts.tags': 'Tags',
  'posts.thumbnailUrl': 'Thumbnail URL',
  'posts.status': 'Status',
  'posts.sticky': 'Sticky',
  'posts.load_more': 'Load More',
  'posts.search': 'Search',
  'posts.view': 'View',
  'posts.top': 'Top',
  'posts.new': 'New',
  'posts.best': 'Best',
  'posts.pending': 'Pending',
  'posts.rejected': 'Rejected',
  'posts.scheduled': 'Scheduled',
  'posts.daily': 'Daily',
  'posts.clear_thumbnail': 'Clear Thumbnail',
  'posts.enter_thumbnail_url': 'Enter URL',
  'posts.created_message': 'Post created.',
  'posts.rate_limit_error': 'Please wait {details} seconds before posting again.',
  'posts.postedAt': 'Posted at',
  'posts.dateNotDefined': 'Date not defined',
  'posts.subscribe': 'Subscribe',
  'posts.unsubscribe': 'Unsubscribe',
  'posts.subscribed': 'You have subscribed to “{name}” comments.',
  'posts.unsubscribed': 'You have unsubscribed from “{name}” comments.',
  'posts.subscribed_posts': 'Posts subscribed to',
  'posts.link_already_posted': 'This link has already been posted.',
  'comments.comments': 'Comments',
  'comments.count': '{count, plural, =0 {No comments} one {# comment} other {# comments}}',
  'comments.new': 'New Comment',
  'comments.no_comments': 'No comments to display.',
  'comments.reply': 'Reply',
  'comments.edit': 'Edit',
  'comments.delete': 'Delete',
  'comments.delete_confirm': 'Delete comment “{body}”?',
  'comments.delete_success': 'Comment “{body}” deleted.',
  'comments.please_log_in': 'Please log in to comment.',
  'comments.parentCommentId': 'Parent Comment ID',
  'comments.topLevelCommentId': 'Top Level Comment ID',
  'comments.body': 'Body',
  'comments.rate_limit_error': 'Please wait {details} seconds before commenting again.',
  'users.profile': 'Profile',
  'users.complete_profile': 'Complete your Profile',
  'users.edit_account': 'Edit Account',
  'users.edit_success': 'User “{name}” edited',
  'users.log_in': 'Log In',
  'users.log_out': 'Log Out',
  'users.telescope.bio': 'Bio',
  'users.telescope.displayName': 'Display Name',
  'users.telescope.email': 'Email',
  'users.telescope.twitterUsername': 'Twitter Username',
  'users.telescope.website': 'Website',
  'users.telescope.groups': 'Groups',
  'users.telescope.avatar': 'Avatar',
  'users.notifications': 'Notifications',
  'users.telescope.notifications_users': 'New Users Notifications',
  'users.telescope.notifications_posts': 'New Posts Notifications',
  'users.telescope.newsletter.subscribed': 'Subscribe to newsletter',
  'users.admin': 'Admin',
  'users.isAdmin': 'Admin',
  'users.posts': 'Posts',
  'users.please_log_in': 'Please log in',
  'users.cannot_post': 'Sorry, you do not have permissions to post at this time',
  'users.subscribe': "Subscribe to this user's posts",
  'users.unsubscribe': "Unsubscribe to this user's posts",
  'users.subscribed': 'You have subscribed to “{name}” posts.',
  'users.unsubscribed': 'You have unsubscribed from “{name}” posts.',
  'users.subscribers': 'Subscribers',
  categories: 'Categories',
  'categories.all': 'All Categories',
  'categories.edit': 'Edit Category',
  'categories.new': 'New Category',
  'categories.delete': 'Delete Category',
  'categories.name': 'Name',
  'categories.description': 'Description',
  'categories.order': 'Order',
  'categories.slug': 'Slug',
  'categories.image': 'Image',
  'categories.parentId': 'Parent ID',
  'categories.subscribe': "Subscribe to this category's posts",
  'categories.unsubscribe': "Unsubscribe to this category's posts",
  'categories.subscribed': 'You have subscribed to “{name}” posts.',
  'categories.unsubscribed': 'You have unsubscribed from “{name}” posts.',
  'categories.subscribed_categories': 'Categories subscribed to',
  Tags: 'Tags',
  'Tags.all': 'All Tags',
  'Tags.edit': 'Edit Tag',
  'Tags.new': 'New Tag',
  'Tags.delete': 'Delete Tag',
  'Tags.name': 'Name',
  'Tags.description': 'Description',
  'Tags.order': 'Order',
  'Tags.slug': 'Slug',
  'Tags.image': 'Image',
  'Tags.parentId': 'Parent ID',
  'Tags.subscribe': "Subscribe to this Tag's posts",
  'Tags.unsubscribe': "Unsubscribe to this Tag's posts",
  'Tags.subscribed': 'You have subscribed to “{name}” posts.',
  'Tags.unsubscribed': 'You have unsubscribed from “{name}” posts.',
  'Tags.subscribed_Tags': 'Tags subscribed to',
  settings: 'Settings',
  'settings.json_message': 'Note: settings already provided in your <code>settings.json</code> file will be disabled.',
  'settings.edit': 'Edit Settings',
  'settings.edited': 'Settings edited (please reload).',
  'settings.title': 'Title',
  'settings.siteUrl': 'Site URL',
  'settings.tagline': 'Tagline',
  'settings.description': 'Description',
  'settings.siteImage': 'Site Image',
  'settings.defaultEmail': 'Default Email',
  'settings.mailUrl': 'Mail URL',
  'settings.scoreUpdate': 'Score Update',
  'settings.postInterval': 'Post Interval',
  'settings.RSSLinksPointTo': 'RSS Links Point To',
  'settings.commentInterval': 'Comment Interval',
  'settings.maxPostsPerDay': 'Max Posts Per Day',
  'settings.startInvitesCount': 'Start Invites Count',
  'settings.postsPerPage': 'Posts Per Page',
  'settings.logoUrl': 'Logo URL',
  'settings.logoHeight': 'Logo Height',
  'settings.logoWidth': 'Logo Width',
  'settings.faviconUrl': 'Favicon URL',
  'settings.twitterAccount': 'Twitter Account',
  'settings.facebookPage': 'Facebook Page',
  'settings.googleAnalyticsId': 'Google Analytics ID',
  'settings.locale': 'Locale',
  'settings.requireViewInvite': 'Require View Invite',
  'settings.requirePostInvite': 'Require Post Invite',
  'settings.requirePostsApproval': 'Require Posts Approval',
  'settings.scoreUpdateInterval': 'Score Update Interval',
  'app.loading': 'Loading…',
  'app.404': "Sorry, we couldn't find what you were looking for.",
  'app.powered_by': 'Powered by Telescope',
  'app.or': 'Or',
  'app.noPermission': 'Sorry, you do not have the permission to do this at this time.',
  newsletter: 'Newsletter',
  'newsletter.subscribe': 'Subscribe',
  'newsletter.unsubscribe': 'Unsubscribe',
  'newsletter.subscribe_prompt_logged': 'Get the best articles in your inbox every week. Subscribe to our newsletter.',
  'newsletter.subscribe_prompt_no_logged': 'Get the best articles in your inbox, weekly.',
  'newsletter.email': 'Your email',
  'newsletter.success_message': 'Thanks for subscribing!',
  admin: 'Admin',
  notifications: 'Notifications',
  'msg.error.folders.delete.post': 'Unable to remove this article from your collection. Please try again.',
  'msg.error.folders.add.post': ' Unable to add this article to your collection. Please try again.',
  'msg.error.comments.submit.new': 'Please wait at least 15 seconds before commenting again.',
  'msg.error.flag.submitted': 'Unable to flag the article. Please try again.',
  'msg.success.flag.submitted': 'You have successfully flagged this article.',
  'msg.success.users.sent.reset.password.email': 'We’ve emailed you the steps to reset your password.',
  'msg.success.users.resent.verify.email': 'We’ve emailed you the steps to verify your account.',
  'msg.error.users.sent.verify.deletion.email': 'Sent veirfy deletion user email failure!',
  'msg.success.users.removed': 'Your account ({name}) has been deleted.',
  'msg.success.users.password.changed': ' Your password has been changed.',
  'msg.error.users.reset.password': 'Invalid token for this user!',
  'confirm.folders.delete': 'Are you sure you want to delete this collection? There is no way back. This is a path without return! Be brave?',
  'confirm.folders.delete.post': 'Are you sure you want to delete this post? There is no way back. This is a path without return! Be brave?',
  'load.more.hint.posts': 'All good things take time',
  'load.more.hint.messages': 'Load more activities'
};
exports.en = en;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHBMaWJzL2kxOG4vZW5fVVMudHMiXSwibmFtZXMiOlsiZW4iLCJhcHBsaWNhdGlvbiIsInRpdGxlIiwiY2F0ZWdvcmllcyIsIlRhZ3MiLCJzZXR0aW5ncyIsIm5ld3NsZXR0ZXIiLCJhZG1pbiIsIm5vdGlmaWNhdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLEVBQUUsR0FBRztBQUNoQkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLEtBQUssRUFBRTtBQURJLEdBREc7QUFJaEIsa0JBQWdCLFFBSkE7QUFLaEIsa0JBQWdCLFFBTEE7QUFNaEIsb0JBQWtCLFVBTkY7QUFPaEIsZ0JBQWMsTUFQRTtBQVFoQix3QkFBc0Isd0JBUk47QUFTaEIsa0JBQWdCLFFBVEE7QUFVaEIsMEJBQXdCLHdCQVZSO0FBV2hCLDBCQUF3Qix5QkFYUjtBQVloQixpQkFBZSxPQVpDO0FBYWhCLGVBQWEsS0FiRztBQWNoQixnQkFBYyxNQWRFO0FBZWhCLHNCQUFvQixZQWZKO0FBZ0JoQixnQkFBYyxNQWhCRTtBQWlCaEIsd0JBQXNCLGVBakJOO0FBa0JoQixrQkFBZ0IsUUFsQkE7QUFtQmhCLGtCQUFnQixRQW5CQTtBQW9CaEIscUJBQW1CLFdBcEJIO0FBcUJoQixrQkFBZ0IsUUFyQkE7QUFzQmhCLGdCQUFjLE1BdEJFO0FBdUJoQixlQUFhLEtBdkJHO0FBd0JoQixlQUFhLEtBeEJHO0FBeUJoQixnQkFBYyxNQXpCRTtBQTBCaEIsbUJBQWlCLFNBMUJEO0FBMkJoQixvQkFBa0IsVUEzQkY7QUE0QmhCLHFCQUFtQixXQTVCSDtBQTZCaEIsaUJBQWUsT0E3QkM7QUE4QmhCLDJCQUF5QixpQkE5QlQ7QUErQmhCLCtCQUE2QixXQS9CYjtBQWdDaEIsMkJBQXlCLGVBaENUO0FBaUNoQiw0QkFBMEIscURBakNWO0FBa0NoQixvQkFBa0IsV0FsQ0Y7QUFtQ2hCLDBCQUF3QixrQkFuQ1I7QUFvQ2hCLHFCQUFtQixXQXBDSDtBQXFDaEIsdUJB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QTJLaEIsK0JBQTZCLHlDQTNLYjtBQTRLaEIsd0NBQXNDLGtDQTVLdEI7QUE2S2hCLG9DQUFrQyw4QkE3S2xCO0FBOEtoQiw0QkFDRSxpSEEvS2M7QUFnTGhCLGlDQUNFLDJHQWpMYztBQWtMaEIsMEJBQXdCLDJCQWxMUjtBQW1MaEIsNkJBQTJCO0FBbkxYLENBQVgiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW4gPSB7XG4gIGFwcGxpY2F0aW9uOiB7XG4gICAgdGl0bGU6ICdJRUFUVEEg4oCTIEVhdGluZyBSZXN0YXVyYW50IFRyYWNrZXIhJ1xuICB9LFxuICAnZm9ybXMuc3VibWl0JzogJ1N1Ym1pdCcsXG4gICdmb3Jtcy5jYW5jZWwnOiAnQ2FuY2VsJyxcbiAgJ3Bvc3RzLm5ld19wb3N0JzogJ05ldyBQb3N0JyxcbiAgJ3Bvc3RzLmVkaXQnOiAnRWRpdCcsXG4gICdwb3N0cy5lZGl0X3N1Y2Nlc3MnOiAnUG9zdCDigJx7dGl0bGV94oCdIGVkaXRlZC4nLFxuICAncG9zdHMuZGVsZXRlJzogJ0RlbGV0ZScsXG4gICdwb3N0cy5kZWxldGVfY29uZmlybSc6ICdEZWxldGUgcG9zdCDigJx7dGl0bGV94oCdPycsXG4gICdwb3N0cy5kZWxldGVfc3VjY2Vzcyc6ICdQb3N0IOKAnHt0aXRsZX3igJ0gZGVsZXRlZC4nLFxuICAncG9zdHMudGl0bGUnOiAnVGl0bGUnLFxuICAncG9zdHMudXJsJzogJ1VSTCcsXG4gICdwb3N0cy5ib2R5JzogJ0JvZHknLFxuICAncG9zdHMuY2F0ZWdvcmllcyc6ICdDYXRlZ29yaWVzJyxcbiAgJ3Bvc3RzLnRhZ3MnOiAnVGFncycsXG4gICdwb3N0cy50aHVtYm5haWxVcmwnOiAnVGh1bWJuYWlsIFVSTCcsXG4gICdwb3N0cy5zdGF0dXMnOiAnU3RhdHVzJyxcbiAgJ3Bvc3RzLnN0aWNreSc6ICdTdGlja3knLFxuICAncG9zdHMubG9hZF9tb3JlJzogJ0xvYWQgTW9yZScsXG4gICdwb3N0cy5zZWFyY2gnOiAnU2VhcmNoJyxcbiAgJ3Bvc3RzLnZpZXcnOiAnVmlldycsXG4gICdwb3N0cy50b3AnOiAnVG9wJyxcbiAgJ3Bvc3RzLm5ldyc6ICdOZXcnLFxuICAncG9zdHMuYmVzdCc6ICdCZXN0JyxcbiAgJ3Bvc3RzLnBlbmRpbmcnOiAnUGVuZGluZycsXG4gICdwb3N0cy5yZWplY3RlZCc6ICdSZWplY3RlZCcsXG4gICdwb3N0cy5zY2hlZHVsZWQnOiAnU2NoZWR1bGVkJyxcbiAgJ3Bvc3RzLmRhaWx5JzogJ0RhaWx5JyxcbiAgJ3Bvc3RzLmNsZWFyX3RodW1ibmFpbCc6ICdDbGVhciBUaHVtYm5haWwnLFxuICAncG9zdHMuZW50ZXJfdGh1bWJuYWlsX3VybCc6ICdFbnRlciBVUkwnLFxuICAncG9zdHMuY3JlYXRlZF9tZXNzYWdlJzogJ1Bvc3QgY3JlYXRlZC4nLFxuICAncG9zdHMucmF0ZV9saW1pdF9lcnJvcic6ICdQbGVhc2Ugd2FpdCB7ZGV0YWlsc30gc2Vjb25kcyBiZWZvcmUgcG9zdGluZyBhZ2Fpbi4nLFxuICAncG9zdHMucG9zdGVkQXQnOiAnUG9zdGVkIGF0JyxcbiAgJ3Bvc3RzLmRhdGVOb3REZWZpbmVkJzogJ0RhdGUgbm90IGRlZmluZWQnLFxuICAncG9zdHMuc3Vic2NyaWJlJzogJ1N1YnNjcmliZScsXG4gICdwb3N0cy51bnN1YnNjcmliZSc6ICdVbnN1YnNjcmliZScsXG4gICdwb3N0cy5zdWJzY3JpYmVkJzogJ1lvdSBoYXZlIHN1YnNjcmliZWQgdG8g4oCce25hbWV94oCdIGNvbW1lbnRzLicsXG4gICdwb3N0cy51bnN1YnNjcmliZWQnOiAnWW91IGhhdmUgdW5zdWJzY3JpYmVkIGZyb20g4oCce25hbWV94oCdIGNvbW1lbnRzLicsXG4gICdwb3N0cy5zdWJzY3JpYmVkX3Bvc3RzJzogJ1Bvc3RzIHN1YnNjcmliZWQgdG8nLFxuICAncG9zdHMubGlua19hbHJlYWR5X3Bvc3RlZCc6ICdUaGlzIGxpbmsgaGFzIGFscmVhZHkgYmVlbiBwb3N0ZWQuJyxcbiAgJ2NvbW1lbnRzLmNvbW1lbnRzJzogJ0NvbW1lbnRzJyxcbiAgJ2NvbW1lbnRzLmNvdW50JzogJ3tjb3VudCwgcGx1cmFsLCA9MCB7Tm8gY29tbWVudHN9IG9uZSB7IyBjb21tZW50fSBvdGhlciB7IyBjb21tZW50c319JyxcbiAgJ2NvbW1lbnRzLm5ldyc6ICdOZXcgQ29tbWVudCcsXG4gICdjb21tZW50cy5ub19jb21tZW50cyc6ICdObyBjb21tZW50cyB0byBkaXNwbGF5LicsXG4gICdjb21tZW50cy5yZXBseSc6ICdSZXBseScsXG4gICdjb21tZW50cy5lZGl0JzogJ0VkaXQnLFxuICAnY29tbWVudHMuZGVsZXRlJzogJ0RlbGV0ZScsXG4gICdjb21tZW50cy5kZWxldGVfY29uZmlybSc6ICdEZWxldGUgY29tbWVudCDigJx7Ym9keX3igJ0/JyxcbiAgJ2NvbW1lbnRzLmRlbGV0ZV9zdWNjZXNzJzogJ0NvbW1lbnQg4oCce2JvZHl94oCdIGRlbGV0ZWQuJyxcbiAgJ2NvbW1lbnRzLnBsZWFzZV9sb2dfaW4nOiAnUGxlYXNlIGxvZyBpbiB0byBjb21tZW50LicsXG4gICdjb21tZW50cy5wYXJlbnRDb21tZW50SWQnOiAnUGFyZW50IENvbW1lbnQgSUQnLFxuICAnY29tbWVudHMudG9wTGV2ZWxDb21tZW50SWQnOiAnVG9wIExldmVsIENvbW1lbnQgSUQnLFxuICAnY29tbWVudHMuYm9keSc6ICdCb2R5JyxcbiAgJ2NvbW1lbnRzLnJhdGVfbGltaXRfZXJyb3InOiAnUGxlYXNlIHdhaXQge2RldGFpbHN9IHNlY29uZHMgYmVmb3JlIGNvbW1lbnRpbmcgYWdhaW4uJyxcbiAgJ3VzZXJzLnByb2ZpbGUnOiAnUHJvZmlsZScsXG4gICd1c2Vycy5jb21wbGV0ZV9wcm9maWxlJzogJ0NvbXBsZXRlIHlvdXIgUHJvZmlsZScsXG4gICd1c2Vycy5lZGl0X2FjY291bnQnOiAnRWRpdCBBY2NvdW50JyxcbiAgJ3VzZXJzLmVkaXRfc3VjY2Vzcyc6ICdVc2VyIOKAnHtuYW1lfeKAnSBlZGl0ZWQnLFxuICAndXNlcnMubG9nX2luJzogJ0xvZyBJbicsXG4gICd1c2Vycy5sb2dfb3V0JzogJ0xvZyBPdXQnLFxuICAndXNlcnMudGVsZXNjb3BlLmJpbyc6ICdCaW8nLFxuICAndXNlcnMudGVsZXNjb3BlLmRpc3BsYXlOYW1lJzogJ0Rpc3BsYXkgTmFtZScsXG4gICd1c2Vycy50ZWxlc2NvcGUuZW1haWwnOiAnRW1haWwnLFxuICAndXNlcnMudGVsZXNjb3BlLnR3aXR0ZXJVc2VybmFtZSc6ICdUd2l0dGVyIFVzZXJuYW1lJyxcbiAgJ3VzZXJzLnRlbGVzY29wZS53ZWJzaXRlJzogJ1dlYnNpdGUnLFxuICAndXNlcnMudGVsZXNjb3BlLmdyb3Vwcyc6ICdHcm91cHMnLFxuICAndXNlcnMudGVsZXNjb3BlLmF2YXRhcic6ICdBdmF0YXInLFxuICAndXNlcnMubm90aWZpY2F0aW9ucyc6ICdOb3RpZmljYXRpb25zJyxcbiAgJ3VzZXJzLnRlbGVzY29wZS5ub3RpZmljYXRpb25zX3VzZXJzJzogJ05ldyBVc2VycyBOb3RpZmljYXRpb25zJyxcbiAgJ3VzZXJzLnRlbGVzY29wZS5ub3RpZmljYXRpb25zX3Bvc3RzJzogJ05ldyBQb3N0cyBOb3RpZmljYXRpb25zJyxcbiAgJ3VzZXJzLnRlbGVzY29wZS5uZXdzbGV0dGVyLnN1YnNjcmliZWQnOiAnU3Vic2NyaWJlIHRvIG5ld3NsZXR0ZXInLFxuICAndXNlcnMuYWRtaW4nOiAnQWRtaW4nLFxuICAndXNlcnMuaXNBZG1pbic6ICdBZG1pbicsXG4gICd1c2Vycy5wb3N0cyc6ICdQb3N0cycsXG4gICd1c2Vycy5wbGVhc2VfbG9nX2luJzogJ1BsZWFzZSBsb2cgaW4nLFxuICAndXNlcnMuY2Fubm90X3Bvc3QnOiAnU29ycnksIHlvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9ucyB0byBwb3N0IGF0IHRoaXMgdGltZScsXG4gICd1c2Vycy5zdWJzY3JpYmUnOiBcIlN1YnNjcmliZSB0byB0aGlzIHVzZXIncyBwb3N0c1wiLFxuICAndXNlcnMudW5zdWJzY3JpYmUnOiBcIlVuc3Vic2NyaWJlIHRvIHRoaXMgdXNlcidzIHBvc3RzXCIsXG4gICd1c2Vycy5zdWJzY3JpYmVkJzogJ1lvdSBoYXZlIHN1YnNjcmliZWQgdG8g4oCce25hbWV94oCdIHBvc3RzLicsXG4gICd1c2Vycy51bnN1YnNjcmliZWQnOiAnWW91IGhhdmUgdW5zdWJzY3JpYmVkIGZyb20g4oCce25hbWV94oCdIHBvc3RzLicsXG4gICd1c2Vycy5zdWJzY3JpYmVycyc6ICdTdWJzY3JpYmVycycsXG4gIGNhdGVnb3JpZXM6ICdDYXRlZ29yaWVzJyxcbiAgJ2NhdGVnb3JpZXMuYWxsJzogJ0FsbCBDYXRlZ29yaWVzJyxcbiAgJ2NhdGVnb3JpZXMuZWRpdCc6ICdFZGl0IENhdGVnb3J5JyxcbiAgJ2NhdGVnb3JpZXMubmV3JzogJ05ldyBDYXRlZ29yeScsXG4gICdjYXRlZ29yaWVzLmRlbGV0ZSc6ICdEZWxldGUgQ2F0ZWdvcnknLFxuICAnY2F0ZWdvcmllcy5uYW1lJzogJ05hbWUnLFxuICAnY2F0ZWdvcmllcy5kZXNjcmlwdGlvbic6ICdEZXNjcmlwdGlvbicsXG4gICdjYXRlZ29yaWVzLm9yZGVyJzogJ09yZGVyJyxcbiAgJ2NhdGVnb3JpZXMuc2x1Zyc6ICdTbHVnJyxcbiAgJ2NhdGVnb3JpZXMuaW1hZ2UnOiAnSW1hZ2UnLFxuICAnY2F0ZWdvcmllcy5wYXJlbnRJZCc6ICdQYXJlbnQgSUQnLFxuICAnY2F0ZWdvcmllcy5zdWJzY3JpYmUnOiBcIlN1YnNjcmliZSB0byB0aGlzIGNhdGVnb3J5J3MgcG9zdHNcIixcbiAgJ2NhdGVnb3JpZXMudW5zdWJzY3JpYmUnOiBcIlVuc3Vic2NyaWJlIHRvIHRoaXMgY2F0ZWdvcnkncyBwb3N0c1wiLFxuICAnY2F0ZWdvcmllcy5zdWJzY3JpYmVkJzogJ1lvdSBoYXZlIHN1YnNjcmliZWQgdG8g4oCce25hbWV94oCdIHBvc3RzLicsXG4gICdjYXRlZ29yaWVzLnVuc3Vic2NyaWJlZCc6ICdZb3UgaGF2ZSB1bnN1YnNjcmliZWQgZnJvbSDigJx7bmFtZX3igJ0gcG9zdHMuJyxcbiAgJ2NhdGVnb3JpZXMuc3Vic2NyaWJlZF9jYXRlZ29yaWVzJzogJ0NhdGVnb3JpZXMgc3Vic2NyaWJlZCB0bycsXG4gIFRhZ3M6ICdUYWdzJyxcbiAgJ1RhZ3MuYWxsJzogJ0FsbCBUYWdzJyxcbiAgJ1RhZ3MuZWRpdCc6ICdFZGl0IFRhZycsXG4gICdUYWdzLm5ldyc6ICdOZXcgVGFnJyxcbiAgJ1RhZ3MuZGVsZXRlJzogJ0RlbGV0ZSBUYWcnLFxuICAnVGFncy5uYW1lJzogJ05hbWUnLFxuICAnVGFncy5kZXNjcmlwdGlvbic6ICdEZXNjcmlwdGlvbicsXG4gICdUYWdzLm9yZGVyJzogJ09yZGVyJyxcbiAgJ1RhZ3Muc2x1Zyc6ICdTbHVnJyxcbiAgJ1RhZ3MuaW1hZ2UnOiAnSW1hZ2UnLFxuICAnVGFncy5wYXJlbnRJZCc6ICdQYXJlbnQgSUQnLFxuICAnVGFncy5zdWJzY3JpYmUnOiBcIlN1YnNjcmliZSB0byB0aGlzIFRhZydzIHBvc3RzXCIsXG4gICdUYWdzLnVuc3Vic2NyaWJlJzogXCJVbnN1YnNjcmliZSB0byB0aGlzIFRhZydzIHBvc3RzXCIsXG4gICdUYWdzLnN1YnNjcmliZWQnOiAnWW91IGhhdmUgc3Vic2NyaWJlZCB0byDigJx7bmFtZX3igJ0gcG9zdHMuJyxcbiAgJ1RhZ3MudW5zdWJzY3JpYmVkJzogJ1lvdSBoYXZlIHVuc3Vic2NyaWJlZCBmcm9tIOKAnHtuYW1lfeKAnSBwb3N0cy4nLFxuICAnVGFncy5zdWJzY3JpYmVkX1RhZ3MnOiAnVGFncyBzdWJzY3JpYmVkIHRvJyxcbiAgc2V0dGluZ3M6ICdTZXR0aW5ncycsXG4gICdzZXR0aW5ncy5qc29uX21lc3NhZ2UnOlxuICAgICdOb3RlOiBzZXR0aW5ncyBhbHJlYWR5IHByb3ZpZGVkIGluIHlvdXIgPGNvZGU+c2V0dGluZ3MuanNvbjwvY29kZT4gZmlsZSB3aWxsIGJlIGRpc2FibGVkLicsXG4gICdzZXR0aW5ncy5lZGl0JzogJ0VkaXQgU2V0dGluZ3MnLFxuICAnc2V0dGluZ3MuZWRpdGVkJzogJ1NldHRpbmdzIGVkaXRlZCAocGxlYXNlIHJlbG9hZCkuJyxcbiAgJ3NldHRpbmdzLnRpdGxlJzogJ1RpdGxlJyxcbiAgJ3NldHRpbmdzLnNpdGVVcmwnOiAnU2l0ZSBVUkwnLFxuICAnc2V0dGluZ3MudGFnbGluZSc6ICdUYWdsaW5lJyxcbiAgJ3NldHRpbmdzLmRlc2NyaXB0aW9uJzogJ0Rlc2NyaXB0aW9uJyxcbiAgJ3NldHRpbmdzLnNpdGVJbWFnZSc6ICdTaXRlIEltYWdlJyxcbiAgJ3NldHRpbmdzLmRlZmF1bHRFbWFpbCc6ICdEZWZhdWx0IEVtYWlsJyxcbiAgJ3NldHRpbmdzLm1haWxVcmwnOiAnTWFpbCBVUkwnLFxuICAnc2V0dGluZ3Muc2NvcmVVcGRhdGUnOiAnU2NvcmUgVXBkYXRlJyxcbiAgJ3NldHRpbmdzLnBvc3RJbnRlcnZhbCc6ICdQb3N0IEludGVydmFsJyxcbiAgJ3NldHRpbmdzLlJTU0xpbmtzUG9pbnRUbyc6ICdSU1MgTGlua3MgUG9pbnQgVG8nLFxuICAnc2V0dGluZ3MuY29tbWVudEludGVydmFsJzogJ0NvbW1lbnQgSW50ZXJ2YWwnLFxuICAnc2V0dGluZ3MubWF4UG9zdHNQZXJEYXknOiAnTWF4IFBvc3RzIFBlciBEYXknLFxuICAnc2V0dGluZ3Muc3RhcnRJbnZpdGVzQ291bnQnOiAnU3RhcnQgSW52aXRlcyBDb3VudCcsXG4gICdzZXR0aW5ncy5wb3N0c1BlclBhZ2UnOiAnUG9zdHMgUGVyIFBhZ2UnLFxuICAnc2V0dGluZ3MubG9nb1VybCc6ICdMb2dvIFVSTCcsXG4gICdzZXR0aW5ncy5sb2dvSGVpZ2h0JzogJ0xvZ28gSGVpZ2h0JyxcbiAgJ3NldHRpbmdzLmxvZ29XaWR0aCc6ICdMb2dvIFdpZHRoJyxcbiAgJ3NldHRpbmdzLmZhdmljb25VcmwnOiAnRmF2aWNvbiBVUkwnLFxuICAnc2V0dGluZ3MudHdpdHRlckFjY291bnQnOiAnVHdpdHRlciBBY2NvdW50JyxcbiAgJ3NldHRpbmdzLmZhY2Vib29rUGFnZSc6ICdGYWNlYm9vayBQYWdlJyxcbiAgJ3NldHRpbmdzLmdvb2dsZUFuYWx5dGljc0lkJzogJ0dvb2dsZSBBbmFseXRpY3MgSUQnLFxuICAnc2V0dGluZ3MubG9jYWxlJzogJ0xvY2FsZScsXG4gICdzZXR0aW5ncy5yZXF1aXJlVmlld0ludml0ZSc6ICdSZXF1aXJlIFZpZXcgSW52aXRlJyxcbiAgJ3NldHRpbmdzLnJlcXVpcmVQb3N0SW52aXRlJzogJ1JlcXVpcmUgUG9zdCBJbnZpdGUnLFxuICAnc2V0dGluZ3MucmVxdWlyZVBvc3RzQXBwcm92YWwnOiAnUmVxdWlyZSBQb3N0cyBBcHByb3ZhbCcsXG4gICdzZXR0aW5ncy5zY29yZVVwZGF0ZUludGVydmFsJzogJ1Njb3JlIFVwZGF0ZSBJbnRlcnZhbCcsXG4gICdhcHAubG9hZGluZyc6ICdMb2FkaW5n4oCmJyxcbiAgJ2FwcC40MDQnOiBcIlNvcnJ5LCB3ZSBjb3VsZG4ndCBmaW5kIHdoYXQgeW91IHdlcmUgbG9va2luZyBmb3IuXCIsXG4gICdhcHAucG93ZXJlZF9ieSc6ICdQb3dlcmVkIGJ5IFRlbGVzY29wZScsXG4gICdhcHAub3InOiAnT3InLFxuICAnYXBwLm5vUGVybWlzc2lvbic6ICdTb3JyeSwgeW91IGRvIG5vdCBoYXZlIHRoZSBwZXJtaXNzaW9uIHRvIGRvIHRoaXMgYXQgdGhpcyB0aW1lLicsXG4gIG5ld3NsZXR0ZXI6ICdOZXdzbGV0dGVyJyxcbiAgJ25ld3NsZXR0ZXIuc3Vic2NyaWJlJzogJ1N1YnNjcmliZScsXG4gICduZXdzbGV0dGVyLnVuc3Vic2NyaWJlJzogJ1Vuc3Vic2NyaWJlJyxcbiAgJ25ld3NsZXR0ZXIuc3Vic2NyaWJlX3Byb21wdF9sb2dnZWQnOlxuICAgICdHZXQgdGhlIGJlc3QgYXJ0aWNsZXMgaW4geW91ciBpbmJveCBldmVyeSB3ZWVrLiBTdWJzY3JpYmUgdG8gb3VyIG5ld3NsZXR0ZXIuJyxcbiAgJ25ld3NsZXR0ZXIuc3Vic2NyaWJlX3Byb21wdF9ub19sb2dnZWQnOiAnR2V0IHRoZSBiZXN0IGFydGljbGVzIGluIHlvdXIgaW5ib3gsIHdlZWtseS4nLFxuICAnbmV3c2xldHRlci5lbWFpbCc6ICdZb3VyIGVtYWlsJyxcbiAgJ25ld3NsZXR0ZXIuc3VjY2Vzc19tZXNzYWdlJzogJ1RoYW5rcyBmb3Igc3Vic2NyaWJpbmchJyxcbiAgYWRtaW46ICdBZG1pbicsXG4gIG5vdGlmaWNhdGlvbnM6ICdOb3RpZmljYXRpb25zJyxcbiAgJ21zZy5lcnJvci5mb2xkZXJzLmRlbGV0ZS5wb3N0JzpcbiAgICAnVW5hYmxlIHRvIHJlbW92ZSB0aGlzIGFydGljbGUgZnJvbSB5b3VyIGNvbGxlY3Rpb24uIFBsZWFzZSB0cnkgYWdhaW4uJyxcbiAgJ21zZy5lcnJvci5mb2xkZXJzLmFkZC5wb3N0JzogJyBVbmFibGUgdG8gYWRkIHRoaXMgYXJ0aWNsZSB0byB5b3VyIGNvbGxlY3Rpb24uIFBsZWFzZSB0cnkgYWdhaW4uJyxcbiAgJ21zZy5lcnJvci5jb21tZW50cy5zdWJtaXQubmV3JzogJ1BsZWFzZSB3YWl0IGF0IGxlYXN0IDE1IHNlY29uZHMgYmVmb3JlIGNvbW1lbnRpbmcgYWdhaW4uJyxcbiAgJ21zZy5lcnJvci5mbGFnLnN1Ym1pdHRlZCc6ICdVbmFibGUgdG8gZmxhZyB0aGUgYXJ0aWNsZS4gUGxlYXNlIHRyeSBhZ2Fpbi4nLFxuICAnbXNnLnN1Y2Nlc3MuZmxhZy5zdWJtaXR0ZWQnOiAnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGZsYWdnZWQgdGhpcyBhcnRpY2xlLicsXG4gICdtc2cuc3VjY2Vzcy51c2Vycy5zZW50LnJlc2V0LnBhc3N3b3JkLmVtYWlsJzpcbiAgICAnV2XigJl2ZSBlbWFpbGVkIHlvdSB0aGUgc3RlcHMgdG8gcmVzZXQgeW91ciBwYXNzd29yZC4nLFxuICAnbXNnLnN1Y2Nlc3MudXNlcnMucmVzZW50LnZlcmlmeS5lbWFpbCc6ICdXZeKAmXZlIGVtYWlsZWQgeW91IHRoZSBzdGVwcyB0byB2ZXJpZnkgeW91ciBhY2NvdW50LicsXG4gICdtc2cuZXJyb3IudXNlcnMuc2VudC52ZXJpZnkuZGVsZXRpb24uZW1haWwnOiAnU2VudCB2ZWlyZnkgZGVsZXRpb24gdXNlciBlbWFpbCBmYWlsdXJlIScsXG4gICdtc2cuc3VjY2Vzcy51c2Vycy5yZW1vdmVkJzogJ1lvdXIgYWNjb3VudCAoe25hbWV9KSBoYXMgYmVlbiBkZWxldGVkLicsXG4gICdtc2cuc3VjY2Vzcy51c2Vycy5wYXNzd29yZC5jaGFuZ2VkJzogJyBZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIGNoYW5nZWQuJyxcbiAgJ21zZy5lcnJvci51c2Vycy5yZXNldC5wYXNzd29yZCc6ICdJbnZhbGlkIHRva2VuIGZvciB0aGlzIHVzZXIhJyxcbiAgJ2NvbmZpcm0uZm9sZGVycy5kZWxldGUnOlxuICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29sbGVjdGlvbj8gVGhlcmUgaXMgbm8gd2F5IGJhY2suIFRoaXMgaXMgYSBwYXRoIHdpdGhvdXQgcmV0dXJuISBCZSBicmF2ZT8nLFxuICAnY29uZmlybS5mb2xkZXJzLmRlbGV0ZS5wb3N0JzpcbiAgICAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHBvc3Q/IFRoZXJlIGlzIG5vIHdheSBiYWNrLiBUaGlzIGlzIGEgcGF0aCB3aXRob3V0IHJldHVybiEgQmUgYnJhdmU/JyxcbiAgJ2xvYWQubW9yZS5oaW50LnBvc3RzJzogJ0FsbCBnb29kIHRoaW5ncyB0YWtlIHRpbWUnLFxuICAnbG9hZC5tb3JlLmhpbnQubWVzc2FnZXMnOiAnTG9hZCBtb3JlIGFjdGl2aXRpZXMnXG59XG4iXX0=