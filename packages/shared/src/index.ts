export type Interest =
  | 'COFFEE'
  | 'CINEMA'
  | 'MUSIC'
  | 'SPORT'
  | 'TRAVEL'
  | 'FOOD'
  | 'ART'
  | 'OUTDOORS';

export interface PublicProfile {
  id: string;
  displayName: string;
  age: number;
  city: string;
  bio: string | null;
  interests: Interest[];
  photoUrl: string | null;
}
