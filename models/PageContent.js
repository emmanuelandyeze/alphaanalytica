import mongoose from 'mongoose';

const PageContentSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
}, { timestamps: true });

// Index for faster lookups
PageContentSchema.index({ page: 1, section: 1 }, { unique: true });

export default mongoose.models.PageContent || mongoose.model('PageContent', PageContentSchema);
