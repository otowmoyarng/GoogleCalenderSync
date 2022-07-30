const FORMAT_DATE = 'yyyy/MM/dd';
const FORMAT_TIME = 'hh:mm';

class Common {

    /**
     * 現在日付をyyyy/MM/dd形式で取得する
     * @param date 日付
     * @returns 日付文字列
     */
    static GetCurrentYmd() {
        return this.Format(new Date(), FORMAT_DATE);
    }

    /**
     * 現在時刻を24時間形式で取得する
     * @param date 日付
     * @returns 時刻文字列
     */
    static GetCurrentTime() {
        return this.Format(new Date(), FORMAT_TIME);
    }

    /**
     * 指定した日付をyyyy/MM/dd形式で取得する
     * @param date 日付
     * @returns 日付文字列
     */
    static FormatDate(date) {
        return this.Format(date, FORMAT_DATE);
    }

    /**
     * 指定した時刻を24時間形式で取得する
     * @param date 日付
     * @returns 時刻文字列
     */
    static FormatTime(date) {
        return this.Format(date, FORMAT_TIME);
    }

    /**
     * 書式変換
     * @param   date    日付
     * @param   format  書式
     * @returns 日付文字列
     */
    static Format(date, format) {
        return Utilities.formatDate(date, 'Asia/Tokyo', format);
    }
}