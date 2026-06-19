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
                sh 'sleep 10'
                sh 'curl -f http://securecloud-backend:5000/api/health'
                sh 'curl -f http://securecloud-frontend:80'
                sh 'docker ps'
            }
        }
    }
}
