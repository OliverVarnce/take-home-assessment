# TakeHomeAssessment (test task)

This application has 

###  GET endpoint called activity which:
#### 1. Takes any response from Bored API /api/activity endpoint
#### 2. Maps the “accessibility” of the response to
- “High” when accessibility <= 0.25
- “Medium” when 0.25 < accessibility <= 0.75
- “Low” when accessibility > 0.75
#### 3. Maps the 'price' of the response to
- “Free” when price = 0
- “Low” when price <= 0.5
- “High” when price > 0.5


### POST endpoint called user which:
1. Takes “name”, “accessibility” (High, Medium, or Low), and “price” (Free, Low, or
High) in JSON format
2. Stores the user profile in a mock DB, feel free to use any DB of your choice.



## Installation
- Rename env.dist to .env
- install dependencies
```
npm install
```
- generate Prisma Model
``` 
npx prisma generate
```
- create SQLite db
```
npx prisma db push
```
- migrate database structure
```
npx prisma migrate dev
```
Start the application
```
 npm start
```

### Requests
```
GET /activity
```
```
POST /user
body: {
{
    'name': 'John',
    'accessibility': 'High',
    'price': 'Free'
}

Schema: {
    'name': string
    'accessibility': string
    'price': string
}
```




