pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: '6077d5f4-13eb-487c-8d90-5639f46ac1d4', url: 'git@github.com:hungnhungit/nodejs.git'
            }
        }
    }
}