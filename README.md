How much do we gain by having [sideEffects: true](https://github.com/d3/d3-geo-polygon/pull/32) in a simple d3-geo/d3-geo-polygon example?

run `npx webpack` with various settings:

| compression | sideEffects | size (bytes) |
| ----------- | ----------- |         ---: |
| - | - | 404380 |
| - | yes | 204113 |
| yes | - | 41430 |
| yes | yes | 38309 |


The following functions are kept:
~~~
d3-array/src/merge.js
d3-array/src/range.js
d3-geo-polygon/src/adder.js
d3-geo-polygon/src/airocean.js
d3-geo-polygon/src/cartesian.js
d3-geo-polygon/src/clip/buffer.js
d3-geo-polygon/src/clip/index.js
d3-geo-polygon/src/clip/polygon.js
d3-geo-polygon/src/clip/rejoin.js
d3-geo-polygon/src/grayfuller.js
d3-geo-polygon/src/intersect.js
d3-geo-polygon/src/math.js
d3-geo-polygon/src/noop.js
d3-geo-polygon/src/pointEqual.js
d3-geo-polygon/src/polygonContains.js
d3-geo-polygon/src/polyhedral/index.js
d3-geo-polygon/src/polyhedral/matrix.js
d3-geo/src/adder.js
d3-geo/src/area.js
d3-geo/src/bounds.js
d3-geo/src/cartesian.js
d3-geo/src/centroid.js
d3-geo/src/circle.js
d3-geo/src/clip/antimeridian.js
d3-geo/src/clip/buffer.js
d3-geo/src/clip/circle.js
d3-geo/src/clip/index.js
d3-geo/src/clip/line.js
d3-geo/src/clip/rectangle.js
d3-geo/src/clip/rejoin.js
d3-geo/src/compose.js
d3-geo/src/constant.js
d3-geo/src/contains.js
d3-geo/src/distance.js
d3-geo/src/identity.js
d3-geo/src/interpolate.js
d3-geo/src/length.js
d3-geo/src/math.js
d3-geo/src/noop.js
d3-geo/src/path/area.js
d3-geo/src/path/bounds.js
d3-geo/src/path/centroid.js
d3-geo/src/path/context.js
d3-geo/src/path/index.js
d3-geo/src/path/measure.js
d3-geo/src/path/string.js
d3-geo/src/pointEqual.js
d3-geo/src/polygonContains.js
d3-geo/src/projection/azimuthal.js
d3-geo/src/projection/fit.js
d3-geo/src/projection/gnomonic.js
d3-geo/src/projection/index.js
d3-geo/src/projection/resample.js
d3-geo/src/rotation.js
d3-geo/src/stream.js
d3-geo/src/transform.js
~~~


The following functions are removed:
~~~
d3-array/src/array.js
d3-array/src/ascending.js
d3-array/src/bisect.js
d3-array/src/bisector.js
d3-array/src/constant.js
d3-array/src/cross.js
d3-array/src/descending.js
d3-array/src/deviation.js
d3-array/src/extent.js
d3-array/src/histogram.js
d3-array/src/identity.js
d3-array/src/index.js
d3-array/src/max.js
d3-array/src/mean.js
d3-array/src/median.js
d3-array/src/min.js
d3-array/src/number.js
d3-array/src/pairs.js
d3-array/src/permute.js
d3-array/src/quantile.js
d3-array/src/scan.js
d3-array/src/shuffle.js
d3-array/src/sum.js
d3-array/src/threshold/freedmanDiaconis.js
d3-array/src/threshold/scott.js
d3-array/src/threshold/sturges.js
d3-array/src/ticks.js
d3-array/src/transpose.js
d3-array/src/variance.js
d3-array/src/zip.js
d3-geo-polygon/src/cahillKeyes.js
d3-geo-polygon/src/collignon.js
d3-geo-polygon/src/complex.js
d3-geo-polygon/src/cox.js
d3-geo-polygon/src/cubic.js
d3-geo-polygon/src/icosahedral.js
d3-geo-polygon/src/imago.js
d3-geo-polygon/src/index.js
d3-geo-polygon/src/lagrange.js
d3-geo-polygon/src/newton.js
d3-geo-polygon/src/polyhedral/butterfly.js
d3-geo-polygon/src/polyhedral/collignon.js
d3-geo-polygon/src/polyhedral/cube.js
d3-geo-polygon/src/polyhedral/dodecahedral.js
d3-geo-polygon/src/polyhedral/octahedron.js
d3-geo-polygon/src/polyhedral/voronoi.js
d3-geo-polygon/src/polyhedral/waterman.js
d3-geo-polygon/src/tetrahedralLee.js
d3-geo/src/clip/extent.js
d3-geo/src/graticule.js
d3-geo/src/index.js
d3-geo/src/projection/albers.js
d3-geo/src/projection/albersUsa.js
d3-geo/src/projection/azimuthalEqualArea.js
d3-geo/src/projection/azimuthalEquidistant.js
d3-geo/src/projection/conic.js
d3-geo/src/projection/conicConformal.js
d3-geo/src/projection/conicEqualArea.js
d3-geo/src/projection/conicEquidistant.js
d3-geo/src/projection/cylindricalEqualArea.js
d3-geo/src/projection/equalEarth.js
d3-geo/src/projection/equirectangular.js
d3-geo/src/projection/identity.js
d3-geo/src/projection/mercator.js
d3-geo/src/projection/naturalEarth1.js
d3-geo/src/projection/orthographic.js
d3-geo/src/projection/stereographic.js
d3-geo/src/projection/transverseMercator.js
~~~
