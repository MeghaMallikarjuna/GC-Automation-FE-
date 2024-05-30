pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/MeghaMallikarjuna/GC-Automation-FE-'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage ('Install dependencies')
        {
            steps {
                sh 'npm init playwright@latest'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npx playwright test --headless'
            }
        }
        stage('Result') {
            steps {
                sh 'npx playwright show-report'
            }
        }
    }
}
        