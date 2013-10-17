/**
 *
 * @param element
 * @param rule
 * @fileOverview This file is only responsible for validating text inputs and text areas.
 */
formPlus.validateText = function (element, rule) {
    if ( (el.type != 'text' && el.tagName != 'INPUT')
            || el.tagName != 'TEXTAREA' ) {
        throw new Error('');
    }
    this.el = element;
    this.rule = rule;
};