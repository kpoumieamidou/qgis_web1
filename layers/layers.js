var wms_layers = [];

var format_Cours_deau_principauxhydrographie_principale_0 = new ol.format.GeoJSON();
var features_Cours_deau_principauxhydrographie_principale_0 = format_Cours_deau_principauxhydrographie_principale_0.readFeatures(json_Cours_deau_principauxhydrographie_principale_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cours_deau_principauxhydrographie_principale_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cours_deau_principauxhydrographie_principale_0.addFeatures(features_Cours_deau_principauxhydrographie_principale_0);
var lyr_Cours_deau_principauxhydrographie_principale_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cours_deau_principauxhydrographie_principale_0, 
                style: style_Cours_deau_principauxhydrographie_principale_0,
                interactive: true,
                title: '<img src="styles/legend/Cours_deau_principauxhydrographie_principale_0.png" /> Cours_deau_principaux — hydrographie_principale'
            });
var format_Puits_Localisation_1 = new ol.format.GeoJSON();
var features_Puits_Localisation_1 = format_Puits_Localisation_1.readFeatures(json_Puits_Localisation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puits_Localisation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puits_Localisation_1.addFeatures(features_Puits_Localisation_1);
var lyr_Puits_Localisation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puits_Localisation_1, 
                style: style_Puits_Localisation_1,
                interactive: true,
                title: '<img src="styles/legend/Puits_Localisation_1.png" /> Puits_Localisation'
            });
var format_Permeabilite_Localisation_2 = new ol.format.GeoJSON();
var features_Permeabilite_Localisation_2 = format_Permeabilite_Localisation_2.readFeatures(json_Permeabilite_Localisation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Permeabilite_Localisation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Permeabilite_Localisation_2.addFeatures(features_Permeabilite_Localisation_2);
var lyr_Permeabilite_Localisation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Permeabilite_Localisation_2, 
                style: style_Permeabilite_Localisation_2,
                interactive: true,
                title: '<img src="styles/legend/Permeabilite_Localisation_2.png" /> Permeabilite_Localisation'
            });
var format_Bv_Maroua2_3 = new ol.format.GeoJSON();
var features_Bv_Maroua2_3 = format_Bv_Maroua2_3.readFeatures(json_Bv_Maroua2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bv_Maroua2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bv_Maroua2_3.addFeatures(features_Bv_Maroua2_3);
var lyr_Bv_Maroua2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bv_Maroua2_3, 
                style: style_Bv_Maroua2_3,
                interactive: true,
                title: '<img src="styles/legend/Bv_Maroua2_3.png" /> Bv_Maroua2'
            });
var format_DONNEESFORAGESSEKAADEEEFINALLLL_4 = new ol.format.GeoJSON();
var features_DONNEESFORAGESSEKAADEEEFINALLLL_4 = format_DONNEESFORAGESSEKAADEEEFINALLLL_4.readFeatures(json_DONNEESFORAGESSEKAADEEEFINALLLL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DONNEESFORAGESSEKAADEEEFINALLLL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DONNEESFORAGESSEKAADEEEFINALLLL_4.addFeatures(features_DONNEESFORAGESSEKAADEEEFINALLLL_4);
var lyr_DONNEESFORAGESSEKAADEEEFINALLLL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DONNEESFORAGESSEKAADEEEFINALLLL_4, 
                style: style_DONNEESFORAGESSEKAADEEEFINALLLL_4,
                interactive: true,
                title: '<img src="styles/legend/DONNEESFORAGESSEKAADEEEFINALLLL_4.png" /> DONNEES FORAGES SEKAADEEE FINALLLL'
            });
var format_sourcessuivi_5 = new ol.format.GeoJSON();
var features_sourcessuivi_5 = format_sourcessuivi_5.readFeatures(json_sourcessuivi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sourcessuivi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sourcessuivi_5.addFeatures(features_sourcessuivi_5);
var lyr_sourcessuivi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sourcessuivi_5, 
                style: style_sourcessuivi_5,
                interactive: true,
                title: '<img src="styles/legend/sourcessuivi_5.png" /> sources suivi'
            });

