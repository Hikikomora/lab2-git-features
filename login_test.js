const {Builder, By, until} = require('selenium-webdriver');
const fs = require('fs');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000/login');
    await driver.takeScreenshot().then(data => {
      fs.writeFileSync('step1_login_page.png', data, 'base64');
    });

    await driver.findElement(By.name('username')).sendKeys('admin');
    await driver.findElement(By.name('password')).sendKeys('12345');

    await driver.takeScreenshot().then(data => {
      fs.writeFileSync('step2_filled_form.png', data, 'base64');
    });

    await driver.findElement(By.css('button[type=submit]')).click();

    await driver.wait(until.urlContains('dashboard'), 5000);

    await driver.takeScreenshot().then(data => {
      fs.writeFileSync('step3_after_login.png', data, 'base64');
    });

    console.log('Login test passed.');

  } catch (e) {
    console.error('Test failed', e);
  } finally {
    await driver.quit();
  }
}

runTest();
