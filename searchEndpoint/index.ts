import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import data from "./db"

const httpTrigger: AzureFunction = async function ( context: Context, req: HttpRequest ): Promise<void> {
    context.log( 'HTTP trigger function processed a request. Search Term was ' + req.body.searchTerm );
    const responseMessage = data
    const responseMessageNew = filterSearch( req.body.searchTerm )

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessageNew
    };

};

function filterSearch( searchTerm: string ) {
    return data.filter( item => item.displayName.toLowerCase().includes( searchTerm.toLowerCase() ) )
};

export default httpTrigger;