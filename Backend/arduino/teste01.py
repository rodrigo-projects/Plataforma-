import RPi.GPIO as gp
import time


gp.setwarnings(False)
gp.setmode(gp.BCM)

gp.setup(13,gp.OUT)

a=0
b=100
p=0.5

print(a)
while (a<100):
   gp.output(13,gp.HIGH)
   time.sleep(p)
   gp.output(13,gp.LOW)
   time.sleep(p)
   a=a+1
    
gp.cleanup()
print("fim")