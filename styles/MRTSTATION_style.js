var size = 0;

var styleCache_MRTSTATION={}
var style_MRTSTATION = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.0327587901317,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/railway=station.svg"
            })
    })];
    if (feature.get("STN_NAME") !== null) {
        var labelText = String(feature.get("STN_NAME"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MRTSTATION[key]){
        var text = new ol.style.Text({
              font: '6.5px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_MRTSTATION[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MRTSTATION[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};