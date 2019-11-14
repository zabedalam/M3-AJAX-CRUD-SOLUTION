const url = "https://strivetestapi.azurewebsites.net/api/agenda/";

getEvents = async () => {
    const response = await fetch(url); //this is getting the response from the API fetching the events
    return await response.json(); //this is transforming the response in a json
};

getEvent = async id => {
    const response = await fetch(url + id); //this is getting the response from the API fetching the event
    return await response.json(); //this is transforming the response in a json
};

saveEvent = async event => { // no ID in the url, but information in the body
    const response = await fetch(url, {
        //the POST is made with the fetch method as well
        method: "POST", //declaring the CRUD method
        body: JSON.stringify(event), //Here i'm stringifying the object
        headers: new Headers({
            "Content-Type": "application/json" //this is required by our APIS, we need to declare the content type
        })
    });
    return response; //returning the response because the frontend need to check the ok property
};

updateEvent = async (id, event) => { //PUT usually have the url followed by the ID of the item we want to change / edit /api/agenda/id
    const response = await fetch(url + id, {
        method: "PUT",
        body: JSON.stringify(event),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response;
}

deleteEvent = async id => { //DELETE has no body / payload, just the ID in the url /api/agenda/id
    const response = await fetch(url + id, {
        // headers: {
        //   "Authorization": "Basic whatever"
        // },
        method: "DELETE"
    })
    return response.ok;
}