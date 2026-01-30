# Todo app
Deploy to cluster (created as instructed in main README.md) with
```
kubectl apply -k .
```

With ArgoCD setup, the new versions are automatically deployed on push to github.

To test the service open `http://localhost:8081` in your browser. You should get a HTML page with a picture that changes every 10 minutes, some todo-items and a form to add new ones. Every hour, a new todo for reading random wikipedia articles is created.
