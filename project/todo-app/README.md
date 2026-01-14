# Todo app
Deploy with
```
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/service.yaml
```

To test the service open `http://localhost:8082` in your browser. You should get a JSON response with status ok.
