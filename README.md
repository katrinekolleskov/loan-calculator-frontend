# Loan calculator generator

I decided to make a web-portal with rather simple interface. I used create react app,
since this is a single-page app.
I have included more detailed commentary in the code.

## General thoughts

I have done some lazy solutions in this code that would not necessarily scale well.
Hopefully I explain it how I'd rather do it in the code without the sleep deprivation caused by
a screaming baby.

## Some design changes

I wanted a more diverse colour-profile than just two colours. I focused on simple interactions and
few elements. One thing I would have liked to change is to make the icons svg so I could easily
change the colour (grey for inactive, for example). I made them into png because it's very fast (for me).

I also did not make it responsive, but I would do this by using media query and defining break points (see sized.scss). I could have used bootstrap or similar libraries, but I prefer to do it myself. I find that I learn
it better that way and have more control.

## Some code changes

I would have divided the logic and the views more. Right now, most of the components both do calculations
and render the view. This does not scale very well, and it's also bad practice. I allowed myself the
indulgence in hope that I can explain how I'd rather do it, and because it is such a simple application
that I know won't be used later on.
