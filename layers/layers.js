var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CommunehorsLOT_2 = new ol.format.GeoJSON();
var features_CommunehorsLOT_2 = format_CommunehorsLOT_2.readFeatures(json_CommunehorsLOT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunehorsLOT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunehorsLOT_2.addFeatures(features_CommunehorsLOT_2);
var lyr_CommunehorsLOT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommunehorsLOT_2, 
                style: style_CommunehorsLOT_2,
                interactive: true,
                title: '<img src="styles/legend/CommunehorsLOT_2.png" /> Commune hors LOT'
            });
var format_Communenonadhrente_3 = new ol.format.GeoJSON();
var features_Communenonadhrente_3 = format_Communenonadhrente_3.readFeatures(json_Communenonadhrente_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communenonadhrente_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communenonadhrente_3.addFeatures(features_Communenonadhrente_3);
var lyr_Communenonadhrente_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communenonadhrente_3, 
                style: style_Communenonadhrente_3,
                interactive: true,
                title: '<img src="styles/legend/Communenonadhrente_3.png" /> Commune non adhérente'
            });
var format_communeprventif_4 = new ol.format.GeoJSON();
var features_communeprventif_4 = format_communeprventif_4.readFeatures(json_communeprventif_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communeprventif_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communeprventif_4.addFeatures(features_communeprventif_4);
var lyr_communeprventif_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communeprventif_4, 
                style: style_communeprventif_4,
                interactive: true,
                title: '<img src="styles/legend/communeprventif_4.png" /> commune préventif'
            });
var format_communecorrectif_5 = new ol.format.GeoJSON();
var features_communecorrectif_5 = format_communecorrectif_5.readFeatures(json_communecorrectif_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_communecorrectif_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communecorrectif_5.addFeatures(features_communecorrectif_5);
var lyr_communecorrectif_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_communecorrectif_5, 
                style: style_communecorrectif_5,
                interactive: true,
                title: '<img src="styles/legend/communecorrectif_5.png" /> commune correctif'
            });
var format_Horlogerenseign_6 = new ol.format.GeoJSON();
var features_Horlogerenseign_6 = format_Horlogerenseign_6.readFeatures(json_Horlogerenseign_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horlogerenseign_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horlogerenseign_6.addFeatures(features_Horlogerenseign_6);cluster_Horlogerenseign_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Horlogerenseign_6
});
var lyr_Horlogerenseign_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Horlogerenseign_6, 
                style: style_Horlogerenseign_6,
                interactive: true,
                title: '<img src="styles/legend/Horlogerenseign_6.png" /> Horloge renseigné'
            });
var format_Horlogenonrenseign_7 = new ol.format.GeoJSON();
var features_Horlogenonrenseign_7 = format_Horlogenonrenseign_7.readFeatures(json_Horlogenonrenseign_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horlogenonrenseign_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horlogenonrenseign_7.addFeatures(features_Horlogenonrenseign_7);cluster_Horlogenonrenseign_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Horlogenonrenseign_7
});
var lyr_Horlogenonrenseign_7 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Horlogenonrenseign_7, 
                style: style_Horlogenonrenseign_7,
                interactive: true,
                title: '<img src="styles/legend/Horlogenonrenseign_7.png" /> Horloge non renseigné'
            });
var format_Horlogeinconnue_8 = new ol.format.GeoJSON();
var features_Horlogeinconnue_8 = format_Horlogeinconnue_8.readFeatures(json_Horlogeinconnue_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Horlogeinconnue_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Horlogeinconnue_8.addFeatures(features_Horlogeinconnue_8);cluster_Horlogeinconnue_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Horlogeinconnue_8
});
var lyr_Horlogeinconnue_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Horlogeinconnue_8, 
                style: style_Horlogeinconnue_8,
                interactive: true,
                title: '<img src="styles/legend/Horlogeinconnue_8.png" /> Horloge inconnue'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_CommunehorsLOT_2.setVisible(true);lyr_Communenonadhrente_3.setVisible(true);lyr_communeprventif_4.setVisible(true);lyr_communecorrectif_5.setVisible(true);lyr_Horlogerenseign_6.setVisible(true);lyr_Horlogenonrenseign_7.setVisible(true);lyr_Horlogeinconnue_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_CommunehorsLOT_2,lyr_Communenonadhrente_3,lyr_communeprventif_4,lyr_communecorrectif_5,lyr_Horlogerenseign_6,lyr_Horlogenonrenseign_7,lyr_Horlogeinconnue_8];
