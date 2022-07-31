class CalendarAccessor {

    GetInstance() {
        const calendarId = GASProperties.GetProperty(GASPropertiesKey.CalendarId);
        const calendar = CalendarApp.getCalendarById(calendarId);
        return calendar;
    }

    GetEventsForDay(date) {
        const calendar = this.GetInstance();
        const events = calendar.getEventsForDay(date);
        return this.Convert(events);
    }

    GetEventsRange(from, to) {
        const calendar = this.GetInstance();
        const events = calendar.getEvents(from, to);
        return this.Convert(events);
    }

    Convert(events) {
        if (events === undefined) {
            return events;
        }
        const list = events.map(row => {
            return {
                Date: Common.FormatDate(row.getStartTime()),
                TimeStart: Common.FormatTime(row.getStartTime()),
                TimeEnd: Common.FormatTime(row.getEndTime()),
                Subject: row.getTitle()
            }
        });
        return list;
    }
}

const calendarAccessor = new CalendarAccessor();