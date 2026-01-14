# Todo app
Deploy with `kubectl apply -f manifests/deployment.yaml`
To test the web service, run
```kubectl port-forward todo-app-dep<TAB-COMPLETE> 3003:3000```
and open `http://localhost:3003` in your browser. You should get a JSON response with status ok.
