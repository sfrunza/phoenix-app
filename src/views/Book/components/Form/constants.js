export const serviceOptions = [
  { label: 'Moving', value: 'moving' },
  { label: 'Moving & Storage', value: 'withStorage' },
  { label: 'Loading Help', value: 'loadingOnly' },
  { label: 'Unloading Help', value: 'unloadingOnly' },
  { label: 'Packing Only', value: 'packingOnly' },
  { label: 'Inside Move', value: 'insideHelp' },
  //   { label: "Brave Movers Storage", value: "Brave Movers Storage" },
];

export const timeOptions = [
  { label: 'morning', value: '08:00:00' },
  { label: 'noon', value: '12:00:00' },
  { label: 'afternoon', value: '15:00:00' },
];

export const movingSizeOptions = [
  {
    label: 'Please select...',
    value: '',
  },
  {
    label: 'One Room or less (<1000 lbs)',
    value: 'R',
  },
  { label: 'Studio apartment', value: 'S' },
  { label: '1 Bedroom apartment', value: '1A' },
  { label: '2 Bedroom apartment', value: '2A' },
  {
    label: '3+ Bedroom apartment',
    value: '3A',
  },
  {
    label: '2 Bedroom House/Townhouse',
    value: '2H',
  },
  {
    label: '3 Bedroom House/Townhouse',
    value: '3H',
  },
  {
    label: '4+ Bedroom House/Townhouse',
    value: '4H',
  },
  {
    label: 'Office / Commercial space',
    value: 'O',
  },
];

export const floorOptions = [
  {
    label: 'Please select...',
    value: '',
  },
  { label: 'Elevator Building', value: 'E' },
  {
    label: 'No stairs - Ground floor',
    value: '1',
  },
  { label: 'Stairs - 2nd floor', value: '2' },
  { label: 'Stairs - 3rd floor', value: '3' },
  { label: 'Stairs - 4th floor', value: '4' },
  { label: 'Stairs - 5th floor', value: '5' },
  { label: 'Private House', value: 'H' },
  { label: 'Storage Unit', value: 'S' },
];
