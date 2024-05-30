pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your Git repository
                git branch: 'main', url: 'https://github.com/yourusername/your-repo.git'
            }
        }
        stage('Install Node.js dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        stage('Install Playwright') {
            steps {
                // Install Playwright
                sh 'npm init playwright@latest'
            }
        }
        stage('Run tests') {
            steps {
                // Run Playwright tests
                sh 'npx playwright test'
            }
        }
        stage('Generate Report') {
    steps {
        sh 'npm install mochawesome mochawesome-report-generator --save-dev'
        sh 'npx mochawesome --reporter html --reporter-options reportDir=reports'
    }
}
    }
}