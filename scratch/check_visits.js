import mongoose from 'mongoose';
import SiteVisit from './models/SiteVisit.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function checkVisits() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const count = await SiteVisit.countDocuments();
    const latest = await SiteVisit.find().sort({ timestamp: -1 }).limit(5);
    console.log('Total visits:', count);
    console.log('Latest visits:', JSON.stringify(latest, null, 2));
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

checkVisits();
