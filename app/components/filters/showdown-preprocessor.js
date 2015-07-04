angular.module('wikiFiltering', []).filter('sd-preprocess', function() {
  return function(input) {
    var footnoteArray = {};
    var idx = 1;

    var results = input.replaceAll(/\[(\^)]\(([^\r\n#\/"\)]*)\)/, function(cite, linkName){
      var thisIdx;
      if(!footnoteArray[linkText]){
        footnoteArray[linkText] = idx;
        thisIdx = idx;
        idx += 1;
      } else {
        thisIdx = footnoteArray[linkText];
      }
      return '[<sup>' + thisIdx + '</sup>](##cite' + thisIdx + ')';
    });
    results = input.replaceAll(/<references>/, function(){
        var rtn = [];
        // TODO and here's where the obvious lazy array problem starts to bite...
        for(var i = 0; i < Object.keys(footnoteArray).length; i++){
          var linkText = Object.keys(footnoteArray)[i];
          rtn += "<a id=\"cite"+ footnoteArray[linkText] + "\">" + footnoteArray[linkText] + "</a>: [" + linkText + "][" + linkText + "] \n\n";
        }
        console.log(rtn);
        return rtn;
    });
    return results;
  };
});

