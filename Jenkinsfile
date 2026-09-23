pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'nodejs-status-api'
        CONTAINER_NAME = 'nodejs-api-container'
        PORT = '3000'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE_NAME .'
            }
        }

        stage('Stop & Remove Existing Container') {
            steps {
                sh '''
                if [ $(docker ps -a -q -f name=$CONTAINER_NAME) ]; then
                    docker stop $CONTAINER_NAME
                    docker rm $CONTAINER_NAME
                fi
                '''
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh 'docker run -d -p $PORT:$PORT --name $CONTAINER_NAME $DOCKER_IMAGE_NAME'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed and container deployed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}