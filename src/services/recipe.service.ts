import { db } from '../firebase.config';
import { collection, getDocs, query, doc, updateDoc } from 'firebase/firestore';
import { Recipe } from '../types/recipe.type';

async function getRecipes(): Promise<Recipe[]> {
  const q = query(collection(db, 'Recipes'));
  const recipiesSnapshot = await getDocs(q);
  return recipiesSnapshot.docs.map((doc: { data: () => any }) => doc.data());
}

async function updateRecipe(recipe: Recipe): Promise<void> {
  return await updateDoc(doc(db, 'Recipes', recipe.title), recipe);
}

export { getRecipes, updateRecipe };
