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
                Date: Common.FormatDate(row[0]),
                TimeStart: Common.FormatTime(row[1]),
                TimeEnd: Common.FormatTime(row[2]),
                Subject: row[3]
            }
        });
        return list;
    }

    Add(date, timeStart, timeEnd, subject) {
        Sheet.Events.insertRowBefore(2);
        const items = [date, timeStart, timeEnd, subject];
        items.forEach((item, index) => {
            Sheet.Events.getRange(2, index + 1).setValue(item);
        });
    }
}

const sheetAccessor = new SheetAccessor();