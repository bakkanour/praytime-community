/* ##### string ##### */
String.prototype.firstCapitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};


/* ##### time ##### */
Date.prototype.stdTimezoneOffset = function () {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.dst = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

/* ##### conf ##### */
function getConfFromLocalStorage() {
    return JSON.parse(localStorage.getItem("config"));
}

function removeConfFromLocalStorage() {
    return localStorage.removeItem("config");
}

/* ##### version ##### */
function getVersion() {
    return localStorage.getItem("version");
}

function setVersion(version) {
    return localStorage.setItem("version", version);
}

/* ##### others ##### */
/**
 * add zero to number if < to 10, ex : 1 becomes 01
 * @param {integer} value
 * @returns {String}
 */
function addZero(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}