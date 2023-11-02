    
 
    function messageContainer(){
        const welcomeMessageDiv = document.createElement('div');
        welcomeMessageDiv.textContent = "Hello There, Welcome to Timmy's Restaurant. Where food is our love language and your taste buds are about to fall head over heels! 🍔🍕🍣 Enjoy the ride! "
        return welcomeMessageDiv;
    }

    function secheduleContainer(){
        const timeBoard = document.createElement('div');
        timeBoard.textContent = "Hours";

        
        timeBoard.appendChild(scheduleBoard("Monday", "1pm-2am"));
        timeBoard.appendChild(scheduleBoard("Tuesday", "1pm-2am"));
        timeBoard.appendChild(scheduleBoard("Wednesday", "1pm-2am"));
        timeBoard.appendChild(scheduleBoard("Thursday", "1pm-2am"));
        timeBoard.appendChild(scheduleBoard("Friday", "1pm-2am"));
        timeBoard.appendChild(scheduleBoard("Saturday", "1pm-2am"));
        timeBoard.appendChild(scheduleBoard("Sunday", "1pm-2am"));
        
        return timeBoard;
    }

    function scheduleBoard(day, time){
        const scheduleDiv = document.createElement('div')
        
        const dayDiv = document.createElement('div');
        const timeDiv = document.createElement('div');
        dayDiv.textContent = day;
        timeDiv.textContent = time;

        scheduleDiv.appendChild(dayDiv);
        scheduleDiv.appendChild(timeDiv);

        return scheduleDiv;

    };
   
 
    

function homepageComponent(){
    const homepageContainer = document.createElement('div');
   
    homepageContainer.append(messageContainer());
    homepageContainer.appendChild(secheduleContainer());

    return homepageContainer;
}

export {homepageComponent};