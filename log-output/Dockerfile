FROM rust:alpine AS builder

WORKDIR /build
COPY . .
RUN cargo build --release

FROM alpine
COPY --from=builder /build/target/release/log-output /log-output
CMD ["/log-output"]
