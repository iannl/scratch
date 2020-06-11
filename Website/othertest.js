
<!DOCTYPE html> 
<html> 
      
<head> 
    <title> 
        How to detect Safari, Chrome, IE, Firefox 
        and Opera browser using JavaScript? 
    </title> 
</head> 
  
<body> 
    <h1 style="color: green">GeeksforGeeks</h1> 
      
    <b> 
        How to detect Safari, Chrome, IE, Firefox 
        and Opera browser using JavaScript? 
    </b> 
      
    <p> 
        Click on the button to detect 
        the current browser 
    </p> 
      
    <p> 
        Is Safari?  
        <span class="output-safari"></span> 
    </p> 
      
    <p> 
        Is Chrome?  
        <span class="output-chrome"></span> 
    </p> 
      
    <p> 
        Is Internet Explorer?  
        <span class="output-ie"></span> 
    </p> 
      
    <p> 
        Is Firefox?  
        <span class="output-firefox"></span> 
    </p> 
      
    <p> 
        Is Opera browser?  
        <span class="output-opera"></span> 
    </p> 
      
    <button onclick="checkBrowser()"> 
        Detect browser 
    </button> 
      
    <script> 
        function checkBrowser() { 
          
            // Get the user-agent string 
            let userAgentString =  
                navigator.userAgent; 
          
            // Detect Chrome 
            let chromeAgent =  
                userAgentString.indexOf("Chrome") > -1; 
          
            // Detect Internet Explorer 
            let IExplorerAgent =  
                userAgentString.indexOf("MSIE") > -1 ||  
                userAgentString.indexOf("rv:") > -1; 
          
            // Detect Firefox 
            let firefoxAgent =  
                userAgentString.indexOf("Firefox") > -1; 
          
            // Detect Safari 
            let safariAgent =  
                userAgentString.indexOf("Safari") > -1; 
                  
            // Discard Safari since it also matches Chrome 
            if ((chromeAgent) && (safariAgent))  
                safariAgent = false; 
          
            // Detect Opera 
            let operaAgent =  
                userAgentString.indexOf("OP") > -1; 
                  
            // Discard Chrome since it also matches Opera      
            if ((chromeAgent) && (operaAgent))  
                chromeAgent = false; 
          
            document.querySelector(".output-safari").textContent 
                        = safariAgent; 
            document.querySelector(".output-chrome").textContent 
                        = chromeAgent; 
            document.querySelector(".output-ie").textContent 
                        = IExplorerAgent; 
            document.querySelector(".output-opera").textContent 
                        = operaAgent; 
            document.querySelector(".output-firefox").textContent 
                        = firefoxAgent; 
        } 
    </script> 
</body> 
  
</html> 
