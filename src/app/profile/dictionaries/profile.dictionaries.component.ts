import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../../shared/dictionary/dictionary.service';
import { Dictionary } from '../../shared/dictionary/dictionary';
import { RestResponseError } from '../../shared/rest/rest.responseError';
import { RestResponseArray } from '../../shared/rest/rest.responseArray';
import { RestResponseObject } from '../../shared/rest/rest.responseObject';
import { RestResponseSimpleArray } from '../../shared/rest/rest.responseSimpleArray';

@Component({
  moduleId: 'app/profile/dictionaries/',
  selector: 'sl-profile-dictionaries',
  templateUrl: './profile.dictionaries.component.html'
})
export class ProfileDictionariesComponent implements OnInit {

  private types: String[]
  private selectedType: String
  private dictionaries: Dictionary[]
  private model: Dictionary

  constructor(private dictionaryService: DictionaryService){
    this.dictionaries = new Array<Dictionary>()
    this.types = new Array<String>()
    this.model = new Dictionary()
  }

  ngOnInit() {
    this.getDictionaryTypes()
  }

  getDictionaryTypes() {
    this.dictionaryService.getTypes()
      .subscribe(
        (res: RestResponseSimpleArray<String>) => this.onTypesReceived(res.array),
        (err: RestResponseError) => console.log(err.message))
  }

  getDictionaries() {
    this.dictionaryService.getByType(this.selectedType)
      .subscribe(
        (res: RestResponseArray<Dictionary>) => this.onDictionariesReceived(res.array),
        (err: RestResponseError) => console.log(err.message))
  }

  create() {
    this.dictionaryService.create(this.model)
      .subscribe(
        (res: RestResponseObject<Dictionary>) => this.onDictionaryCreated(),
        (err: RestResponseError) => console.log(err.message))
  }

  onDictionariesReceived(dictionaries: Dictionary[]) {
    this.dictionaries = dictionaries;
  }

  onTypesReceived(types: String[]) {
    this.onTypeChange(types[0]);
    this.types = types;
  }

  onTypeChange(value: String) {
    this.selectedType = value;
    this.model = new Dictionary(this.selectedType);
    this.getDictionaries();
  }

  onDictionaryCreated() {
    this.onTypeChange(this.selectedType);
  }

  save() {
    if(this.model) {
      this.create();
    }
  }

}