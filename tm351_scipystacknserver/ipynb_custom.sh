#!/bin/bash -e


#------- PROFILE: tm351MT -------

#Custom profile
/usr/local/bin/ipython profile create tm351MT

TM351INSTALLFILEPATH=/tmp/ipynb_style
TM351MYPROFILE=$(ipython locate)/profile_tm351MT

#Startup files
cp $TM351INSTALLFILEPATH/tm351_start.ipy $TM351MYPROFILE/startup/

#Extensions
cp $TM351INSTALLFILEPATH/*.js $TM351MYPROFILE/static/custom/
cp $TM351INSTALLFILEPATH/*.css $TM351MYPROFILE/static/custom/

#Branding
cp $TM351INSTALLFILEPATH/*.jpg $TM351MYPROFILE/static/custom/

#-----------