lyr_CommunehorsLOT_2.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', });
lyr_Communenonadhrente_3.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', });
lyr_communeprventif_4.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', });
lyr_communecorrectif_5.set('fieldAliases', {'INSEE': 'INSEE', 'Nom': 'Nom', 'Lot de Mai': 'Lot de Mai', 'Type d\'ent': 'Type d\'ent', });
lyr_Horlogerenseign_6.set('fieldAliases', {'Libell�': 'Libell�', 'Commune _': 'Commune _', 'Rue': 'Rue', 'Horloge as': 'Horloge as', 'Cellule ph': 'Cellule ph', 'Relais de': 'Relais de', 'Horloge co': 'Horloge co', 'Heure d\'_1': 'Heure d\'_1', 'Heure d\'_2': 'Heure d\'_2', });
lyr_Horlogenonrenseign_7.set('fieldAliases', {'Libell�': 'Libell�', 'Commune _': 'Commune _', 'Rue': 'Rue', 'Horloge as': 'Horloge as', 'Cellule ph': 'Cellule ph', 'Relais de': 'Relais de', 'Horloge co': 'Horloge co', 'Heure d\'_1': 'Heure d\'_1', 'Heure d\'_2': 'Heure d\'_2', });
lyr_Horlogeinconnue_8.set('fieldAliases', {'Libell�': 'Libell�', 'Commune _': 'Commune _', 'Rue': 'Rue', 'Horloge as': 'Horloge as', 'Cellule ph': 'Cellule ph', 'Relais de': 'Relais de', 'Horloge co': 'Horloge co', 'Heure d\'_1': 'Heure d\'_1', 'Heure d\'_2': 'Heure d\'_2', });
lyr_CommunehorsLOT_2.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', });
lyr_Communenonadhrente_3.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', });
lyr_communeprventif_4.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', });
lyr_communecorrectif_5.set('fieldImages', {'INSEE': 'TextEdit', 'Nom': 'TextEdit', 'Lot de Mai': 'TextEdit', 'Type d\'ent': 'TextEdit', });
lyr_Horlogerenseign_6.set('fieldImages', {'Libell�': 'TextEdit', 'Commune _': 'TextEdit', 'Rue': 'TextEdit', 'Horloge as': 'TextEdit', 'Cellule ph': 'TextEdit', 'Relais de': 'TextEdit', 'Horloge co': 'TextEdit', 'Heure d\'_1': 'TextEdit', 'Heure d\'_2': 'TextEdit', });
lyr_Horlogenonrenseign_7.set('fieldImages', {'Libell�': 'TextEdit', 'Commune _': 'TextEdit', 'Rue': 'TextEdit', 'Horloge as': 'TextEdit', 'Cellule ph': 'TextEdit', 'Relais de': 'TextEdit', 'Horloge co': 'TextEdit', 'Heure d\'_1': 'TextEdit', 'Heure d\'_2': 'TextEdit', });
lyr_Horlogeinconnue_8.set('fieldImages', {'Libell�': 'TextEdit', 'Commune _': 'TextEdit', 'Rue': 'TextEdit', 'Horloge as': 'TextEdit', 'Cellule ph': 'TextEdit', 'Relais de': 'TextEdit', 'Horloge co': 'TextEdit', 'Heure d\'_1': 'TextEdit', 'Heure d\'_2': 'TextEdit', });
lyr_CommunehorsLOT_2.set('fieldLabels', {'INSEE': 'no label', 'Nom': 'no label', 'Lot de Mai': 'no label', 'Type d\'ent': 'no label', });
lyr_Communenonadhrente_3.set('fieldLabels', {'INSEE': 'no label', 'Nom': 'no label', 'Lot de Mai': 'no label', 'Type d\'ent': 'no label', });
lyr_communeprventif_4.set('fieldLabels', {'INSEE': 'no label', 'Nom': 'no label', 'Lot de Mai': 'no label', 'Type d\'ent': 'no label', });
lyr_communecorrectif_5.set('fieldLabels', {'INSEE': 'no label', 'Nom': 'no label', 'Lot de Mai': 'no label', 'Type d\'ent': 'no label', });
lyr_Horlogerenseign_6.set('fieldLabels', {'Libell�': 'no label', 'Commune _': 'no label', 'Rue': 'no label', 'Horloge as': 'no label', 'Cellule ph': 'no label', 'Relais de': 'no label', 'Horloge co': 'no label', 'Heure d\'_1': 'no label', 'Heure d\'_2': 'no label', });
lyr_Horlogenonrenseign_7.set('fieldLabels', {'Libell�': 'no label', 'Commune _': 'no label', 'Rue': 'no label', 'Horloge as': 'no label', 'Cellule ph': 'no label', 'Relais de': 'no label', 'Horloge co': 'no label', 'Heure d\'_1': 'no label', 'Heure d\'_2': 'no label', });
lyr_Horlogeinconnue_8.set('fieldLabels', {'Libell�': 'no label', 'Commune _': 'no label', 'Rue': 'no label', 'Horloge as': 'no label', 'Cellule ph': 'no label', 'Relais de': 'no label', 'Horloge co': 'no label', 'Heure d\'_1': 'no label', 'Heure d\'_2': 'no label', });
lyr_Horlogeinconnue_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});