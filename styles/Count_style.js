var size = 0;
var ranges_Count = [[0.000000, 2.600000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })]],
[2.600000, 5.200000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })]],
[5.200000, 7.800000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })]],
[7.800000, 10.400000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })]],
[10.400000, 13.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })]]];
var styleCache_Count={}
var style_Count = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NUMPOINTS");
    var style = ranges_Count[0][2];
    for (i = 0; i < ranges_Count.length; i++){
        var range = ranges_Count[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if (feature.get("NUMPOINTS") !== null) {
        var labelText = String(feature.get("NUMPOINTS"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Count[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_Count[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Count[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};