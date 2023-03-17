import pyautogui
from time import sleep
pyautogui.FAILSAFE = True
sleep(3)

location = pyautogui.locateCenterOnScreen('nxpage.png')
while(True):
    pyautogui.position()
    pyautogui.PAUSE = 2.5
location= None 
while location is None:
    location=pyautogui.locateCenterOnScreen('nxpage.png',grayscale=False)
    if(location!=None):
        pyautogui.moveTo(location)
        pyautogui.click()
# notFound = True
# while notFound:
#     pyautogui.scroll(-5000)
#     location=pyautogui.locateCenterOnScreen('nxpage.png')
#     if(location!=None): 
#         notFound = False
#         pyautogui.moveTo(location)
#         pyautogui.click()

# while True:
#     pyautogui.scroll(-5000)
    
#     pyautogui.moveTo(pyautogui.locateCenterOnScreen('nxpage2.png', grayscale=False))
#     pyautogui.click()
while True:
    location=pyautogui.locateCenterOnScreen('nxpage.png')
    pyautogui.moveTo(location)