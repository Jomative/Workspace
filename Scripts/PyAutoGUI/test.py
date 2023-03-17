import pyautogui
from time import sleep
pyautogui.FAILSAFE = True
sleep(3)
while True:
    location = pyautogui.locateCenterOnScreen('nxpage.png')
    pyautogui.moveTo(location)

let btn = document.getElementById("ButtonTwo");
let finish = true;
while(finish){
    if(time=-1){
        btn.click();
        finish=false;
    }
}