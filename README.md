# workshop-task-8
the URL for this workshop is: https://ellap4n.github.io/workshop-task-8/

## Idea
For workshop task 8, I generated a simple holiday calendar (holiday season yay!!) with data from an API source. 

## API
I found an open API which generated public holidays of countries around the world: https://date.nager.at/
the api URL generated is as follows: ![image](https://github.com/user-attachments/assets/9e9331d3-4264-466b-84f5-9212c01e750b)

My first problem was that the interface looked a bit different from the one in the workshop, so I had trouble accessing the proper sections. There were no unique headers in this file, but through some trial and error I figured out how to access the lines I wanted. 
![Screenshot 2025-01-28 172749](https://github.com/user-attachments/assets/51961399-935c-4cb1-aa13-f6dc9d99cf67)

I noticed the data was layers of array, so I figured if I accessed j_data as an array it would work. 

```
let data = await fetch(hol_api);
  j_data = await data.json();
holiday = j_data[1].name;
```

this printed lines as expected. 

## Month Selection
I created a simple selection box with all the months of the year, and the idea was to display the holiday name and date that occur in the selected month. 
![Screenshot 2025-01-28 152634](https://github.com/user-attachments/assets/7541a48d-4a97-4b08-9589-61e9956c6c44)

to do this, I counted how many holidays werer in the data file and created an array that would store these holidays in seperate entries. A next step could be a function that would scan the string and subsequently figure out which month it was based on that. 

### Multiple months 
However a problem arose when I tried to just copy this code into the following months - I figured out this as because making a new selection did not clear the previous and the array stored the consequent entries after the old ones. I needed to erase the aray each time a new month was selected. 
![Screenshot 2025-01-28 154228](https://github.com/user-attachments/assets/93095f27-a7ac-460f-aea7-81ff771307
![Screenshot 2025-01-28 154236](https://github.com/user-attachments/assets/b3bbeea4-a321-4d8d-9eda-9387ac0faad4)
these were the codes I ended up with that worked. 

Filling in the rest of the months was pretty straight forward - I adjusted some blocks with 0 or 1 entry so they were simpler and more efficient for the computer to process. 
![Screenshot 2025-01-28 155547](https://github.com/user-attachments/assets/17545597-797e-43e1-beba-089bf0e16100)

# Finishing and Next Steps
I toggled the fonts and colours to make them a bit more playful, next steps would be to code a calendar grid visual or have complicated visuals. Maybe a input to add your own holiday too. 
