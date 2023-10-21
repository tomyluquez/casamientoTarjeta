import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseApp } from '../Firebase/firebase.config';
import { Cancion, Invitado } from '../Types/types';

export const setInvitado = (invitado: Invitado): Promise<any> => {
  const firestore = getFirestore(firebaseApp);
  const collectionRef = collection(firestore, 'invitados');
  return addDoc(collectionRef, invitado);
};

export const setCancion = (cancion: Cancion): Promise<any> => {
  const firestore = getFirestore(firebaseApp);
  const collectionRef = collection(firestore, 'canciones');
  return addDoc(collectionRef, cancion);
};
