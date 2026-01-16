# Devops with Kubernetes submissions
Exercise submissions for University of Helsinki MOOC-course Devops with Kubernetes

## Cluster
To create the k3d cluster, the following command was used:
```
k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2
```

A local persistent volume was created:
```
docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube
kubectl apply -f cluster/persistentvolume.yaml
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
