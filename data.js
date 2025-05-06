var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "living",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.1075356698622727,
          "pitch": -0.030159630083259614,
          "rotation": 1.5707963267948966,
          "target": "1-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-foyer",
      "name": "foyer",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.06546588177724288,
        "pitch": -0.016530414758152645,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.5070004939694597,
          "pitch": 0.25060692648905736,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": -0.3054635340620937,
          "pitch": 0.11345471862274259,
          "rotation": 3.141592653589793,
          "target": "8-cortyard"
        },
        {
          "yaw": 0.4110384995168648,
          "pitch": 0.09074471104493043,
          "rotation": 1.5707963267948966,
          "target": "2-dining"
        },
        {
          "yaw": 0.2617859775799616,
          "pitch": 0.1131431707794448,
          "rotation": 0,
          "target": "4-wash"
        },
        {
          "yaw": 0.4392782423820716,
          "pitch": -0.010824329320476167,
          "rotation": 0.7853981633974483,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "dining",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.00006817390000435353,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.7830981657921718,
          "pitch": 0.022248760044234928,
          "rotation": 4.71238898038469,
          "target": "3-kitchen"
        },
        {
          "yaw": -1.2839614426532275,
          "pitch": -0.03500839803756328,
          "rotation": 0,
          "target": "4-wash"
        },
        {
          "yaw": 1.899858508281108,
          "pitch": 0.022355781272590747,
          "rotation": 0,
          "target": "5-foyer-1"
        },
        {
          "yaw": -3.0196912790461425,
          "pitch": 0.006157347069462915,
          "rotation": 1.5707963267948966,
          "target": "7-ff-living1"
        },
        {
          "yaw": 3.1315873516233577,
          "pitch": 0.0967980246782858,
          "rotation": 0,
          "target": "6-ff-living"
        },
        {
          "yaw": 3.018828152773297,
          "pitch": 0.31043230400785937,
          "rotation": 0,
          "target": "8-cortyard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "kitchen",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.00008417230000290488,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.4518178044756311,
          "pitch": 0.1534811847174442,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 1.9973402322674119,
          "pitch": 0.07371221817505536,
          "rotation": 0,
          "target": "5-foyer-1"
        },
        {
          "yaw": 1.9614635931989133,
          "pitch": 0.2973492193028111,
          "rotation": 2.356194490192345,
          "target": "4-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wash",
      "name": "wash",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.5227904219906367,
          "pitch": -0.03574454822267903,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 0.802055654258119,
          "pitch": 0.15462292860468452,
          "rotation": 1.5707963267948966,
          "target": "2-dining"
        },
        {
          "yaw": -1.2946332211119476,
          "pitch": -0.02729408053445681,
          "rotation": 1.5707963267948966,
          "target": "7-ff-living1"
        },
        {
          "yaw": -2.582903661502357,
          "pitch": 0.15123254043042778,
          "rotation": 4.71238898038469,
          "target": "5-foyer-1"
        },
        {
          "yaw": -1.3879316491895786,
          "pitch": 0.1618368809726114,
          "rotation": 3.141592653589793,
          "target": "8-cortyard"
        },
        {
          "yaw": -1.4603452001864934,
          "pitch": 0.005330542780951575,
          "rotation": 0,
          "target": "6-ff-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-foyer-1",
      "name": "foyer 1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9566440274053285,
          "pitch": 0.031056214424353357,
          "rotation": 4.71238898038469,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ff-living",
      "name": "ff living",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.014042024262327146,
          "pitch": 0.14620917330498173,
          "rotation": 0,
          "target": "7-ff-living1"
        },
        {
          "yaw": -2.6498744769191624,
          "pitch": 0.40880832020616253,
          "rotation": 0,
          "target": "8-cortyard"
        },
        {
          "yaw": -2.9914193394200552,
          "pitch": -0.00585308027685727,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -2.7982837134617604,
          "pitch": 0.07326747259225996,
          "rotation": 4.71238898038469,
          "target": "4-wash"
        },
        {
          "yaw": 2.89635433323431,
          "pitch": -0.02316512632221368,
          "rotation": 4.71238898038469,
          "target": "3-kitchen"
        },
        {
          "yaw": -2.1945861819249917,
          "pitch": 0.08806381036944089,
          "rotation": 1.5707963267948966,
          "target": "5-foyer-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-ff-living1",
      "name": "ff living1",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.2755388383125847,
          "pitch": 0.3647104209667891,
          "rotation": 3.141592653589793,
          "target": "6-ff-living"
        },
        {
          "yaw": 1.5675397796544663,
          "pitch": 0.25605287220490247,
          "rotation": 9.42477796076938,
          "target": "8-cortyard"
        },
        {
          "yaw": 1.514812767084707,
          "pitch": 0.042198494804392084,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cortyard",
      "name": "cortyard",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.0176622927003365,
          "pitch": 0.19474527444340772,
          "rotation": 7.853981633974483,
          "target": "5-foyer-1"
        },
        {
          "yaw": 0.9558997224885353,
          "pitch": 0.037177275961056466,
          "rotation": 5.497787143782138,
          "target": "0-living"
        },
        {
          "yaw": -0.04308510620551509,
          "pitch": -0.011708990342997438,
          "rotation": 9.42477796076938,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
