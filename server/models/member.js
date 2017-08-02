import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  cuid: { type: 'String', required: true },
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  name: {
    given: { type: 'String', required: true },
    family: { type: 'String', required: true },
  },
  admin: {
    isAdmin: { type: 'Boolean', default: false, required: true },
    scopes: [String],
  },
  facebook: {
    userId: { type: 'String', required: false },
    accessToken: { type: 'String', required: false },
    isSynced: { type: 'Boolean', default: false, required: true },
  },
  products: {
    active: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    trial: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    alpha: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  },
});

export default mongoose.model('Member', memberSchema);
