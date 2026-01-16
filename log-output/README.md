# Log output
Contains two applications:
- `log-writer`
- `pingpong`

## Deploying
Deploy with
```
kubectl apply -f manifests
```

## Accessing
To test the service open `http://localhost:8081` in your browser. You should get a timestamp with a random string from the `log-writer` app.
Opening `http://localhost:8081/pingpong` in your browser should give you page that says `pong 0`. The number should increase each time a requset is sent.
