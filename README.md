## Setup

**Install Node.js and NPM**

Install NPM on your local machine. Here's the [instruction](https://phoenixnap.com/kb/install-node-js-npm-on-windows) for installation of Node.js and NPM. 
Validate successful installation of Node.js Packet Manager version 
```shell
npm version
```

**Run tests locally**

To open Cypress on your machine run command from `cypress-quotes-task-main` directory.
```shell
npx cypress open
```
Upon successful completion of this command, the Cypress window launches. You can run each test file one by one by clicking on the file name in the Cypress window or just click the "Run all specs" button in the Cypress window.

**Run tests in terminal**

You can run cypress tests in your terminal by running from `cypress-quotes-task-main` directory.
```shell
npx cypress run 
```
**Cypress and GitHub Actions**

Cypress is already integrated to this repository. On push to this repository, the job will provision and start a GitHub-hosted Ubuntu Linux instance to run the outlined steps for the declared cypress-run job within the jobs section of the configuration.
To see the results of each run you can open the Actions sections of this repository

**Run test from Cypress dashboard**

From [Cypress dashboard](https://cloud.cypress.io/projects/ae677g) we can controll each run and see results of each test execution together with screenshots/videos.

Please, send me email to vanyamosiychuk@gmail.com. I will add you to the Cypress dashboard as an admin.

# Test task

## Parts that should be test-automated

* API: All tests are located in `cypress-quotes-task-main/cypress/e2e/api.cy.js`
* Website page 1: All tests are located in `cypress-quotes-task-main/cypress/e2e/scroll.cy.js`
* Website page 2: All tests are located in `cypress-quotes-task-main/cypress/e2e/delayed.cy.js`

## Reasons for using a particular JS toolbox

### My expirience

Cypress.io emerged as the ideal choice for my task due to its seamless installation process and strong alignment with the project's architecture. The straightforward setup of Cypress.io allowed me to quickly integrate it into the project without expending excessive time and effort on configuring the testing framework. This efficient onboarding process ensured that I could promptly focus on writing tests, maximizing my productivity and enabling me to meet the project's demanding timeline.
By encompassing a comprehensive range of features, Cypress.io eliminated the need for integrating and managing multiple testing tools. 

I successfully utilized Cypress.io to develop both API tests and UI tests for this project. 

Within the allocated time limits, I successfully integrated the Cypress tests into the project's GitHub Actions workflow and configured the Cypress Dashboard. This ensured efficient automation of test execution and comprehensive reporting for effective testing and collaboration.

### Reasons for using a particular JavaScript testing framework, such as Cypress.io

Here is a great article about [10 reasons why you should use Cypress for web testing automation](https://dev.to/walmyrlimaesilv/10-reasons-why-you-should-use-cypress-for-web-testing-automation-jlb)

Overall, Cypress.io's ease of use, fast test execution, real-time reloading and debugging, end-to-end testing capabilities, time-travel debugging, strong documentation and community support, and integration with CI tools make it a compelling choice for JavaScript testing. By leveraging these features, QA's can effectively and efficiently ensure the quality and stability of their web applications.
