export interface BlogModel {
    id:number,
    title:string,
    description:string
}

export interface BlogState {
    blogList:BlogModel[],
    errorMessage:string
}