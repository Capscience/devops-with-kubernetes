# Devops with Kubernetes submissions
Exercise submissions for University of Helsinki MOOC-course Devops with Kubernetes

## Cluster
To create the k3d cluster, the following command was used:
```
k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
```

A local persistent volume and namespaces for the project and exercises were created:
```
docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube
kubectl apply -f cluster
```


## Exercises
### Chapter 2
- [1.1](https://github.com/Capscience/devops-with-kubernetes/tree/1.1/log-output)
- [1.2](https://github.com/Capscience/devops-with-kubernetes/tree/1.2/project/todo-app)
- [1.3](https://github.com/Capscience/devops-with-kubernetes/tree/1.3/log-output)
- [1.4](https://github.com/Capscience/devops-with-kubernetes/tree/1.4/project/todo-app)
- [1.5](https://github.com/Capscience/devops-with-kubernetes/tree/1.5/project/todo-app)
- [1.6](https://github.com/Capscience/devops-with-kubernetes/tree/1.6/project/todo-app)
- [1.7](https://github.com/Capscience/devops-with-kubernetes/tree/1.7/log-output)
- [1.8](https://github.com/Capscience/devops-with-kubernetes/tree/1.8/project/todo-app)
- [1.9](https://github.com/Capscience/devops-with-kubernetes/tree/1.9/log-output)
- [1.10](https://github.com/Capscience/devops-with-kubernetes/tree/1.10/log-output)
- [1.11](https://github.com/Capscience/devops-with-kubernetes/tree/1.11/log-output)
- [1.12](https://github.com/Capscience/devops-with-kubernetes/tree/1.12/project/todo-app)
- [1.13](https://github.com/Capscience/devops-with-kubernetes/tree/1.13/project/todo-app)

### Chapter 3
- [2.1](https://github.com/Capscience/devops-with-kubernetes/tree/2.1/log-output)
- [2.2](https://github.com/Capscience/devops-with-kubernetes/tree/2.2/project)
- [2.3](https://github.com/Capscience/devops-with-kubernetes/tree/2.3/log-output)
- [2.4](https://github.com/Capscience/devops-with-kubernetes/tree/2.4/project)
- [2.5](https://github.com/Capscience/devops-with-kubernetes/tree/2.5/log-output)
- [2.6](https://github.com/Capscience/devops-with-kubernetes/tree/2.6/project)
- [2.7](https://github.com/Capscience/devops-with-kubernetes/tree/2.7/log-output)
- [2.8](https://github.com/Capscience/devops-with-kubernetes/tree/2.8/project)
