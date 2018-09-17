import { Component, OnInit, Input } from '@angular/core';
import { MockPravooModelService } from './../mock-pravoo-model.service';
import { Cluster } from '../pravoo';
import { MatInputModule } from '@angular/material';



@Component({
  selector: 'app-pravoo-model-cluster',
  templateUrl: './pravoo-model-cluster.component.html',
  styleUrls: ['./pravoo-model-cluster.component.css']
})
export class PravooModelClusterComponent implements OnInit {

  @Input() pravooClusters: Cluster[];
  constructor() { }

  ngOnInit() {
  }

}
