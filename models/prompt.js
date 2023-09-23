import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Le Prompt est requis.'],
  },
  tag: {
    type: String,
    required: [true, 'Le Tag est requis.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;