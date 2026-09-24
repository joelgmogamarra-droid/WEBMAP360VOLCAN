var wms_layers = [];


        var lyr_EsriImagery_0 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Fotosgeolocalizadas_1 = new ol.format.GeoJSON();
var features_Fotosgeolocalizadas_1 = format_Fotosgeolocalizadas_1.readFeatures(json_Fotosgeolocalizadas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fotosgeolocalizadas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fotosgeolocalizadas_1.addFeatures(features_Fotosgeolocalizadas_1);
var lyr_Fotosgeolocalizadas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fotosgeolocalizadas_1, 
                style: style_Fotosgeolocalizadas_1,
                popuplayertitle: 'Fotos geolocalizadas',
                interactive: true,
                title: '<img src="styles/legend/Fotosgeolocalizadas_1.png" /> Fotos geolocalizadas'
            });

lyr_EsriImagery_0.setVisible(true);lyr_Fotosgeolocalizadas_1.setVisible(true);
var layersList = [lyr_EsriImagery_0,lyr_Fotosgeolocalizadas_1];
lyr_Fotosgeolocalizadas_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'longitude': 'longitude', 'latitude': 'latitude', 'altitude': 'altitude', 'azimuth': 'azimuth', 'date_time': 'date_time', 'path': 'path', 'constituir': 'constituir', 'modelo': 'modelo', 'url': 'url', 'HTNL 360': 'HTNL 360', });
lyr_Fotosgeolocalizadas_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'altitude': 'TextEdit', 'azimuth': 'Range', 'date_time': 'TextEdit', 'path': 'TextEdit', 'constituir': 'TextEdit', 'modelo': 'TextEdit', 'url': 'TextEdit', 'HTNL 360': 'TextEdit', });
lyr_Fotosgeolocalizadas_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'altitude': 'no label', 'azimuth': 'no label', 'date_time': 'no label', 'path': 'no label', 'constituir': 'no label', 'modelo': 'no label', 'url': 'no label', 'HTNL 360': 'no label', });
lyr_Fotosgeolocalizadas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});