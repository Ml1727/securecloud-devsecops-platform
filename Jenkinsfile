pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                echo 'Code already available in Jenkins workspace'
            }
        }

        stage('Build Containers') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Check Containers') {
            steps {
                sh 'docker ps'
            }
        }

        stage('Health Check') {
            steps {
                sh 'curl -f http://localhost:5000/api/health'
                sh 'curl -f http://localhost:8080'
            }
        }
    }
}
