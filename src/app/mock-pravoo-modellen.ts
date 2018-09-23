import { Pravoo, Peilpunt, Category, Goal, Cluster } from './pravoo';

const Peilpunt1: Peilpunt = {
  id: 1,
  name: '4jarige',
  sortorder: 1
 };
const Peilpunt2: Peilpunt = {
  id: 2,
  name: 'Half groep 1',
  sortorder: 2
 };
const Peilpunt3: Peilpunt = {
  id: 3,
  name: 'Eind groep 1',
  sortorder: 3
 };
const Peilpunt4: Peilpunt = {
  id: 4,
  name: 'Half groep 2',
  sortorder: 4
 };
const Peilpunt5: Peilpunt = {
  id: 5,
  name: 'Eind groep 2',
  sortorder: 5
 };
 const Peilpunten: Peilpunt[] = [
   Peilpunt1,
   Peilpunt2,
   Peilpunt3,
   Peilpunt4,
   Peilpunt5
 ];

 const CategoryA1: Category = {
  id: 1,
  name: 'Afscheid, veiligheid en welbevinden',
  sortorder: 1,
  isChildCharacteristic: true,
  Peilpunten: Peilpunten,
  Goals: [
    {
      id: 1,
      name: 'Neemt vlot afscheid.',
      sortorder: 1,
      endGoal: false
    },
    {
      id: 2,
      name: 'Neemt vlot afscheid.',
      sortorder: 2,
      endGoal: false
    },
    {
      id: 3,
      name: 'Neemt vlot afscheid.',
      sortorder: 3,
      endGoal: false
    }
  ]
 };

 const CategoryA2: Category = {
  id: 2,
  name: 'Sociale vaardigheden',
  sortorder: 2,
  isChildCharacteristic: true,
  Peilpunten: Peilpunten,
  Goals: [
    {
      id: 4,
      name: 'Vraagt of het mee mag spelen, mee mag doen',
      sortorder: 1,
      endGoal: false
    },
    {
      id: 5,
      name: 'Kan iets aan een ander kind geven',
      sortorder: 2,
      endGoal: false
    },
    {
      id: 6,
      name: 'Kan om materiaal vragen',
      sortorder: 3,
      endGoal: false
    },
    {
      id: 7,
      name: 'Kan op anderen reageren',
      sortorder: 4,
      endGoal: false
    },
    {
      id: 8,
      name: 'Kan iets positiefs over anderen zeggen',
      sortorder: 5,
      endGoal: false
    }
  ]
 };

 const CategoryB1: Category = {
  id: 3,
  name: 'Spelen',
  sortorder: 1,
  isChildCharacteristic: false,
  Peilpunten: Peilpunten,
  Goals: [
    {
      id: 9,
      name: 'Kan 2 niet',
      sortorder: 1,
      endGoal: false
    },
    {
      id: 10,
      name: 'Kan minimaal 10 min zelfstandig spelen',
      sortorder: 2,
      endGoal: false
    },
    {
      id: 11,
      name: 'Kan met anderen spelen.',
      sortorder: 3,
      endGoal: false
    },
    {
      id: 12,
      name: 'Kan minimaal 20 min zelfstandig spelen',
      sortorder: 4,
      endGoal: false
    },
    {
      id: 13,
      name: 'Kan gevarieerd spelen in minimaal 2 speelplaatsen',
      sortorder: 5,
      endGoal: true
    }
  ]
 };

 const CategoryB2: Category = {
  id: 4,
  name: 'Werken',
  sortorder: 2,
  isChildCharacteristic: false,
  Peilpunten: Peilpunten,
  Goals: [
    {
      id: 14,
      name: 'Kan 2 niet',
      sortorder: 1,
      endGoal: false
    },
    {
      id: 15,
      name: 'Let op bij de instructie',
      sortorder: 2,
      endGoal: false
    },
    {
      id: 16,
      name: 'Kan taakgericht werken',
      sortorder: 3,
      endGoal: false
    },
    {
      id: 17,
      name: 'Kan diepgeconcentreerd werken',
      sortorder: 4,
      endGoal: true
    }
  ]
 };

 const CategoriesA: Category[] = [
  CategoryA1,
  CategoryA2
 ];

 const CategoriesB: Category[] = [
  CategoryB1,
  CategoryB2
 ];

 const ClusterA: Cluster = {
  id: 1,
  name: 'Sociaal-emotionele cluster',
   sortorder: 1,
   categories: CategoriesA
 };

 const ClusterB: Cluster = {
  id: 2,
  name: 'Speel/werk cluster',
  sortorder: 2,
  categories: CategoriesB
};

 const Clusters: Cluster[] = [
    ClusterA,
    ClusterB
 ];

export const PravooModellen: Pravoo[] = [
  { id: 1,
    name: 'Pravoo model 1',
    peilpunten: Peilpunten,
    clusters: Clusters },
  { id: 2,
    name: 'Pravoo model 2',
    peilpunten: Peilpunten,
    clusters: Clusters },
  { id: 3,
    name: 'Pravoo model 3',
    peilpunten: Peilpunten,
    clusters: Clusters }
];
