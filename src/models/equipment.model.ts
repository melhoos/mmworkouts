import { Base } from './base.model';

enum EquipmentId {
  EXERCISEMAT,
  RUBBERBAND,
  MINIBAND,
  TRXSLING,
  DUMBBELL,
  KETTLEBELL,
  OTHERWEIGHT,
}

export interface Equipment extends Base {
  id: EquipmentId;
}

export const equipments: Equipment[] = [
  {
    id: EquipmentId.EXERCISEMAT,
    name_no: 'Treningsmatte',
    name_en: 'Training mat',
  },
  {
    id: EquipmentId.RUBBERBAND,
    name_no: 'Lang strikk',
    name_en: 'Rubberband',
  },
  {
    id: EquipmentId.MINIBAND,
    name_no: 'Miniband',
    name_en: 'Miniband',
  },
  {
    id: EquipmentId.TRXSLING,
    name_no: 'TRX Slynge/Slynge',
    name_en: 'TRX Sling',
  },
  {
    id: EquipmentId.DUMBBELL,
    name_no: 'Manual/Hantel',
    name_en: 'Dumbbell',
  },
  {
    id: EquipmentId.KETTLEBELL,
    name_no: 'Kettlebell',
    name_en: 'Kettlebell',
  },
  {
    id: EquipmentId.OTHERWEIGHT,
    name_no: 'Annen vekt',
    name_en: 'Other weight',
  },
];
