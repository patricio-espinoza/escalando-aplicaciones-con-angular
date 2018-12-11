import { browser, by, element } from 'protractor';

export class LoginPage {
    selectors = {
        'form' : 'form',
        'email' : 'input[name="email"]',
        'password' : 'input[name="password"]',
        'checkbox' : '',
        'selectGroup' : 'mat-select[name="group"]',
        'loginButton' : 'mat-card-actions .mat-primary',
    };

    navigateToLogin() {
        return browser.get('/login');
    }

    setEmail(emailValue) {
        element(by.css(this.selectors['email'])).sendKeys(emailValue);
    }

    setPassword(passwordValue) {
        element(by.css(this.selectors['password'])).sendKeys(passwordValue);
    }

    getSelectLastGroupOptionValue() {
        element(by.css(this.selectors['selectGroup'])).click()
        .then(() => element.all(by.css('mat-option')).last().click());

    }

    logIn() {
        element(by.css(this.selectors['form'])).submit();
    }
}
