pipeline {
    agent any

    stages {
        stage('Deploy From EC2 Project Folder') {
            steps {
                sh '''
                cd /home/ubuntu/securecloud-devsecops-platform
                git pull origin main
                docker compose up -d --build
                docker ps
                curl -f http://localhost:5000/api/health
                curl -f http://localhost:8080
                '''
            }
        }
    }
}
