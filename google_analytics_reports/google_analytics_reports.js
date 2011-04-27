/**
 * @file
 * Loads report blocks via ajax.  This is done because the API requests to Google
 * Analytics can add signifigant latency to page loads otherwise.
 */

Drupal.behaviors.googleAnalyticsReports = function(context) {
  $('#block-google_analytics_reports-path_mini,#block-google_analytics_reports-summary', context).show();

  if ($('.google-analytics-reports-path-mini', context).length) {
    $.ajax({
      url: Drupal.settings.basePath + 'google-analytics-reports/ajax/path-mini',
      dataType: 'json',
      data: ({ path: window.location.pathname }),
      success: function(data) {
        $('.google-analytics-reports-path-mini', context).html(data.content).hide().slideDown('fast');
      },
      error: function(data) {
        // @TODO
      }
    });
  }

  if ($('.google-analytics-reports-summary', context).length) {
    $.ajax({
      url: Drupal.settings.basePath + 'google-analytics-reports/ajax/summary',
      dataType: 'json',
      success: function(data) {
        $('.google-analytics-reports-summary', context).html(data.content).hide().slideDown('fast');
      },
      error: function(data) {
        // @TODO
      }
    });
  }
}
