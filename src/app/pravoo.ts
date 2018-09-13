export class Peilpunt {
  id: number;
  name: string;
  sortorder: number;
}

export class Goal {
  id: number;
  name: string;
  sortorder: number;
  endGoal: boolean;
}

export class Category {
  id: number;
  name: string;
  sortorder: number;
  isChildCharacteristic: boolean;
  Goals: Goal[];
}

export class Cluster {
  id: number;
  name: string;
  sortorder: number;
  categories: Category[];
}

export class Pravoo {
  id: number;
  name: string;
  clusters: Cluster[];
  peilpunten: Peilpunt[];
}
