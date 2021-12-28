import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function ( context: Context, req: HttpRequest ): Promise<void> {
    context.log( 'HTTP trigger function processed a request.' );
    const responseMessage = [
        {
            "id": null,
            "givenName": "Armando",
            "surname": "Sale",
            "displayName": "Armando Sale",
            "userPricipalName": "ArmandoNSale@einrot.com",
            "companyName": "Unity Stationers",
            "jobTitle": "Certified respiratory therapist",
            "department": "Certified respiratory therapist",
            "officeLocation": "Camden",
            "emailAddress": "ArmandoNSale@einrot.com",
            "businessPhones": "609-506-6117",
            "mobilePhone": "609-506-6117",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Diane",
            "surname": "Sale",
            "displayName": "Diane Sale",
            "userPricipalName": "DianeTSale@superrito.com",
            "companyName": "Garden Master",
            "jobTitle": "Cost engineer",
            "department": "Cost engineer",
            "officeLocation": "Denver",
            "emailAddress": "DianeTSale@superrito.com",
            "businessPhones": "720-936-8294",
            "mobilePhone": "720-936-8294",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Matthew",
            "surname": "Sales",
            "displayName": "Matthew Sales",
            "userPricipalName": "MatthewJSales@cuvox.de",
            "companyName": "White Hen Pantry",
            "jobTitle": "Computer training specialist",
            "department": "Computer training specialist",
            "officeLocation": "Hinsdale",
            "emailAddress": "MatthewJSales@cuvox.de",
            "businessPhones": "630-230-8947",
            "mobilePhone": "630-230-8947",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "David",
            "surname": "Sales",
            "displayName": "David Sales",
            "userPricipalName": "DavidTSales@fleckens.hu",
            "companyName": "Dun Rite Lawn Maintenance",
            "jobTitle": "Dairy farmer",
            "department": "Dairy farmer",
            "officeLocation": "Wolfforth",
            "emailAddress": "DavidTSales@fleckens.hu",
            "businessPhones": "806-866-4938",
            "mobilePhone": "806-866-4938",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Susan",
            "surname": "Sales",
            "displayName": "Susan Sales",
            "userPricipalName": "SusanRSales@rhyta.com",
            "companyName": "Dahlkemper's",
            "jobTitle": "Load dispatcher",
            "department": "Load dispatcher",
            "officeLocation": "Camden",
            "emailAddress": "SusanRSales@rhyta.com",
            "businessPhones": "609-790-1219",
            "mobilePhone": "609-790-1219",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Daniel",
            "surname": "Sales",
            "displayName": "Daniel Sales",
            "userPricipalName": "DanielJSales@gustr.com",
            "companyName": "Wise Solutions",
            "jobTitle": "Transmission engineer",
            "department": "Transmission engineer",
            "officeLocation": "Dayton",
            "emailAddress": "DanielJSales@gustr.com",
            "businessPhones": "937-276-2111",
            "mobilePhone": "937-276-2111",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Dave",
            "surname": "Sale",
            "displayName": "Dave Sale",
            "userPricipalName": "DaveKSale@cuvox.de",
            "companyName": "Peter Reeves",
            "jobTitle": "Cement mason",
            "department": "Cement mason",
            "officeLocation": "Anaheim",
            "emailAddress": "DaveKSale@cuvox.de",
            "businessPhones": "949-374-4022",
            "mobilePhone": "949-374-4022",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Adela",
            "surname": "Sales",
            "displayName": "Adela Sales",
            "userPricipalName": "AdelaBSales@dayrep.com",
            "companyName": "The White Swan",
            "jobTitle": "Veterinary assistants and laboratory animal caretaker",
            "department": "Veterinary assistants and laboratory animal caretaker",
            "officeLocation": "Jackson",
            "emailAddress": "AdelaBSales@dayrep.com",
            "businessPhones": "662-810-2745",
            "mobilePhone": "662-810-2745",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Felicia",
            "surname": "Sales",
            "displayName": "Felicia Sales",
            "userPricipalName": "FeliciaBSales@cuvox.de",
            "companyName": "Adray",
            "jobTitle": "Fork lift operator",
            "department": "Fork lift operator",
            "officeLocation": "Ventura",
            "emailAddress": "FeliciaBSales@cuvox.de",
            "businessPhones": "805-659-6356",
            "mobilePhone": "805-659-6356",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Donald",
            "surname": "Sales",
            "displayName": "Donald Sales",
            "userPricipalName": "DonaldCSales@rhyta.com",
            "companyName": "Odyssey Records & Tapes",
            "jobTitle": "Garment presser",
            "department": "Garment presser",
            "officeLocation": "Warren",
            "emailAddress": "DonaldCSales@rhyta.com",
            "businessPhones": "207-273-7668",
            "mobilePhone": "207-273-7668",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Daniel",
            "surname": "Sale",
            "displayName": "Daniel Sale",
            "userPricipalName": "DanielMSale@einrot.com",
            "companyName": "Matrix Design",
            "jobTitle": "Sports official",
            "department": "Sports official",
            "officeLocation": "East Syracuse",
            "emailAddress": "DanielMSale@einrot.com",
            "businessPhones": "315-558-7523",
            "mobilePhone": "315-558-7523",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Kevin",
            "surname": "Sale",
            "displayName": "Kevin Sale",
            "userPricipalName": "KevinLSale@einrot.com",
            "companyName": "Wheels Discount Auto",
            "jobTitle": "Speech writer",
            "department": "Speech writer",
            "officeLocation": "Grand Rapids",
            "emailAddress": "KevinLSale@einrot.com",
            "businessPhones": "231-583-9576",
            "mobilePhone": "231-583-9576",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Joseph",
            "surname": "Sales",
            "displayName": "Joseph Sales",
            "userPricipalName": "JosephJSales@armyspy.com",
            "companyName": "Stop N Shop",
            "jobTitle": "Meatcutter",
            "department": "Meatcutter",
            "officeLocation": "Chicago",
            "emailAddress": "JosephJSales@armyspy.com",
            "businessPhones": "708-761-1372",
            "mobilePhone": "708-761-1372",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Lindsay",
            "surname": "Sales",
            "displayName": "Lindsay Sales",
            "userPricipalName": "LindsayFSales@dayrep.com",
            "companyName": "Official All Star Caf�",
            "jobTitle": "Conservation technician",
            "department": "Conservation technician",
            "officeLocation": "Milwaukee",
            "emailAddress": "LindsayFSales@dayrep.com",
            "businessPhones": "920-289-1925",
            "mobilePhone": "920-289-1925",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Joanne",
            "surname": "Sales",
            "displayName": "Joanne Sales",
            "userPricipalName": "JoanneLSales@jourrapide.com",
            "companyName": "Builderama",
            "jobTitle": "Psychiatrist",
            "department": "Psychiatrist",
            "officeLocation": "Rosemead",
            "emailAddress": "JoanneLSales@jourrapide.com",
            "businessPhones": "626-312-0815",
            "mobilePhone": "626-312-0815",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "William",
            "surname": "Sale",
            "displayName": "William Sale",
            "userPricipalName": "WilliamDSale@rhyta.com",
            "companyName": "Earthworks Garden Kare",
            "jobTitle": "Personal care aide",
            "department": "Personal care aide",
            "officeLocation": "Pittsburgh",
            "emailAddress": "WilliamDSale@rhyta.com",
            "businessPhones": "724-973-2145",
            "mobilePhone": "724-973-2145",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Maria",
            "surname": "Sales",
            "displayName": "Maria Sales",
            "userPricipalName": "MariaRSales@einrot.com",
            "companyName": "Auto Works",
            "jobTitle": "Plant manager",
            "department": "Plant manager",
            "officeLocation": "Houston",
            "emailAddress": "MariaRSales@einrot.com",
            "businessPhones": "281-555-3558",
            "mobilePhone": "281-555-3558",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Rodney",
            "surname": "Sale",
            "displayName": "Rodney Sale",
            "userPricipalName": "RodneyHSale@teleworm.us",
            "companyName": "Nedick's",
            "jobTitle": "Receive-and-deliver clerk",
            "department": "Receive-and-deliver clerk",
            "officeLocation": "Red Bank",
            "emailAddress": "RodneyHSale@teleworm.us",
            "businessPhones": "201-783-7128",
            "mobilePhone": "201-783-7128",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Jaime",
            "surname": "Sale",
            "displayName": "Jaime Sale",
            "userPricipalName": "JaimeRSale@gustr.com",
            "companyName": "Price Club",
            "jobTitle": "Telephone installer",
            "department": "Telephone installer",
            "officeLocation": "Arden",
            "emailAddress": "JaimeRSale@gustr.com",
            "businessPhones": "828-653-0634",
            "mobilePhone": "828-653-0634",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        },
        {
            "id": null,
            "givenName": "Leora",
            "surname": "Sale",
            "displayName": "Leora Sale",
            "userPricipalName": "LeoraCSale@cuvox.de",
            "companyName": "First Choice Yard Help",
            "jobTitle": "Certified pest control applicator",
            "department": "Certified pest control applicator",
            "officeLocation": "Columbia",
            "emailAddress": "LeoraCSale@cuvox.de",
            "businessPhones": "443-471-0550",
            "mobilePhone": "443-471-0550",
            "preferredLanguage": null,
            "notes": null,
            "country": null
        }
    ]

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;