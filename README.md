Job Interview – Front End
In the following task you’re required to build a Lotto table widget.
Your data is hosted on a json file,
json\lotto.json
the json file contains data about 3 different lotto draws like: lottery_name, next_draw_jackpot, play_link, lottery_logo etc.
Please Notice:
Each draw has different numbers range for regular numbers and for strong numbers to draw from, for example:
Mega Millions can draw 5 numbers between 1 to 75, and 1 strong numbers from a different pool between 1-15
EuroMillions, for instance, can draw 5 numbers between 1 to 50, and 2 strong numbers, again from a different pool between 1 to 11.

Your asked to create a table widget that will do as follows:
Write a javascript code that will read the data from the json file and print it to the table according to the design that is attached here:
Write a function to draw random numbers for each lottery according to the numbers range and amount and for strong numbers as well. The numbers you draw should be printed to the screen under the column “Your Lucky Numbers”. (Remember – the Numbers you draw must be unique and cannot be repeated)
Brand Logo – the logo image is under the attribute “lottery_logo” in json file, you should add the image dynamically assuring the image is clickable with the correct link which is under the attribute “play_link” in the json file.
Prize – add the jackpot for each draw dynamically from the attribute “next_draw_jackpot”
Add a “Call to Action” Button under the Visit Site column with a link to “play_link”.
Keep in mind to write code which is DRY, easy to maintain, scalable and with emphasis on object oriented methodologies and performance.

