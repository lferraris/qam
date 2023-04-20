/**
 * Group input {data} by {key}
 * @param {object[]} data   Array of objects
 * @param {string} key      Key to group by
 * @returns {object[]}      Grouped array of objects by key
 */
const groupBy = (data, key) => {
  return data.reduce((redVal, val) => {
    (redVal[val[key]] = redVal[val[key]] || []).push(val);
    return redVal;
  }, {});
};

/**
 * Display {data} through cytos canvas
 * @param {object[]} data   Array of objects
 * @returns {void}
 */
const displayCyto = (data) => {
  const cytoStyle_ = cytoscape
    .stylesheet()
    .selector("node")
    .css({ content: "data(id)" })
    .selector("edge[type='VG']")
    .css({
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
      "target-arrow-color": "gold",
      width: 1,
      "line-color": "gold",
      "target-arrow-color": "gold",
    })
    .selector("edge[type='V']")
    .css({
      "curve-style": "bezier",
      "target-arrow-shape": "triangle",
      "target-arrow-color": "blue",
      width: 1,
      "line-color": "blue",
      "target-arrow-color": "blue",
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

  window.cy = cytoscape({
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
  });
};

/**
 * Parse .csv file chosen through the input form
 * @param {object} event    The input event
 * @returns {void}
 */
const parseCsv = (event) => {
  const file = event.target.files[0];

  Papa.parse(file, {
    header: true,
    worker: true,
    complete: (res, file_) => {
      console.log("Res:", res);

      // Group data by WORKING ACTIVITY
      const groupedObj = groupBy(res.data, "WORKING ACTIVITY");
      console.log("Grouped data:", groupedObj);

      // Build Obj for cytoscape
      const cyData = [
        {
          data: {
            id: "WORKING ACTIVITY",
            type: "VOCATION",
          },
          group: "nodes",
        },
      ];

      // Create Nodes & Edges for each VEHICLE GROUP
      Object.entries(groupedObj).forEach((vehicleGroup) => {
        console.log("Current group:", vehicleGroup);

        // Exclude rows with null data in first cell
        if (vehicleGroup[0]) {
          // Node Object
          const groupNodeObj = {
            data: {
              id: vehicleGroup[0],
              type: "VOCATION",
            },
            group: "nodes",
          };
          // Edge Object (from own node to WORKING ACTIVITY node)
          const groupEdgeObj = {
            data: {
              source: "WORKING ACTIVITY",
              target: vehicleGroup[0],
              type: "VG",
              altGroupId: [],
            },
            group: "edges",
          };
          cyData.push(groupNodeObj);
          cyData.push(groupEdgeObj);

          // Create Nodes & Edges for each VEHICLE
          vehicleGroup[1].forEach((vehicleElement) => {
            console.log(vehicleElement);
            // Node Object
            const vehNodeObj = {
              data: {
                id: vehicleElement.SINCOM,
                type: "VEHICLE",
              },
              group: "nodes",
            };
            // Edge Object (from own node to parent VEHICLEGROUP node)
            const vehEdgeObj = {
              data: {
                source: vehicleGroup[0],
                target: vehicleElement.SINCOM,
                type: "V",
                altGroupId: [],
              },
              group: "edges",
            };
            cyData.push(vehNodeObj);
            cyData.push(vehEdgeObj);
          });
        }
      });

      console.log("Final CytoObj", cyData);

      displayCyto(cyData);
    },
  });
};
