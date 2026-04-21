import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env.local') });

const SiteVisitSchema = new mongoose.Schema({
  path: String,
  referrer: String,
  userAgent: String,
  ip: String,
  timestamp: Date,
}, { timestamps: true });

const SiteVisit = mongoose.models.SiteVisit || mongoose.model('SiteVisit', SiteVisitSchema);

async function clearAnalytics() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in .env.local');
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB.');

    const count = await SiteVisit.countDocuments();
    console.log(`Found ${count} analytics records.`);

    const result = await SiteVisit.deleteMany({});
    console.log(`Deleted ${result.deletedCount} records.`);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
    process.exit(0);
  } catch (error) {
    console.error('Error clearing analytics:', error);
    process.exit(1);
  }
}

clearAnalytics();
