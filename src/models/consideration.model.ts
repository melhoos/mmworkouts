import { Base } from './base.model';

enum ConsiderationId {
  PREGNANCY,
  POSTPREGNANCY,
  SENIOR,
}

export interface Consideration extends Base {
  id: ConsiderationId;
}

export const considerations: Consideration[] = [
  {
    id: ConsiderationId.PREGNANCY,
    name_no: 'Gravid',
    name_en: 'Pregnant',
  },
  {
    id: ConsiderationId.POSTPREGNANCY,
    name_no: 'Post gravid',
    name_en: 'Post pregnant',
  },
  {
    id: ConsiderationId.SENIOR,
    name_no: 'Senior',
    name_en: 'Senior',
  },
];
