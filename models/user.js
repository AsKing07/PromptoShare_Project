import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'L\'email existe déjà!'],
    required: [true, 'Email  requis!'],
  },
  username: {
    type: String,
    required: [true, 'Nom d\'utilisateur requis!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Nom d\'utilisateur invalide. Doit  contenir entre 8 et 20 caractères, et être unique !"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;
