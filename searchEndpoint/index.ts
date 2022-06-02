import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as jsonData from './contactlist.sample.json';

const httpTrigger: AzureFunction = async function ( context: Context, req: HttpRequest ): Promise<void> {

    
    const searchTerm = req.body.searchTerm
    const maxResults = req.body.maxContactSearchResults

    context.log( 'HTTP trigger function processed a request. Search Term was ' + searchTerm + ' and max results was ' + maxResults );

    const response = filterSearch( searchTerm, maxResults )

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };

};

function filterSearch( searchTerm: string, maxResults: number ) {

    let data: any = jsonData

    const filteredContacts = data.filter( item => item.displayName.toLowerCase().includes( searchTerm.toLowerCase() ) || item.userPrincipalName.toLowerCase().includes( searchTerm.toLowerCase() ) )
    // @ts-ignore
    return filteredContacts.slice( 0, maxResults );
};


export default httpTrigger;