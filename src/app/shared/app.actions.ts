import { Drug } from './../models/drug';
import { Desease } from '../models/desease';
import { BodySegment } from '../models/body-segment';

export class setMode {
  static readonly type = '[app] set mode'
  constructor(public mode: string) {}
}

export class setRequest {
  static readonly type = '[app] set request'
  constructor(public request: string) {}
}

export class setTag {
  static readonly type = '[app] set tag'
  constructor(public tag: string) {}
}

export class setDrugs {
  static readonly type = '[app] set drugs'
  constructor(public drugs: Drug[]) {}
}

export class setBody {
  static readonly type = '[app] set body'
  constructor(public body: BodySegment[]) {}
}

export class setDeseases {
  static readonly type = '[app] set request'
  constructor(public deseases: Desease[]) {}
}

export class selectDrug {
  static readonly type = '[app] select drug'
  constructor(public drug: string) {}
}

export class sortByKey {
  static readonly type = '[app] sort arrays'
  constructor(public key: string) {}
}

export class sortBody {
  static readonly type = '[app] sort body'
  constructor(public key: string) {}
}

export class filterSegments {
  static readonly type = '[app] filter segments'
  constructor(public key: string) {}
}

export class selectDesease {
  static readonly type = '[app] deseases select'
  constructor(public desease: string) {}
}

