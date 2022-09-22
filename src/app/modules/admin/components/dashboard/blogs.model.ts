export interface AdminBlogDetail {
    _id:string,
    banner: string,
    conclusion: string,
    created_by: string,
    date: string,
    id: number,
    intro: string,
    image1: string,
    image2: string,
    para1: string,
    para2: string,
    subheading1: string,
    subheading2: string,
    status: boolean,
    title: string
}

export interface AdminBlogList{
    data: Array<object>,
    status: number
}