import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as data from './contactlist.sample.json';

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
    // @ts-ignore
    return data.filter( item => item.displayName.toLowerCase().includes( searchTerm.toLowerCase() ) || item.userPrincipalName.toLowerCase().includes( searchTerm.toLowerCase() ) );
};


export default httpTrigger;