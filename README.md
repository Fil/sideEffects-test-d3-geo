How much do we gain by having sideEffects: true in a simple d3-geo/d3-geo-polygon example?

run `npx webpack` with various settings:

| compression | sideEffects | size (bytes) |
| ----------- | ----------- |         ---: |
| - | - | 404380 |
| - | yes | 204113 |
| yes | - | 41430 |
| yes | yes | 38309 |
