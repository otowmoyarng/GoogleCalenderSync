class Common {

    /**
     * 現在日付をyyyy/MM/dd形式で取得する
     * @param date 日付
     * @returns 日付文字列
     */
    static GetCurrentYmd() {
        return this.Format(new Date(), 'yyyy/MM/dd');
        //return Utilities.formatDate((date ? date : new Date()), 'Asia/Tokyo', 'yyyy/MM/dd');
    }

    /**
     * 現在時刻を24時間形式で取得する
     * @param date 日付
     * @returns 時刻文字列
     */
    static GetCurrentTime(date) {
        return Utilities.formatDate((date ? date : new Date()), 'Asia/Tokyo', 'hh:mm');
    }

    static FormatDate(date) {
        return this.Format(date, 'yyyy/MM/dd');
    }

    static FormatTime(date) {
        return Utilities.formatDate(date, 'Asia/Tokyo', 'hh:mm');
    }

    static Format(date, format) {
        return Utilities.formatDate(date, 'Asia/Tokyo', format);
    }
}