const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

const componentRoutes = require('./routes/componentRoutes');
const templateRoutes = require('./routes/templateRoutes');
const authRoutes = require('./routes/authRoutes'); 

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
// appi
app.use('/api', componentRoutes);
app.use('/api', templateRoutes);
app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
