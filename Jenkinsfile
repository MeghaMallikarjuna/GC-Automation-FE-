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
        stage('Compile') {
            steps {
                sh 'tsc'
            }
        }
        stage('Run') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Result') {
            steps {
                sh 'npx playwright show-report'
            }
        }
    }
}