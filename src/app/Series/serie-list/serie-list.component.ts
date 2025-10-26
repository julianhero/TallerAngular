import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  selectedSerie: Serie | null = null;
  
  constructor(private serieService: SerieService) { }
  

  getSeries():void{
    this.serieService.getSeries().subscribe((series)=>{
      this.series = series;
    });
  



  }
  ngOnInit() {
    this.getSeries();
  }

  onSelect(serie: Serie) {
    this.selectedSerie = serie;
  }

  getAverageSeasons(): number {
    if (!this.series || this.series.length === 0) return 0;
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    return total / this.series.length;
  }

}
