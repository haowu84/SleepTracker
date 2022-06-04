# Sleep Tracker with Ionic

## Structure
- sleeptracker/src/app/data: folder that contains 3 classes: sleep-data, overnight-sleep-data, and stanford-sleepiness-data
- sleeptracker/src/app/services: folder that contains 1 service that provides static variables for storing the logged data 
- sleeptracker/src/app/pages: folder that contains 3 components: sleep-page, sleepiness-page, and sleep-data-page

## Setup
- Installing Ionic Command Line Interface (CLI): ```npm install -g ionic```
- Running the app: ```ionic serve```

## Summary
### Log Overnight Sleep
- Log what time the user went to bed and when the user woke up with datetime pickers

### Log Sleepiness During the Day
- log how sleepy the user feel throughout the day according to the Stanford Sleepiness Scale, on the scale of 1-7 with range sliders

### View Logged Data
- View the overnight sleep and sleepiness data together or separately with toggles

### Native Device Resource
- Use the social sharing plugin to allow the user to text their friend with sleep data

### Store Logged Data
- Back up logged data with local storage

