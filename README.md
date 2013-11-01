# When.js
### As in 'When you need a when function for javascript, use when.js'

### A simple library for 'when' loops

## Usage
    var when = require("whenjs")
    
    // Later
    
    when(function(){
        return true == true; // The Condition.
    }, function(){
        alert("True == True!"); // When The Condition Is True
    })
    
## It Will Work In The Browser Too!
Simply download `when.js`, then include `<script src="when.js" type="text/javascript"></script>"`