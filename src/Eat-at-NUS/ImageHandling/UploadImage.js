// Importing the required stuff
import { storage } from '../../../firebase/Eat-at-NUS_config';
import { ref, uploadBytes, uploadString } from 'firebase/storage';

const uploadImage = (stallID, dishID, dataURI) => {
  const dishImageReference = ref(storage, 'dishes/' + stallID + '/' + dishID);
  // uploadString(dishImageReference, dataURI, 'data_url');
  const imgBlob = new Blob([dataURI]);
  uploadBytes(dishImageReference, imgBlob);
};

export default uploadImage;
