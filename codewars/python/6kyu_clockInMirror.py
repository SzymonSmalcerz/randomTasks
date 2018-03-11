'''

Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

alt text

He knows that the time is 11:38

alt text

in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.


'''

def what_is_the_time(time_in_mirror):
    timeList = map(lambda time : int(time),time_in_mirror.split(":"))
    return getMirroredTime(timeList)
    
    
def getMirroredTime(timeList):
    if timeList[1] != 0:
        return '{}:{}'.format(formatHours(11 - timeList[0]),formatMinutes(60 - timeList[1]))
    else:
        return '{}:00'.format(formatHours(12 - timeList[0]))
        
def formatHours(num):
    if num == 0:
        return '12'
    elif 0 <= num < 10:
        return '0' + str(num)
    elif 0 > num:
        return str(12 + num)
    else:
        return str(num)
    

def formatMinutes(num):
    if num < 10:
        return '0' + str(num)
    else:
        return str(num)
    