lyr_Cours_deau_principauxhydrographie_principale_0.setVisible(true);lyr_Puits_Localisation_1.setVisible(true);lyr_Permeabilite_Localisation_2.setVisible(true);lyr_Bv_Maroua2_3.setVisible(true);lyr_DONNEESFORAGESSEKAADEEEFINALLLL_4.setVisible(true);lyr_sourcessuivi_5.setVisible(true);
var layersList = [lyr_Cours_deau_principauxhydrographie_principale_0,lyr_Puits_Localisation_1,lyr_Permeabilite_Localisation_2,lyr_Bv_Maroua2_3,lyr_DONNEESFORAGESSEKAADEEEFINALLLL_4,lyr_sourcessuivi_5];
lyr_Cours_deau_principauxhydrographie_principale_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Id_TH': 'Id_TH', 'Type_TH': 'Type_TH', 'Nom_CE': 'Nom_CE', 'Etat_CE': 'Etat_CE', 'Type_CET': 'Type_CET', 'Fr_TH': 'Fr_TH', 'Pos_TH': 'Pos_TH', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Puits_Localisation_1.set('fieldAliases', {'Puits': 'Puits', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Quartier': 'Quartier', });
lyr_Permeabilite_Localisation_2.set('fieldAliases', {'Site': 'Site', 'X': 'X', 'Y': 'Y', 'Z': 'Z', 'Type d’horizon de sol': 'Type d’horizon de sol', 'Type de sols': 'Type de sols', });
lyr_Bv_Maroua2_3.set('fieldAliases', {'Id': 'Id', });
lyr_DONNEESFORAGESSEKAADEEEFINALLLL_4.set('fieldAliases', {'NOMS': 'NOMS', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', });
lyr_sourcessuivi_5.set('fieldAliases', {'OUVRAGES': 'OUVRAGES', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'ALTITUDE': 'ALTITUDE', 'QUARTIER': 'QUARTIER', });
lyr_Cours_deau_principauxhydrographie_principale_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id_TH': 'TextEdit', 'Type_TH': 'TextEdit', 'Nom_CE': 'TextEdit', 'Etat_CE': 'TextEdit', 'Type_CET': 'TextEdit', 'Fr_TH': 'TextEdit', 'Pos_TH': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_Puits_Localisation_1.set('fieldImages', {'Puits': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'Range', 'Quartier': 'TextEdit', });
lyr_Permeabilite_Localisation_2.set('fieldImages', {'Site': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'Range', 'Type d’horizon de sol': 'TextEdit', 'Type de sols': 'TextEdit', });
lyr_Bv_Maroua2_3.set('fieldImages', {'Id': 'Range', });
lyr_DONNEESFORAGESSEKAADEEEFINALLLL_4.set('fieldImages', {'NOMS': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', });
lyr_sourcessuivi_5.set('fieldImages', {'OUVRAGES': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LATITUDE': 'TextEdit', 'ALTITUDE': 'TextEdit', 'QUARTIER': 'TextEdit', });
lyr_Cours_deau_principauxhydrographie_principale_0.set('fieldLabels', {'fid': 'inline label', 'OBJECTID': 'inline label', 'Id_TH': 'inline label', 'Type_TH': 'inline label', 'Nom_CE': 'inline label', 'Etat_CE': 'inline label', 'Type_CET': 'inline label', 'Fr_TH': 'inline label', 'Pos_TH': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_Puits_Localisation_1.set('fieldLabels', {'Puits': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Z': 'inline label', 'Quartier': 'inline label', });
lyr_Permeabilite_Localisation_2.set('fieldLabels', {'Site': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Z': 'inline label', 'Type d’horizon de sol': 'inline label', 'Type de sols': 'inline label', });
lyr_Bv_Maroua2_3.set('fieldLabels', {'Id': 'inline label', });
lyr_DONNEESFORAGESSEKAADEEEFINALLLL_4.set('fieldLabels', {'NOMS': 'inline label', 'LONGITUDE': 'inline label', 'LATITUDE': 'inline label', });
lyr_sourcessuivi_5.set('fieldLabels', {'OUVRAGES': 'inline label', 'LONGITUDE': 'inline label', 'LATITUDE': 'inline label', 'ALTITUDE': 'inline label', 'QUARTIER': 'inline label', });
lyr_sourcessuivi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});