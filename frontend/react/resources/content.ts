export enum ContentTypes {
  SUBWINDOWS = "SUBWINDOWS",
  FULL_WINDOW = "FULL_WINDOW",
}

export interface ISubwindowContent {
  id: number;
  type: ContentTypes.SUBWINDOWS;
}

export interface IFullWindowContent {
  id: number;
  type: ContentTypes.FULL_WINDOW;
  data: string;
}

export type IWindow =
  | ISubwindowContent
  | IFullWindowContent;

export interface IWindowMap {
  [id: number]: IWindow;
}
