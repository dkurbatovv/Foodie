export interface RecipeData {
    title: string;
    body: string;
    tags: string;
    image: string;
    favorite: boolean;
    timeCooking: number;
    foodValue: {
      calories: number;
      fats: number;
      carbohydrates: number;
      belki: number;
    };
    additionalInformation: {
      ingredients: string[];
      details: {
        title: string;
        body: string;
      }[];
    };
  }
  