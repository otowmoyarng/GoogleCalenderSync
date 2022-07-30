/**
 * GASProperties用テスト関数
 */
function TestGetProperty() {
    console.log(`key:${GASPropertiesKey.CalendarId},value:${GASProperties.GetProperty(GASPropertiesKey.CalendarId)}`);
}