var deadtime = Date.now();
setTimeout(function () {
    
    console.log("dead");
    console.log(Date.now() - deadtime)
    var rejointime = Date.now();
        
    setTimeout(function () {
        
        console.log("rejoin");
        console.log(Date.now() - rejointime);
        }, 5000);
    }, 3000);