### Create docker image
```bash
docker build -t devops-task-kibria .
```

### Run docker container
```bash
docker container run -d --name devops-task-kibria -p 3000:3000 -e VERSION=v01 -e PORT=3000 devops-task-kibria:latest
```

### Docker tag
```bash
docker tag devops-task-kibria docker.io/8kamrul/devops-task-kibria
```

### Docker push
```bash
docker push docker.io/8kamrul/devops-task-kibria
```