const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET || 'sk_test_replace');
const app = express();
app.use(bodyParser.json());

// Use modular routes
const routes = require('./routes');
app.use('/api', routes);

// Keep existing simple endpoints for compatibility
app.get('/', (req,res)=>res.send('BoxesWorld backend'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Backend running on port', PORT));
