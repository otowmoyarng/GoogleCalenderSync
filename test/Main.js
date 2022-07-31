function MainTest() {
    const date = new Date(2022, 6, 29, 12, 34, 56);
    Main(date);
}

function RangeTest() {
    const startDate = new Date(2022, 1, 1);
    const endDate = new Date(2022, 2, 1);
    let targetDate = startDate;
    while (targetDate <= endDate) {
        console.log("Date is ", Common.FormatDate(targetDate));
        Main(targetDate);
        targetDate.setDate(targetDate.getDate() + 1);
    }
}