pipeline {
    agent any

    stages {
        stage('Build Containers') {
            steps {
                sh 'docker-compose -p securecloud-devsecops-platform build'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker-compose -p securecloud-devsecops-platform up -d'
            }
        }

        stage('Health Check') {
            steps {
                sh 'curl -f http://localhost:5000/api/health'
                sh 'curl -f http://localhost:8080'
                sh 'docker ps'
            }
        }
    }
}
