import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import data from "./db"

const httpTrigger: AzureFunction = async function ( context: Context, req: HttpRequest ): Promise<void> {
    context.log( 'HTTP trigger function processed a request.' );
    const responseMessage = data

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;