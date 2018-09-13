import { Pravoo, Peilpunt, Category, Goal, Cluster } from './pravoo';

const Peilpunt1: Peilpunt = {
  name: '4jarige',
  sortorder: 1
 };
const Peilpunt2: Peilpunt = {
  name: 'Half groep 1',
  sortorder: 2
 };
const Peilpunt3: Peilpunt = {
  name: 'Eind groep 1',
  sortorder: 3
 };
const Peilpunt4: Peilpunt = {
  name: 'Half groep 2',
  sortorder: 4
 };
const Peilpunt5: Peilpunt = {
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
  name: 'Afscheid, veiligheid en welbevinden',
  sortorder: 1,
  isChildCharacteristic: true,
  Goals: Goal[] = [
    {
      name: 'Neemt vlot afscheid.',
      sortorder: 1,
      endGoal: false
    },
    {
      name: 'Neemt vlot afscheid.',
      sortorder: 2,
      endGoal: false
    },
    {
      name: 'Neemt vlot afscheid.',
      sortorder: 3,
      endGoal: false
    }
  ]
 };

 const CategoryA2: Category = {
  name: 'Sociale vaardigheden',
  sortorder: 2,
  isChildCharacteristic: true,
  Goals: Goal[] = [
    {
      name: 'Vraagt of het mee mag spelen, mee mag doen',
      sortorder: 1,
      endGoal: false
    },
    {
      name: 'Kan iets aan een ander kind geven',
      sortorder: 2,
      endGoal: false
    },
    {
      name: 'Kan om materiaal vragen',
      sortorder: 3,
      endGoal: false
    },
    {
      name: 'Kan op anderen reageren',
      sortorder: 4,
      endGoal: false
    },
    {
      name: 'Kan iets positiefs over anderen zeggen',
      sortorder: 5,
      endGoal: false
    }
  ]
 };

 const CategoryB1: Category = {
  name: 'Spelen',
  sortorder: 1,
  isChildCharacteristic: false,
  Goals: Goal[] = [
    {
      name: 'Kan 2 niet',
      sortorder: 1,
      endGoal: false
    },
    {
      name: 'Kan minimaal 10 min zelfstandig spelen',
      sortorder: 2,
      endGoal: false
    },
    {
      name: 'Kan met anderen spelen.',
      sortorder: 3,
      endGoal: false
    },
    {
      name: 'Kan minimaal 20 min zelfstandig spelen',
      sortorder: 4,
      endGoal: false
    },
    {
      name: 'Kan gevarieerd spelen in minimaal 2 speelplaatsen',
      sortorder: 5,
      endGoal: true
    }
  ]
 };

 const CategoryB2: Category = {
  name: 'Werken',
  sortorder: 2,
  isChildCharacteristic: false,
  Goals: Goal[] = [
    {
      name: 'Kan 2 niet',
      sortorder: 1,
      endGoal: false
    },
    {
      name: 'Let op bij de instructie',
      sortorder: 2,
      endGoal: false
    },
    {
      name: 'Kan taakgericht werken',
      sortorder: 3,
      endGoal: false
    },
    {
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
   name: 'Sociaal-emotionele cluster',
   sortorder: 1,
   categories: CategoriesA
 };

 const ClusterB: Cluster = {
  name: 'Speel/werk cluster',
  sortorder: 2,
  categories: CategoriesB
};

 const Clusters: Cluster[] = [
    ClusterA,
    ClusterB
 ];

export const PravooModellen: Pravoo[] = [
  { name: 'Pravoo model 1',
    peilpunten: Peilpunten,
    clusters: Clusters },
  { name: 'Pravoo model 2',
    peilpunten: Peilpunten,
    clusters: Clusters },
  { name: 'Pravoo model 3',
    peilpunten: Peilpunten,
    clusters: Clusters }
];
