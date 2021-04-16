const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';

let numClosedDoors = 3;
let openDoor1 = '';
let openDoor2 = '';
let openDoor3 = '';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
const startButton = document.getElementById('start');
let currentlyPlaying = true;

isBot = (door) => {

    if (door.src === botDoorPath)
        return true;
    else
        return false;
}
isClicked = (door) => {
    if (door.src === closedDoorPath)
        return false;
    else
        return true;
}
playDoor = (door) => {
    numClosedDoors--;
    console.log(numClosedDoors);
    if (numClosedDoors === 0)
        gameOver('win');
    else if (isBot(door))
        gameOver();
}
randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 2) {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }

};


door1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};
door2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};
door3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};
startRound = () => {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};
startButton.onclick = () => {
    if (!currentlyPlaying)
        startRound();
};

gameOver = (status) => {
    if (status === 'win')
        startButton.innerHTML = 'You win! Play again?';
    else
        startButton.innerHTML = 'Game over! Play again?';
    currentlyPlaying = false;
};

startRound();