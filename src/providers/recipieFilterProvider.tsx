import React, { createContext, useState, FC } from 'react';

type RecipieFilterContextState = {
  recipieTypes: string[];
  updateRecipieTypes: (recipieType: string) => void;
};

const contextDefaultValues: RecipieFilterContextState = {
  recipieTypes: [],
  updateRecipieTypes: () => undefined,
};

export const RecipieFilterContext = createContext<RecipieFilterContextState>(
  contextDefaultValues
);

const RecipieTypesProvider: FC = ({ children }) => {
  const [recipieTypes, setRecipieTypes] = useState<string[]>(
    contextDefaultValues.recipieTypes
  );

  const updateRecipieTypes = (recipieType: string) => {
    const index: number = recipieTypes.indexOf(recipieType);
    if (index >= 0) {
      setRecipieTypes((recipieTypes) =>
        recipieTypes.filter((rt) => rt !== recipieType)
      );
    } else {
      setRecipieTypes((recipieTypes) => [...recipieTypes, recipieType]);
    }
  };

  return (
    <RecipieFilterContext.Provider
      value={{
        recipieTypes,
        updateRecipieTypes,
      }}
    >
      {children}
    </RecipieFilterContext.Provider>
  );
};

export default RecipieTypesProvider;
