fetch("./data.json", { mode: "no-cors" })
  .then(function (res) {
    //let result = res.json();

    let result = [
      {
        data: {
          id: "VOCATION",
          type: "VOCATION_GROUP",
        },
        group: "nodes",
      },
      {
        data: {
          id: "POST SERVICE",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "PEOPLE MOVER",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "GOODS DELIVERY",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "CRAFTSMEN",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "CLEANINGS",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "CONSTRUCTION",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "MERCHANT",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "UTILITIES",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "AMBULANCE",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "FOOD DELIVERY",
          type: "VOCATION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "THERMO CONTROLLED",
          type: "VOCATION",
        },
        group: "nodes",
      },

      {
        data: {
          source: "VOCATION",
          target: "POST SERVICE",
          type: "E",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "PEOPLE MOVER",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "GOODS DELIVERY",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "CRAFTSMEN",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "CLEANINGS",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "CONSTRUCTION",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "MERCHANT",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "UTILITIES",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "AMBULANCE",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "FOOD DELIVERY",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VOCATION",
          target: "THERMO CONTROLLED",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },

      {
        data: {
          id: "MISSION",
          type: "MISSION_GROUP",
        },
        group: "nodes",
      },

      {
        data: {
          id: "100-75 URBAN <50 km",
          type: "MISSION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "75-50 URBAN <50 km",
          type: "MISSION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "50 URBAN <50 km",
          type: "MISSION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "50-25 URBAN <50 km",
          type: "MISSION",
        },
        group: "nodes",
      },
      {
        data: {
          id: "25-0 URBAN <50 km",
          type: "MISSION",
        },
        group: "nodes",
      },
      {
        data: {
          source: "MISSION",
          target: "100-75 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "MISSION",
          target: "75-50 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "MISSION",
          target: "50 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "MISSION",
          target: "50-25 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "MISSION",
          target: "25-0 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          id: "VEHICLE",
          type: "VEHICLE_GROUP",
        },
        group: "nodes",
      },
      {
        data: {
          id: "295C75",
          type: "VEHICLE",
        },
        group: "nodes",
      },
      {
        data: {
          id: "295B75",
          type: "VEHICLE",
        },
        group: "nodes",
      },
      {
        data: {
          id: "295C73",
          type: "VEHICLE",
        },
        group: "nodes",
      },
      {
        data: {
          source: "VEHICLE",
          target: "295C75",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VEHICLE",
          target: "295B75",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "VEHICLE",
          target: "295C73",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },

      {
        data: {
          source: "295C73",
          target: "100-75 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "295C73",
          target: "75-50 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "295C73",
          target: "50 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "295C73",
          target: "50-25 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
      {
        data: {
          source: "295C73",
          target: "25-0 URBAN <50 km",
          type: "I",
          altGroupId: [],
        },
        group: "edges",
      },
    ];

    return result;
  })
  .then(function (data) {
    var cytoStyle_;

    cytoStyle_ = cytoscape
      .stylesheet()
      .selector("node")
      .css({ content: "data(id)" })
      .selector("edge")
      .css({
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        "target-arrow-color": "gold",
        width: 1,
        "line-color": "gold",
        "target-arrow-color": "gold",
      })

      .selector('[type="VOCATION"]')
      .css({ "background-color": "gold" })
      .selector('[type="MISSION"]')
      .css({ "background-color": "blue" })
      .selector(".selected")
      .css({ "background-color": "LimeGreen" })
      .selector(".highlighted")
      .css({ "background-color": "red" })
      .selector(".vincolo")
      .css({
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        width: 2,
        "line-color": "magenta",
        "target-arrow-color": "magenta",
      })
      .selector(".incompatibile")
      .css({
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        "target-arrow-fill": "filled",
        width: 2,
        "line-color": "skyblue",
        "target-arrow-color": "skyblue",
      })
      .selector(".alternativo")
      .css({
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        width: 2,
        "line-color": "darkblue",
        "target-arrow-color": "darkblue",
      })
      .selector(".esclusivo")
      .css({
        "curve-style": "bezier",
        "target-arrow-shape": "triangle",
        width: 2,
        "line-color": "orange",
        "target-arrow-color": "orange",
      });

    var cy = (window.cy = cytoscape({
      container: document.getElementById("cy"),

      boxSelectionEnabled: false,
      autounselectify: true,

      layout: {
        name: "circle",
        concentric: function (node) {
          return node.degree();
        },
        levelWidth: function (nodes) {
          return 2;
        },
      },

      style: cytoStyle_,

      elements: data,
    }));
  });
