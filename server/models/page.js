import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  cuid: { type: 'String', required: true },
  title: { type: 'String', required: true },
  type: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  active: { type: 'Boolean', default: true, required: true },
  template: {
    name: { type: 'String', required: false },
    slug: { type: 'String', required: false },
    type: { type: 'String', required: false },
  },
  content: {
    preheader: { type: 'String', required: false },
    header: { type: 'String', required: false },
    postheader: { type: 'String', required: false },
    benifits: [String],
  },
  videoURI: { type: 'String', required: false },
  pixels: {
    marketHero: {
      optinHTML: { type: 'String', required: false },
      pixelHTML: { type: 'String', required: false },
    },
  },
  paypal: {
    paymentType: { type: 'String', required: false },
    uri: { type: 'String', required: false },
  },
});

export default mongoose.model('Page', pageSchema);
