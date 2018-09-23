import { Pravoo, Goal, Cluster, Peilpunt, Category } from './pravoo';
import { PravooModellen } from './mock-pravoo-modellen';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class MockPravooModelService {

  selectedPravoo: Pravoo;

  constructor() { }

  public getPravooModels(): Pravoo[] {
    return PravooModellen;
  }

  public getSelectedPravoo(): Pravoo {
    return this.selectedPravoo;
  }

  public setSelected( selectedPravoo: Pravoo ): void {
    this.selectedPravoo = selectedPravoo;
  }

  public addPeilpunt( pravoo: Pravoo , peilpunt: Peilpunt ): void {
  }

  public delPeilpunt( pravoo: Pravoo , peilpunt: Peilpunt ): void {

  }
}
