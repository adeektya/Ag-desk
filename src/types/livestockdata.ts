export type Livestock = {
  id: number;
  type: string;
  ranchName: string;
  number: number;
  vaccination_date: string;
  fieldUtilization?: string;
  feedType?: string;
  productionData?: {
    milkYield?: number;
    woolProduction?: number;
    // Add other production types as necessary
  };
  breedingRecords?: string;
};

// Dummy data for the example
const livestockData: Livestock[] = [
  {
    id: 1,
    type: "Cattle",
    ranchName: "Sunny Meadows",
    number: 150,
    vaccination_date: "24/05/24",
    fieldUtilization: "Grazing - Field A",
    feedType: "Grass",
    productionData: {
      milkYield: 500,
    },
    breedingRecords: "Last bred on 2023-03-15",
  },
  {
    id: 2,
    type: "Sheep",
    ranchName: "Green Valley",
    number: 300,
    vaccination_date: "30/05/24",
    fieldUtilization: "Grazing - Field B",
    feedType: "Mixed Feed",
    productionData: {
      woolProduction: 200,
    },
    breedingRecords: "Last bred on 2023-02-20",
  },
  // Add more livestock data as needed
];

export default livestockData;
