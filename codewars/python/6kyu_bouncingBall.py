'''


A child plays with a ball on the nth floor of a big building. The height of this floor is known.

(float parameter "h" in meters. Condition 1) : h > 0)

He lets out the ball. The ball bounces for example to two-thirds of its height.

(float parameter "bounce". Condition 2) : 0 < bounce < 1)

His mother looks out of a window that is 1.5 meters from the ground.

(float parameters "window". Condition 3) : window < h).

How many times will the mother see the ball either falling or bouncing in front of the window?

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.


'''


def bouncingBall(h, bounce, window):

    if h<0 or bounce <= 0 or bounce >= 1 or window >= h:
        return -1
        
    heightOfBall = h
    numberOfBounces = 0
    
    while heightOfBall > window:
        numberOfBounces += 1
        heightOfBall *= bounce
    
    return numberOfBounces*2 - 1
