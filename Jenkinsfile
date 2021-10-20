pipeline {
    agent {
        docker {
            image 'adiniz/cypress'
        }
    }
    
    environment {
        HOME = "${WORKSPACE}"     
        CYPRESS_CACHE_FOLDER = '~/.cache/Cypress'
    }
    
    stages{
        stage('Build') {
            steps {      
                echo 'installing dependencies'
                sh 'npm ci'
                sh 'npm run cy:verify'
                sh 'npm run clean_reports'
            }
        }
        stage('Test and Report') {
            steps {
                echo 'running tests'
                sh 'npx cypress-tags run -e TAGS=$typeExecution,configFile=$env --browser chrome --headless'
            }
            post {
                    always {
                        cucumber failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', jsonReportDirectory: 'cypress/cucumber-json', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
                    }
                }
        }
        stage('Message') {
            steps {
                echo 'Test run finished!'
            }
        }
    }
}