import Canciones from '../Models/canciones.js';
import Invitados from '../Models/invitados.js';

export const createInvitado = (req, res) => {
  const { nombre, restriccion } = req.body;
  const invitado = new Invitados({
    nombre,
    restricciones: restriccion,
  });
  invitado
    .save()
    .then((invitado) => {
      res.status(200).json({ invitado });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

export const getInvitados = (req, res) => {
  Invitados.find()
    .then((invitados) => {
      res.status(200).json({ invitados });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

export const getCanciones = (req, res) => {
  Canciones.find()
    .then((canciones) => {
      res.status(200).json({ canciones });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

export const createCancion = async (req, res) => {
  const { cancion } = req.body;
  const newCancion = new Canciones({
    cancion,
  });
  newCancion
    .save()
    .then((newCancion) => {
      res.status(200).json({ newCancion });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};
