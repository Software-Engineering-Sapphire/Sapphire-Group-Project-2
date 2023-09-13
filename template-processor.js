'use strict';

class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dict) {
        let placeholder;
        let placeholderName;
        while (/\{{2}.*\}{2}/.test(this.template)) {
            placeholder = /\{{2}.*\}{2}/.exec(this.template)[0];
            placeholderName = placeholder.slice(2, placeholder.length - 2);
            if (placeholderName in dict) {
                this.template = this.template.replace(placeholder, dict[placeholderName]);
            } else {
                this.template = this.template.replace(placeholder, "");
            }
        }
    }
}