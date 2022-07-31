function Run() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    Main(currentDate);
}

function Main(currentDate) {
    // const calendarId = GASProperties.GetProperty(GASPropertiesKey.CalendarId);
    // const calendar = CalendarApp.getCalendarById(calendarId);

    // // 指定日の予定オブジェクトの配列を取得
    // const events = calendar.getEventsForDay(currentDate);
    const events = calendarAccessor.GetEventsForDay(currentDate);

    // 予定が0件の場合
    if (events.length === 0) {
        console.log("No events found.");
        return;
    }

    // 予定の件数だけ実行
    for (let index = 0; index < events.length; index++) {

        // // 予定のタイトルを取得
        // let title = events[index].getTitle();
        // // 予定の開始時刻・終了時刻を取得
        // let startHour = events[index].getStartTime().getHours();
        // let startMinute = events[index].getStartTime().getMinutes();
        // let endHour = events[index].getEndTime().getHours();
        // let endMinute = events[index].getEndTime().getMinutes();

        // console.log(title + '（' + startHour + '時' + startMinute + '分～' + endHour + '時' + endMinute + '分）');
        const datetimeStart = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            currentDate.getDate(),
            events[index].getStartTime().getHours(),
            events[index].getStartTime().getMinutes(),
            0);
        const datetimeEnd = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            currentDate.getDate(),
            events[index].getEndTime().getHours(),
            events[index].getEndTime().getMinutes(),
            0);

        sheetAccessor.Add(
            Common.FormatDate(currentDate),
            Common.FormatTime(datetimeStart),
            Common.FormatTime(datetimeEnd),
            events[index].getTitle());
    }
}