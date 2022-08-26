# Cypress-Automate-Percy

## Setup

- Clone the repo <br>
`git clone https://github.com/SachinMNair/Cypress-Automate-Percy.git`

- Install browserstack-cypress-cli <br>
`sudo npm i -g browserstack-cypress-cli`

- Export the Percy Token for the project <br>
`export PERCY_TOKEN=<your_Percy_project_token>`

## Running your tests

- Run your test using the below command <br>
`npx percy exec -- browserstack-cypress run --sync --username <your_BS_username> --key <your_BS_access_key>`

## Check your results

- Go to the Automate Dashboard to check the Automation test/build <br>
`http://automate.browserstack.com/`

- Go to the Percy dashboard to check the Percy (visual testing) build <br>
`https://percy.io/`


