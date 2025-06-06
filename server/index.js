import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://utkarsh2002:utkarsh@cluster0.nuyln4g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Destination Schema
const destinationSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String
});

// Tour Package Schema
const tourPackageSchema = new mongoose.Schema({
  name: String,
  image: String
});

const Destination = mongoose.model('Destination', destinationSchema);
const TourPackage = mongoose.model('TourPackage', tourPackageSchema);




app.get('/api/destinations', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.get('/api/packages/top-selling', async (req, res) => {
  try {
    const packages = await TourPackage.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});