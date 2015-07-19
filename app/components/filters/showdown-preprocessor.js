angular.module('wikiFiltering', []).filter('preprocess', function($anchorScroll) {
  return function(input) {
    if(input && input.replace) {
      var footnoteArray = {};
      var idx = 1;

      input = input.replace(/\[(\^)]\(([^\r\n#\/"\)]*)\)/g, function (match, cite, linkName) {
        var thisIdx;
        if (!footnoteArray[linkName]) {
          footnoteArray[linkName] = idx;
          thisIdx = idx;
          idx += 1;
        } else {
          thisIdx = footnoteArray[linkName];
        }
        return '[<sup>' + thisIdx + '</sup>](##cite' + thisIdx + ')';
      });
      input = input.replace(/<references>/, function () {
        var rtn = [];
        // TODO and here's where the obvious lazy array problem starts to bite...
        for (var i = 0; i < Object.keys(footnoteArray).length; i++) {
          var linkText = Object.keys(footnoteArray)[i];
          rtn += "<a id=\"cite" + footnoteArray[linkText] + "\">" + footnoteArray[linkText] + "</a>: [" + linkText + "][" + linkText + "] \n\n";
        }
        return rtn;
      });
    }
    return input;
  };
});

