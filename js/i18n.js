/* global getConfFromLocalStorage */

/**
 * @author ibrahim.zehhaf.pro@gmail.com
 * Handel internationalisation
 */

var i18n = {
    json: {},
    /**
     * Load translation file
     */
    loadJson: function () {
        $.ajax({
            url: "conf/i18n.json?" + (new Date()).getTime(),
            async: false,
            success: function (data) {
                i18n.json = data;
            }
        });
    },
    /**
     * parse dom and translate texts
     */
    parseAndTranslate: function () {
        $("[data-text]").each(function (i, elem) {
            $(elem).text($(elem).data("text").trans(getConfFromLocalStorage().lang));
        });
    }
};

/**
 * translate a string
 * @param {string} lang
 * @param {boolean} noCapitalize
 * @returns {string} the translated string
 */
String.prototype.trans = function (lang, noCapitalize) {
    try {
        var trans = i18n.json[this][lang];
        if (trans === "") {
            trans = this;
        }

        if (typeof (noCapitalize) === "undefined" || noCapitalize === false) {
            return trans.firstCapitalize();
        }

        return trans;
    } catch (err) {
        return this.firstCapitalize();
    }
};

i18n.loadJson();
i18n.parseAndTranslate();
