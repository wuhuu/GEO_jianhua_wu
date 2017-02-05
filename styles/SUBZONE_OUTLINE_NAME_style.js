var size = 0;

var styleCache_SUBZONE_OUTLINE_NAME={}
var style_SUBZONE_OUTLINE_NAME = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })];
    if (feature.get("SUBZONE_N") !== null) {
        var labelText = String(feature.get("SUBZONE_N"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_SUBZONE_OUTLINE_NAME[key]){
        var text = new ol.style.Text({
              font: '4.225px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_SUBZONE_OUTLINE_NAME[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_SUBZONE_OUTLINE_NAME[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};