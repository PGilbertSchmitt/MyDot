export interface ITab {
  id: number;
  title: string;
}

export type ICurrentTab = ITab;

export interface ITabIndex extends Array<ITab> { }
