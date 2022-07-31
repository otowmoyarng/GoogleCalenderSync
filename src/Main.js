function Run() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    Main(currentDate);
}

function Main(currentDate) {
    // 指定日の予定オブジェクトの配列を取得
    const events = calendarAccessor.GetEventsForDay(currentDate);

    // 予定が0件の場合
    if (events.length === 0) {
        console.log("No events found.");
        return;
    }

    // 予定の件数だけ実行
    events.forEach(event => {
        sheetAccessor.Add(
            event.Date,
            event.TimeStart,
            event.TimeEnd,
            event.Subject);
    });
}