# Log output
Contains three applications:
- `log-writer` writes logs to volume
- `log-api` reads and serves logs with http api
- `pingpong` answers `pong <request count>`

## Deploying
Manual deploy with
```
kubectl apply -k .
```

With ArgoCD deploys automatically on push to github.

## Accessing
To test the service open `http://localhost:8081` in your browser. You should get a timestamp with a random string from the `log-writer` app, as well as the number of pingpongs from the `pingpong` app, provided by the `log-api` app.
Opening `http://localhost:8081/pingpong` in your browser should give you page that says `pong 0`. The number should increase each time a requset is sent.
