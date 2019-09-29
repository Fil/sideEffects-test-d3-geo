import { geoPath } from "d3-geo";
import { geoAirocean } from "d3-geo-polygon";

const projection = geoAirocean(), path = geoPath(projection);

console.log(path({type:"Sphere"}));
