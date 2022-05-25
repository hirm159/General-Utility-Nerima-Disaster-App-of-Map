<template>
  <v-container>
    <v-row class="text-center" dense no-gutters>
      <v-col>
        <h1>Home</h1>
      </v-col>
    </v-row>
    <v-row justify="center" dense no-gutters>
      <v-col>
        <l-map ref="map" id="mainMap" :zoom="zoom" :center="center" :maxZoom="maxZoom">
          <l-control-layers position="topright"></l-control-layers>
          <l-control position="bottomleft">
            <v-btn
              small
              color="primary"
              v-on:click="search('001');"
            >
              区庁舎
            </v-btn>
            <v-btn
              small
              color="cyan"
              v-on:click="search('002');"
            >
              避難所
            </v-btn>
            <v-btn
              small
              v-on:click="search('999');"
              color="teal"
            >
              全て表示
            </v-btn>
            <v-btn
              small
              v-on:click="search('000');"
            >
              リセット
            </v-btn>
          </l-control>
          <l-tile-layer
            v-for="tileProviders in tileProviders"
            :key="tileProviders.name"
            :name="tileProviders.name"
            :visible="tileProviders.visible"
            :url="tileProviders.url"
            :attribution="tileProviders.attribution"
            layer-type="base"
          />
          <l-tile-layer
            v-for="tileOptions in tileOptions"
            :key="tileOptions.name"
            :name="tileOptions.name"
            :visible="tileOptions.visible"
            :opacity="tileOptions.opacity"
            :url="tileOptions.url"
            :attribution="tileOptions.attribution"
            layer-type="overlay"
          />
          <l-marker
            v-for="facilities in facilities"
            :key="facilities.name"
            :lat-lng="[facilities.latitude, facilities.longitude]"
          >
            <l-popup>
              <div class="name">{{facilities.name}}</div>
              <div class="address">{{facilities.address}}</div>
              <div class="facility">{{facilities.facility}}</div>
            </l-popup>
            <l-icon
              icon-url="https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
            />
          </l-marker>
        </l-map>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LControlLayers, LMarker, LPopup, LIcon, LControl } from "vue2-leaflet";
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    LMap, LTileLayer, LControlLayers, LMarker, LPopup, LIcon, LControl
  },

  data() {
    return {
      zoom: 13,
      maxZoom: 17,
      center: [35.73569466802087, 139.65174632215127],
      tileProviders: [
        {
          name: 'OpenStreetMap',
          visible: true,
          attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        },
        {
          name: '国土地理院タイル',
          visible: false,
          attribution: '&copy; <a target="_blank" href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a> contributors',
          url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
        },
        {
          name: '国土地理院写真',
          visible: false,
          attribution: '&copy; <a target="_blank" href="https://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a> contributors',
          url: 'https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',
        }
      ],
      tileOptions: [
        {
          name: '洪水浸水想定区域（想定最大規模）',
          visible: false,
          opacity: 0.5,
          attribution: '&copy; <a target="_blank" href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a> contributors',
          url: 'https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png',
        },
        {
          name: '洪水浸水想定区域（計画規模（現在の凡例））',
          visible: false,
          opacity: 0.5,
          attribution: '&copy; <a target="_blank" href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a> contributors',
          url: 'https://disaportaldata.gsi.go.jp/raster/01_flood_l1_shinsuishin_newlegend_data/{z}/{x}/{y}.png',
        },
      ],
      facilities: [
        {
          name : '',
          address : '',
          latitude: 0,
          longitude: 0,
          facility : '',
        }
      ],
    };
  },
  methods: {
    search(kbn){
      if (kbn === '000') {
        this.facilities = [];
        return;
      }
        const rootPath = 'http://localhost:8080/'
//        const rootPath = 'https://gen-util-dis-app-of-map-api.herokuapp.com/'
      const path = rootPath + 'main/search'
      axios.post(path, {
        kbn : kbn
      })
        .then(response => {
          this.facilities = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
}
</script>
<style>
  @media screen and (max-width:639px) {
    #mainMap {
      height: 530px;
    }
  }
  @media screen and (min-width:640px) and (max-width:1369px) {
    #mainMap {
      height: 600px;
    }
  }
  @media screen and (min-width:1370px) {
    #mainMap {
      height: 800px;
    }
  }

  .leaflet-control-container::after {
    content: url(https://maps.gsi.go.jp/image/map/crosshairs.png);
    z-index: 1000;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>