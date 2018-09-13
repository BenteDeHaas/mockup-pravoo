import { Pravoo, Goal, Cluster, Peilpunt, Category } from './pravoo';
import { PravooModellen } from './mock-pravoo-modellen';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MockPravooModelService {

  constructor() { }

  public getPravooModels(): Pravoo[] {
    return PravooModellen;
  }
}
