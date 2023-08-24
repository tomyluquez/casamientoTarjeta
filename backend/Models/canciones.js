import mongoose from 'mongoose';

const cancionesSchema = new mongoose.Schema({
  cancion: {
    type: String,
    required: true,
  },
});

const Canciones = mongoose.model('cancione', cancionesSchema);

export default Canciones;
