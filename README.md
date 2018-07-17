# Flame Example

This is an example of a small real world-ish program.

The only setup required after cloning is to run `npm install`.

There are 3 iterations of a server that responds with a JSON payload containing
an ISO date, and a UID.

1. Responds with a payload generated by a sub-optimal function
1. Responds with a payload generated by an optimal function
1. Responds with a payload generated by with a smaller call-graph

Each should produce different Flame results indicating the stack profiles of each. 

Upon profiling `1` you should see a very few request per second.

Running `2` you should see much higher requests per second, about 85x faster than `1`.

Running `3` you should see around double the amount of requests per second versus `2`.


To get started, generate a flame graph for the first server:

```sh
clinic flame --on-port 'autocannon localhost:$PORT' -- node 1-server-with-slow-function.js
```
