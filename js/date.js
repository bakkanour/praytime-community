/* global prayer, getConfFromLocalStorage */

/**
 * class handling date and time
 * @type object
 */
var dateTime = {
    getCurrentMinute: function () {
        var date = new Date();
        return addZero(date.getMinutes());
    },
    getCurrentHour: function () {
        var date = new Date();
        return addZero(date.getHours());
    },
    /**
     * get day of month ex: 0, 1 ... 30
     * 0 is the first day
     */
    getCurrentDay: function () {
        var date = new Date();
        return date.getDate();
    },
    /**
     * get current month numbre 01, 02 ... 12
     */
    getCurrentMonth: function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        return addZero(month);
    },
    /**
     * get full current year ex: 2017
     */
    getCurrentYear: function () {
        var date = new Date();
        return date.getFullYear();
    },
    /**
     * get current time in hh:ii format or hh:ii:ss format depends on withSeconds arg
     * @param {bool} withSeconds
     * @returns {String}
     */
    getCurrentTime: function (withSeconds) {
        var date = new Date();
        var second = addZero(date.getSeconds());
        var time = this.getCurrentHour() + ':' + this.getCurrentMinute();
        if (withSeconds === true) {
            time += ':' + second;
        }
        return  time;
    },
    /**
     * get current gregorian date ex: Vendredi 26/05/2017
     * @returns {String}
     */
    getCurrentDate: function () {
        var day = addZero(this.getCurrentDay());
        var year = this.getCurrentYear();
        var dateText = (getConfFromLocalStorage().lang === "ar" ? "" : this.getCurrentDayText())
                + ' ' + day
                + '/' + this.getCurrentMonth()
                + '/' + year;
        return dateText;
    },
    /**
     * get current day name ex: Vendredi
     * @returns {Array}
     */
    getCurrentDayText: function () {
        var date = new Date();
        var dayIndex = date.getDay();
        days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
        return days[dayIndex].trans(getConfFromLocalStorage().lang);
    },
    getLastSundayOfMonth: function (month) {
        var date = new Date();
        date.setMonth(month);
        date.setDate(30);
        date.setDate(date.getDate() - date.getDay());
        return date.getDate();
    },
    /**
     * true if date between last sunday of march and last sunday of october
     * @returns {Boolean}
     */
    isDst: function () {
        return (new Date()).dst();
    },
    /**
     * true if date is last sunday of march or october
     * @returns {Boolean}
     */
    isLastSundayDst: function () {
        var date = new Date();
        var currentMonth = date.getMonth();
        var currentDay = date.getDate();
        if ($.inArray(currentMonth, [2, 9]) !== -1) {
            if (currentDay >= this.getLastSundayOfMonth(currentMonth)) {
                return true;
            }
        }
        return false;
    }
};