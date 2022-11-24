//Game MAchine
// A Machine to accept score as number input and give a remark.

//Create a function machineStatus to start and stop machine using a button.
function machineStatus() {
    if(btn.textContent === "Start Game machine"){
          btn.textContent = "Stop Game machine";
          notice.textContent = "The Game machine has started!"
            
    } else{
          btn.textContent = "Start Game machine"
          notice.textContent = "The Game machine is stopped!.";
    } 
  }
//create a function machineStopped to stop processing inputs when machine is stopped.
//create a function processRemark to give remark for each range of inputted score.