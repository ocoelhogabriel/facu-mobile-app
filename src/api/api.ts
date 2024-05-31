import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/config';
import { IHistoricalPoint } from '@/interface/IHitoricalPoint';
import { IOutdoorActivity } from '@/interface/IOutdoorActivity';
import { IRecommendedRestaurant } from '@/interface/IRecommendedRestaurant';

export const getHistoricalPoints = async (): Promise<IHistoricalPoint[]> => {
  const querySnapshot = await getDocs(collection(db, 'historicalPoints'));
  return querySnapshot.docs.map(doc => doc.data() as IHistoricalPoint);
};

export const getRecommendedRestaurants = async (): Promise<IRecommendedRestaurant[]> => {
  const querySnapshot = await getDocs(collection(db, 'recommendedRestaurants'));
  return querySnapshot.docs.map(doc => doc.data() as IRecommendedRestaurant);
};

export const getOutdoorActivities = async (): Promise<IOutdoorActivity[]> => {
  const querySnapshot = await getDocs(collection(db, 'outdoorActivities'));
  return querySnapshot.docs.map(doc => doc.data() as IOutdoorActivity);
};
