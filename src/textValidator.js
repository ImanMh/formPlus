/**
 * Creates an instance of TextValidator.
 *
 * @constructor
 * @this {TextValidator}
 * @throws {Error} If el is not a text field or textArea.
 * @param {Node} element The element you want to validate.
 * @param {RegExp} regExp The validation pattern.
 */
formPlus.TextValidator = function (element, regExp) {
    if( (element.tagName == 'INPUT' && element.type != 'text') ||
        (element.tagName != 'INPUT' && element.tagName != 'TEXTAREA') ) {
        throw new Error('invalid element type, only text input and text areas are supported.');
    }
    /** @private */ this.el = element;

    if( ! (regExp instanceof RegExp) ) {
        throw new Error('invalid regular expression.');
    }
    /** @private */ this.rule = regExp;
};

/**
 * Runs validation using rule over el's value.
 *
 * @this {TextValidator}
 * @return {boolean} True if input content is valid.
 */
formPlus.TextValidator.prototype.isValid = function() {
    return this.rule.test(this.el.value);
};