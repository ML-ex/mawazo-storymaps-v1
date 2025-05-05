// Map 1 (Classes Affected by Covid)
var map1 = L.map('map').setView([9.145, 40.4897], 3); // Adjust to your desired center and zoom level
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
}).addTo(map1);

// Load GeoJSON for Classes Affected by Covid
fetch('Classes_affected_by_Covid.geojson') // Make sure the path is correct
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          fillColor: getColorMap1(feature.properties.Classes_Affected),
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        };
      },
      onEachFeature: function (feature, layer) {
        layer.bindTooltip(`
          <strong>Region:</strong> ${feature.properties.Region}<br>
          <strong>% Classes Affected by Covid-19:</strong> ${feature.properties['Yes (2)']}
        `, { sticky: true });

        layer.on('click', function () {
          layer.bindPopup(`
            <strong>Region:</strong> ${feature.properties.Region}<br>
            <strong>% Classes Affected by Covid-19:</strong> ${feature.properties['Yes (2)']}
          `).openPopup();
        });
      }
    }).addTo(map1);
  })
  .catch(err => console.log('Error loading GeoJSON: ' + err));

// Color function for Classes Affected by Covid
function getColorMap1(d) {
  return d > 0.933300 ? '#08306b' :
         d > 0.909100 ? '#08519c' :
         d > 0.896000 ? '#2171b5' :
         d > 0.891900 ? '#4292c6' :
         d > 0.833300 ? '#6baed6' :
                        '#c6dbef';
}


// Map 2 (Institutions Offering E-Learning)
var map2 = L.map('map2').setView([9.145, 40.4897], 3); // Adjust to your desired center and zoom level
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
}).addTo(map2);


// Load GeoJSON for Institutions Offering Elearning
fetch('Institutions_Offering_Elearning.geojson') // Make sure the path is correct
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          fillColor: getColorMap2(feature.properties.Elearning_Institutions),
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        };
      },
      onEachFeature: function (feature, layer) {
        layer.bindTooltip(`
          <strong>Region:</strong> ${feature.properties.Region}<br>
          <strong>% Institutions Offering Elearning:</strong> ${feature.properties['Yes (%)']}
        `, { sticky: true });

        layer.on('click', function () {
          layer.bindPopup(`
            <strong>Region:</strong> ${feature.properties.Region}<br>
            <strong>% Institutions Offering Elearning:</strong> ${feature.properties['Yes (%)']}
          `).openPopup();
        });
      }
    }).addTo(map2);
  })
  .catch(err => console.log('Error loading GeoJSON: ' + err));

// Color function for Institutions Offering E-Learning
function getColorMap2(d) {
  return d > 0.934801 ? '#08306b' :
         d > 0.869901 ? '#08519c' :
         d > 0.8000010 ? '#2171b5' :
         d > 0.578901 ? '#4292c6' :
         d > 0.578900 ? '#6baed6' :
                        '#c6dbef';
}



// Map 3 (Individuals Currently Conducting Research)
var map3 = L.map('map3').setView([9.145, 40.4897], 3); // Adjust to your desired center and zoom level
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
}).addTo(map3);

// Load GeoJSON for Individuals Currently Conducting Research
fetch('Individuals_Currently_Conducting_Research.geojson') // Make sure the path is correct
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          fillColor: getColorMap3(feature.properties.Individuals_conducting_rsch),
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        };
      },
      onEachFeature: function (feature, layer) {
        layer.bindTooltip(`
          <strong>Region:</strong> ${feature.properties.Region}<br>
          <strong>%Individuals Currently Conducting Research:</strong> ${feature.properties['Yes']}
        `, { sticky: true });

        layer.on('click', function () {
          layer.bindPopup(`
            <strong>Region:</strong> ${feature.properties.Region}<br>
            <strong>%Individuals_Currently_Conducting_Research:</strong> ${feature.properties['Yes']}
          `).openPopup();
        });
      }
    }).addTo(map3);
  })
  .catch(err => console.log('Error loading GeoJSON: ' + err));

// Color function for Individuals Currently Conducting Research
function getColorMap3(d) {
  return d > 0.938801 ? '#08306b' :
         d > 0.923101 ? '#08519c' :
         d > 0.866701 ? '#2171b5' :
         d > 0.835801 ? '#4292c6' :
         d > 0.835800 ? '#6baed6' :
                        '#c6dbef';
}



// Map 4 (Ability to Continue WFH)
var map4 = L.map('map4').setView([9.145, 40.4897], 3); // Adjust to your desired center and zoom level
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
}).addTo(map4);



// Load GeoJSON for Individuals Ability to WFH
fetch('Ability_to_WFH.geojson') // Make sure the path is correct
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          fillColor: getColorMap4(feature.properties.Research_from_Home),
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        };
      },
      onEachFeature: function (feature, layer) {
        layer.bindTooltip(`
          <strong>Region:</strong> ${feature.properties.Region}<br>
          <strong>%Ability to Continue Working from Home:</strong> ${feature.properties['Yes']}
        `, { sticky: true });

        layer.on('click', function () {
          layer.bindPopup(`
            <strong>Region:</strong> ${feature.properties.Region}<br>
            <strong>%Ability to Continue Working from Home:</strong> ${feature.properties['Yes']}
          `).openPopup();
        });
      }
    }).addTo(map4);
  })
  .catch(err => console.log('Error loading GeoJSON: ' + err));

// Color function for Ability to Continue Working from Home
function getColorMap4(d) {
  return d > 0.857101 ? '#08306b' :
         d > 0.836701 ? '#08519c' :
         d > 0.763201 ? '#2171b5' :
         d > 0.533301 ? '#4292c6' :
         d > 0.533300 ? '#6baed6' :
                        '#c6dbef';
}



// Map 5 (Suspension of Lab Activities)
var map5 = L.map('map5').setView([9.145, 40.4897], 3); // Adjust to your desired center and zoom level
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
}).addTo(map5);




// Load GeoJSON for Suspension of Lab Activities
fetch('Have_you_had_to_suspend_lab_activities.geojson') // Make sure the path is correct
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: function (feature) {
        return {
          fillColor: getColorMap5(feature.properties.Suspended_lab_activities),
          weight: 1,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        };
      },
      onEachFeature: function (feature, layer) {
        layer.bindTooltip(`
          <strong>Region:</strong> ${feature.properties.Region}<br>
          <strong>%Suspension of Lab Activities:</strong> ${feature.properties['Yes']}
        `, { sticky: true });

        layer.on('click', function () {
          layer.bindPopup(`
            <strong>Region:</strong> ${feature.properties.Region}<br>
            <strong>%Suspension of Lab Activities:</strong> ${feature.properties['Yes']}
          `).openPopup();
        });
      }
    }).addTo(map5);
  })
  .catch(err => console.log('Error loading GeoJSON: ' + err));

// Color function for Suspension of Lab Activities
function getColorMap5(d) {
  return d > 0.729201 ? '#08306b' :
         d > 0.725201 ? '#08519c' :
         d > 0.692301 ? '#2171b5' :
         d > 0.285701 ? '#4292c6' :
         d > 0.285700 ? '#6baed6' :
                        '#c6dbef';
}

