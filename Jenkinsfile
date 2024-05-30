pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/MeghaMallikarjuna/GC-Automation-FE-'
            }
        }
        stage('Install Node.js dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Install Playwright') {
            steps {
                sh 'npm init playwright@latest'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Generate Report') {
            steps {
                script {
                    sh 'npx playwright show-report'
                }
                // Optionally, archive the report files for future reference
                archiveArtifacts artifacts: 'report/**/*', allowEmptyArchive: true
            }
        }
    }
}