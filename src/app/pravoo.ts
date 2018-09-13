export class Peilpunt {
  name: string;
  sortorder: number;
}

export class Goal {
  name: string;
  sortorder: number;
  endGoal: boolean;
}

export class Category {
  name: string;
  sortorder: number;
  isChildCharacteristic: boolean;
  Goals: Goal[];
}

export class Cluster {
  name: string;
  sortorder: number;
  categories: Category[];
}

export class Pravoo {
  name: string;
  clusters: Cluster[];
  peilpunten: Peilpunt[];
}
