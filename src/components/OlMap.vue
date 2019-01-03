/* eslint-disable indent */
<template>
  <div id="olMap" class="olMap"></div>
</template>

<script>
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
// import VectorLayer from 'ol/layer/Vector';
import { BingMaps } from 'ol/source';
// import  from 'ol/source/XYZ';
// import {
//   Style, Fill, Stroke, Circle,
// } from 'ol/style';

// const createVectorStyleFunction = function setStyle() {
//   return function getStyle(feature) {
//     const strokeWidth = feature.get('strokeWidth');
//     const strokeColor = feature.get('strokeColor');
//     const fillColor = feature.get('fillColor');

//     let setStrokeWidth;
//     let setStrokeColor;
//     let setFillColor;

//     if (strokeWidth !== undefined) {
//       setStrokeWidth = strokeWidth;
//     } else {
//       setStrokeWidth = 2;
//     }
//     if (strokeColor !== undefined) {
//       setStrokeColor = strokeColor;
//     } else {
//       setStrokeColor = 'blue';
//     }
//     if (fillColor !== undefined) {
//       setFillColor = fillColor;
//     } else {
//       setFillColor = 'rgba(255, 255, 255, 0.2)';
//     }

//     const style = new Style({
//       fill: new Fill({
//         color: 'rgba(255, 255, 255, 0.2)',
//       }),
//       stroke: new Stroke({
//         color: setStrokeColor,
//         width: setStrokeWidth,
//       }),
//       image: new Circle({
//         radius: 12,
//         fill: new Fill({
//           color: setFillColor,
//         }),
//         stroke: new Stroke({
//           color: 'blue',
//           width: 4,
//         }),
//       }),
//     });
//     return [style];
//   };
// };

const mapCenter = [3720577, 4167129];

const bingMapsAerial = new TileLayer({
  preload: Infinity,
  source: new BingMaps({
    key: 'Ap3sskZ5BccP6TvBr0FoLc9orA4_R1uh-8UjpOKYciXL1hNMtAJr_BdxMjTJNkpv',
    imagerySet: 'AerialWithLabels',
  }),
  name: 'bing',
  visible: true,
});

// const dali = new TileLayer({
//   source: new XYZ({
//     visible: true,
//     url: '/dimos_idaliou/{z}/{x}/{y}.png',
//   }),
//   name: 'mbtilemap',
// });

// // eslint-disable-next-line no-unused-vars
// const geocodingLayer = new VectorLayer({
//   style: createVectorStyleFunction(),
//   source: new Vector(),
//   name: 'geocodingLayer',
// });


// dali.on('tileloadstart', () => {
//   olMap.updateSize();
// });

export default {
  data() {
    return {
      mapExtent: [3589788, 4102833, 3857012, 4262128],
      olMap: new Map({
        layers: [
          bingMapsAerial,
          // dali,
          // geocodingLayer,
        ],
        view: new View({
          center: mapCenter,
          zoom: 16,
          minZoom: 14,
          maxZoom: 17,
          extent: this.mapExtent,
        }),
      }),
    };
  },
  mounted() {
    this.olMap.setTarget('olMap');
  },
};
</script>

<style lang="scss" scoped>
.olMap {
  height: 100vh;
}
</style>
