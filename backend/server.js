import express from 'express'

const app = express();


app.get('/', (req, res) => {
  res.send('server is ready')
});

// get a list of 5 jokes
app.get('/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'Why did the tomato turn red?',
            content: 'Because it saw the salad dressing.'
        },
        {
            id: 2,
            title: 'Why did the cookie go to the doctor?',
            content: 'Because it had chicken in it.'
        },
        {
            id: 3,
            title: 'Why did the scarecrow win an award?',
            content: 'Because he was outstanding in his field.'
        },
        {
            id: 4,
            title: 'Why did the chicken cross the road?',
            content: 'To get to the other side.'
        },
        {
            id: 5,
            title: 'Why did the man put his money in the bank?',
            content: 'To buy a car.'
        }
    ]

    res.send(jokes)
})


const port = process.env.PORT || 3000;

app.listen(port, () => {    
  console.log('Server is running on port 3000')
});

