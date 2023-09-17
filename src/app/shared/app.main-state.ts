import { Action, Select, Selector, State, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { filterSegments, selectDesease, selectDrug, setBody, setDeseases, setDrugs, setMode, setRequest, setTag, sortBody, sortByKey } from "./app.actions";
import { Drug } from "../models/drug";
import { Desease } from "../models/desease";
import { BodySegment } from "../models/body-segment";

export interface AppHealthStateModel {
  mode: string,
  tag: string,
  request: string,
  selectedDrug?: Drug,
  body: BodySegment[],
  sortedInfo: Drug[],
  drugs: Drug[],
  deseases: Desease[],
  selectedDesease?: Desease,
  bodyIssue: string[],
  sortedBodyIssue: string[],
  partIssues?: BodySegment
}

@State<AppHealthStateModel>({
  name: 'healthState',
  defaults: {
    mode: 'deseases',
    request: 'string',
    drugs: [],
    deseases: [],
    bodyIssue: [],
    sortedInfo: [],
    body: [],
    sortedBodyIssue: [],
    tag: 'drugs',
  }
})
@Injectable()
export class AppHealthState {

  @Action(setMode)
  searchReq({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { request }: setRequest): void {
    patchState({ request });
  }

  @Action(setDrugs)
  setDrugs({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { drugs }: setDrugs): void {
    patchState({
      drugs,
      sortedInfo: drugs,
    });
  }

  @Action(setDeseases)
  setDeseases({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { deseases }: setDeseases): void {
    patchState({ deseases });
  }

  @Action(setBody)
  setBody({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { body }: setBody): void {
    patchState({
      body,
    });
  }

  @Action(sortBody)
  sortBody({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { key }: sortBody): void {
    const currentParts = [...getState().bodyIssue];
    const sortedParts = currentParts.filter((part) => part.toLowerCase().includes(key.toLowerCase()));
    patchState({
      sortedBodyIssue: sortedParts,
    })
  }

  @Action(setTag)
  setTag({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { tag }: setTag): void {
    console.log(tag);
    patchState({ tag: tag });
  }

  @Action(selectDrug)
  selectDrug({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { drug }: selectDrug): void {
    const neededDrug = getState().drugs.find((dr) => dr.name.toLocaleLowerCase().includes(drug.toLowerCase()))
    console.log(getState().drugs.find((dr) => dr.name.toLocaleLowerCase().includes(drug.toLowerCase())))
    patchState({ selectedDrug: neededDrug });
  }

  @Action(sortByKey)
  sortByKey({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { key }: sortByKey): void {
    const currentDrugs = [...getState().drugs];
    const sortedDrugs = currentDrugs.filter((drug) => drug.name.toLowerCase().includes(key.toLowerCase()));
    patchState({
      sortedInfo: sortedDrugs,
    })
  }

  @Action(filterSegments)
  filterSegments({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { key }: filterSegments): void {
    const filtredIssues = getState().body.find((part) => part.name === key);
    patchState({
      partIssues: filtredIssues,
      bodyIssue: filtredIssues?.problems,
      sortedBodyIssue: filtredIssues?.problems
    })
  }

  @Action(selectDesease)
  selectDesease({ patchState, setState, dispatch, getState }: StateContext<AppHealthStateModel>, { desease }: selectDesease): void {
    const findedDesease = getState().deseases.find((des) => des.name.toLowerCase().includes(desease.toLowerCase()))
    console.log(getState().deseases.find((des) => des.name.toLowerCase().includes(desease.toLowerCase())))
    patchState({
      selectedDesease: findedDesease,
    })
  }

  @Selector()
  static getMode(state: AppHealthStateModel): string {
    return state.mode;
  }

  @Selector()
  static getTag(state: AppHealthStateModel): string {
    return state.tag;
  }
  @Selector()
  static getDeseases(state: AppHealthStateModel): Desease[] {
    return state.deseases;
  }

  @Selector()
  static getBody(state: AppHealthStateModel): BodySegment[] {
    return state.body;
  }

  @Selector()
  static getDrugs(state: AppHealthStateModel): Drug[] {
    return state.drugs;
  }

  @Selector()
  static getRequest(state: AppHealthStateModel): string {
    return state.request;
  }

  @Selector()
  static getDrug(state: AppHealthStateModel): Drug | undefined {
    return state.selectedDrug;
  }

  @Selector()
  static getSortedInfo(state: AppHealthStateModel): Drug[] {
    return state.sortedInfo;
  }

  @Selector()
  static getPartIssues(state: AppHealthStateModel): BodySegment | undefined {
    return state.partIssues;
  }

  @Selector()
  static getSortedBody(state: AppHealthStateModel):string[] {
    return state.sortedBodyIssue;
  }

  @Selector()
  static getSelectedDisease(state: AppHealthStateModel): Desease | undefined {
    return state.selectedDesease;
  }

}
