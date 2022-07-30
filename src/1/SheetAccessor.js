const SpreadSheet = SpreadsheetApp.getActiveSpreadsheet();

const Sheet = {
    Events: SpreadSheet.getSheetByName('参加イベント'),
};

class SheetAccessor {

    GetEvents() {
        const events = Sheet.Events.getDataRange().getValues();
        events.shift();
        const list = events.map(row => {
            return {
                Date: Common.GetCurrentYmd(row[0]),
                TimeStart: row[1],
                TimeEnd: row[2],
                Subject: row[3]
            }
        });
        return list;
    }

    Add(date, timeStart, timeEnd, subject) {
        Sheet.Events.appendRow([date, timeStart, timeEnd, subject]);
    }
}

const sheetAccessor = new SheetAccessor();