function CalendarAccessorTest_GetEventsForDay() {
    const testdate = new Date(2022, 6, 29, 0, 0, 0);
    const result = calendarAccessor.GetEventsForDay(testdate);
    if (result && result.length > 0) {
        console.log("イベントあり");
        result.forEach(row => {
            console.log("row:", row);
        });
    } else {
        console.log("イベントなし");
    }
}

function CalendarAccessorTest_GetEventsRange() {
    const start = new Date(2022, 6, 29, 12, 34, 56);
    const end = new Date(2022, 6, 30, 21, 43, 05);
    const result = calendarAccessor.GetEventsRange(start, end);
    if (result && result.length > 0) {
        console.log("イベントあり");
        result.forEach(row => {
            console.log("row:", row);
        });
    } else {
        console.log("イベントなし");
    }
}