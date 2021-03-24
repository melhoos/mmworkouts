import { db } from '../firebase.config';
import { Equipment } from '../models/equipment.model';

/*export async function getAllEquipments(): Promise<Equipment[]> {
  return await db
    .collection('Equipment')
    .get()
    .then((querySnapshot) => {
      const equipments: Equipment[] = [];
      querySnapshot.forEach((doc) => {
        equipments.push({
          id: doc.id,
          name_no: doc.data().name_no,
        });
      });
      //const data = querySnapshot.docs.map((doc) => doc.data());
      return equipments;
    })
    .catch((error) => {
      throw error;
    });
}*/
