function SheetAccessorTest_GetEvents() {
    console.log("GetEvents:", sheetAccessor.GetEvents());
}

function SheetAccessorTest_Add() {
    const datetimeStart = new Date(2022, 1, 23, 12, 34, 56);
    const datetimeEnd = new Date(2022, 1, 23, 21, 43, 05);
    sheetAccessor.Add(
        Common.FormatDate(datetimeStart),
        Common.FormatTime(datetimeStart),
        Common.FormatTime(datetimeEnd),
        "テスト件名");
    console.log("更新結果:", sheetAccessor.GetEvents());
}