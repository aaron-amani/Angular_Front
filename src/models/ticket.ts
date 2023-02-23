export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: Major;
  archived?: boolean;
}


export enum Major {
  rien = '',
  L = 'L',
  ES = 'ES',
  S_SI = 'S-SI',
  S_SVT = 'S-SVT'
}