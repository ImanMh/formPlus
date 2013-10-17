/**
 *
 * @namespace
 * @version 0.1.0
 * @author Iman Mohamadi
 */
if( typeof window.formPlus === 'undefined' ) {
    window.formPlus = {};
};/**
 *
 * @fileOverview This file is only responsible for validating text inputs and text areas.
 */

formPlus.validateText = function (element, rule) {
    this.el = element;
    this.rule = rule;
};