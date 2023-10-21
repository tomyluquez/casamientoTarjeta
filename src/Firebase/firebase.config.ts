import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDp3lfDaEmxYirHT6sADdh0PhgrNSixGaw',
  authDomain: 'invitadoscasamiento-f68bc.firebaseapp.com',
  projectId: 'invitadoscasamiento-f68bc',
  storageBucket: 'invitadoscasamiento-f68bc.appspot.com',
  messagingSenderId: '712469663810',
  appId: '1:712469663810:web:86dac04fd1168495bedddb',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
