data = [
	{id: 1, label:"OTL Events", description:"Publish Your On The Lot Events to your social media channels", enabled:true},
	{id: 2, label:"New Arrivals", description:"Publish vehicles that have recently arrived on your lot", enabled:true},
	{id: 3, label:"Price Drops", description:"Let your followers know when a vehicle has dropped in price", enabled:true},
	{id: 4, label:"Vehicle Reviews", description:"Showcase expert reviews for your New inventory from autoTRADER Experts", enabled:true},
	{id: 5, label:"Featured on AT", description:"Get more exposure to your Provincial Priority Listings by publishing them to your social media channels", enabled:true},
	{id: 6, label:"Car360", description:"Showcase your captured 360s", enabled:true},
	{id: 7, label:"Trending", description:"Show your followers ads that are generating high interest", enabled:true},
	{id: 8, label:"Service Department", description:"Drive customers to the service centre page on your website", enabled:true},
	{id: 9, label:"Great Price!", description:"Showcase vehicles that have a \"Great Price\" on the autoTRADERIQ price graph", enabled:true},

]

class EventsData {
	boostChoices:[];
	constructor(){
		this.boostChoices = data;
	}
}


let eventsData = new EventsData();

export default observable(eventsData);
export { EventsData };