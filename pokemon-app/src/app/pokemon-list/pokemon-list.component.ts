import { Component, OnInit } from '@angular/core';
import { Config } from '../interface/config';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pkeData: Config[] = []
  config: { name: string; url: string; } | undefined;


  constructor(private ConfigService: ConfigService) { }

  showPkeData(){
    this.ConfigService.getConfig()
    .subscribe((data) => this.pkeData = this.pkeData)
  }

  ngOnInit(): void {
    console.log(this.pkeData);
  }

}
