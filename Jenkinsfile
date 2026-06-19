pipeline {
    agent any

    stages {
        stage('Build App Containers') {
            steps {
                sh 'docker-compose -p securecloud-devsecops-platform -f docker-compose.jenkins.yml build'
            }
        }

        stage('Deploy App Containers') {
            steps {
                sh 'docker-compose -p securecloud-devsecops-platform -f docker-compose.jenkins.yml up -d'
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
