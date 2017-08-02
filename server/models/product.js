import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  pages: [{ type: Schema.Types.ObjectId, ref: 'Page', required: false }],
  modules: [{
    title: { type: 'String', required: true },
    active: { type: 'Boolean', default: false, required: true },
    uri: { type: 'String', required: true },
  }],
  testimonialURIs: [String],
});

export default mongoose.model('Product', productSchema);
