export const envData=require('/env-data.json')

export class UrlsOfPages{
    envPage(id){
        return `${envData.find(env=>env.id===id).url}`
    }
}

export default new UrlsOfPages();