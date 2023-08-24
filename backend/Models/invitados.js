import mongoose from 'mongoose';

const invitadosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  restricciones: {
    type: String,
    required: true,
  },
});

const Invitados = mongoose.model('invitacione', invitadosSchema);

export default Invitados;
