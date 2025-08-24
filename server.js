// Including Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
if (process.env.NODE_ENV !== 'production') {
 require('dotenv').config();   
}
// settings
app.set('port', process.env.PORT || 4000);

// Middlewares (como en el ejemplo del profesor)
app.use(bodyParser.urlencoded({ extended: false }));  // Corregido los paréntesis
app.use(bodyParser.json());
app.use(morgan('dev'));  // Solo una vez

// Routes (adaptado para categories y events)
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes'));  // Cambiado de users a categories
app.use('/api/v1/events', require('./api/v1/routes/events.routes')); 
app.use('/api/v1/rols', require('./api/v1/routes/rols.routes')); // ← Nueva ruta para rols
app.use('/api/v1/users', require('./api/v1/routes/users.routes'));
// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server running on http://localhost:${app.get('port')}`);
});