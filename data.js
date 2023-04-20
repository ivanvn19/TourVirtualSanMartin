var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente",
      "name": "Frente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.9542673095885856,
          "pitch": 0.203484162475009,
          "rotation": 0,
          "target": "1-fachada-exterior"
        },
        {
          "yaw": -0.17858870398695537,
          "pitch": 0.08700674473002934,
          "rotation": 0,
          "target": "3-ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-fachada-exterior",
      "name": "Fachada exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.02498860637529532,
        "pitch": 0.04756376041098065,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 0.02498860510088008,
          "pitch": 0.1265979269878592,
          "rotation": 0,
          "target": "0-frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5908748711500493,
        "pitch": 0.23484606702923472,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -2.810811479954843,
          "pitch": 0.17430056190308996,
          "rotation": 0,
          "target": "3-ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ingreso",
      "name": "Ingreso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0098486229634176,
        "pitch": 0.08865745047194373,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 1.822266917226436,
          "pitch": 0.12067789497119819,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": 0.322754075035796,
          "pitch": 0.12135753575449293,
          "rotation": 0,
          "target": "4-living---comedor"
        },
        {
          "yaw": 2.8639709131956064,
          "pitch": 0.16268677937625142,
          "rotation": 0,
          "target": "0-frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living---comedor",
      "name": "Living - comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1359669649110415,
        "pitch": 0.26186434639361167,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -3.0853613563528093,
          "pitch": 0.17936648714290904,
          "rotation": 0,
          "target": "3-ingreso"
        },
        {
          "yaw": 1.2668749985267649,
          "pitch": 0.2528881382374024,
          "rotation": 0,
          "target": "5-ingreso-habitaciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ingreso-habitaciones",
      "name": "Ingreso habitaciones",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1698031432226887,
        "pitch": 0.15168528175744633,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -1.1582241362735317,
          "pitch": 0.20289551911493575,
          "rotation": 0,
          "target": "6-ingreso-habitaciones"
        },
        {
          "yaw": 0.3844574775787457,
          "pitch": 0.13984886449321365,
          "rotation": 0,
          "target": "9-habitacin-principal"
        },
        {
          "yaw": -2.7625333810969774,
          "pitch": 0.22823754829296306,
          "rotation": 0,
          "target": "4-living---comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ingreso-habitaciones",
      "name": "Ingreso habitaciones",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2977122262845313,
        "pitch": 0.023781880205490324,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -0.4752417030473115,
          "pitch": 0.09446915338502748,
          "rotation": 0,
          "target": "11-bao"
        },
        {
          "yaw": 0.18756806252314284,
          "pitch": 0.045405627496716505,
          "rotation": 1.5707963267948966,
          "target": "10-habitacin"
        },
        {
          "yaw": -1.093362324899159,
          "pitch": 0.05039834645782193,
          "rotation": 4.71238898038469,
          "target": "7-habitacin"
        },
        {
          "yaw": 2.7656534297985313,
          "pitch": 0.14147581790039965,
          "rotation": 0,
          "target": "5-ingreso-habitaciones"
        },
        {
          "yaw": 2.0620711754236067,
          "pitch": 0.14740946184104686,
          "rotation": 4.71238898038469,
          "target": "9-habitacin-principal"
        },
        {
          "yaw": -2.9013197682452123,
          "pitch": 0.09173685132484977,
          "rotation": 1.5707963267948966,
          "target": "4-living---comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-habitacin",
      "name": "Habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09576756929432761,
        "pitch": 0.12188213605313791,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 1.8115718404147358,
          "pitch": 0.15236014900081862,
          "rotation": 0,
          "target": "6-ingreso-habitaciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao-en-suite",
      "name": "Baño en suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.30187713338772326,
        "pitch": 0.30024623759431535,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.8331496136054586,
          "pitch": 0.18775778571872337,
          "rotation": 4.71238898038469,
          "target": "9-habitacin-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-habitacin-principal",
      "name": "Habitación principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2801896789988305,
        "pitch": 0.15440735456949284,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": -2.9042427802310886,
          "pitch": 0.14350645460945266,
          "rotation": 0,
          "target": "5-ingreso-habitaciones"
        },
        {
          "yaw": -2.392698570658105,
          "pitch": 0.15794283121000774,
          "rotation": 0,
          "target": "8-bao-en-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-habitacin",
      "name": "Habitación",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.18660688623015353,
        "pitch": 0.11077398511076808,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.5994373259720236,
          "pitch": 0.15247514210085988,
          "rotation": 0,
          "target": "6-ingreso-habitaciones"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3755849018049311,
        "pitch": -0.0035592483665283225,
        "fov": 1.2634123859167636
      },
      "linkHotspots": [
        {
          "yaw": 2.7824522415927646,
          "pitch": 0.20056522458849457,
          "rotation": 0,
          "target": "6-ingreso-habitaciones"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TourVirutalSanMartin",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
