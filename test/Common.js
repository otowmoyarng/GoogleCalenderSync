function TestGetYmd() {
    console.log(`dateなし:${Common.GetCurrentYmd()}`);
    const testdate = new Date();
    testdate.setDate(testdate.getDate() - 1);
    console.log(`dateあり:${Common.FormatDate(testdate)}`);
}

function TestGetTime() {
    console.log(`dateなし:${Common.GetCurrentTime()}`);
    const testdate = new Date();
    testdate.setHours(testdate.getHours() === 0 ? 24 : testdate.getHours() - 1);
    console.log(`dateあり:${Common.FormatTime(testdate)}`);
}