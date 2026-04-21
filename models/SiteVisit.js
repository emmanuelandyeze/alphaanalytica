import mongoose from 'mongoose';

const SiteVisitSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  referrer: {
    type: String,
  },
  userAgent: {
    type: String,
  },
  ip: {
    type: String,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

export default mongoose.models.SiteVisit || mongoose.model('SiteVisit', SiteVisitSchema);
