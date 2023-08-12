import {Component} from 'react'

import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://e0.pxfuel.com/wallpapers/261/474/desktop-wallpaper-kuchipudi-is-one-of-the-beautiful-classical-dance-form-telangana.jpg',
    name: 'Kuchipudi',
    location: 'Andra Pradesh, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://wallpaperaccess.com/full/1315407.jpg',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://e0.pxfuel.com/wallpapers/523/221/desktop-wallpaper-classical-dance-cool-classical-indian-dance.jpg',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
{
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://nie-images.s3.amazonaws.com/gall_content/2023/2/2023_2$ugcphoto119_Sunday_2023_213944139.jpg',
    name: 'Bharatanatyam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Shinjini_kathak_dance_indian_classical_in_traditional_attire.jpg',
    name: 'kerala Dance Festival',
    location: 'Kerala, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://www.navhindtimes.in/wp-content/uploads/2022/03/Tejaswini.jpg',
    name: 'Canada DanceFestival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://cdn.yehaindia.com/wp-content/uploads/2020/08/1-main-1.jpg',
    name: 'Kuchipudi',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://images.firstpost.com/wp-content/uploads/2022/03/Kuchipudi_2.jpg',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://mcmscache.epapr.in/post_images/website_350/post_21056079/full.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://t3.ftcdn.net/jpg/04/07/58/06/360_F_407580695_eY4inUudwTMGryj3rjQonCHFhEjy2dlW.jpg',
    name: 'Puthanalkkal Kalavela',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
]

class Events extends Component {
    state = {
        activeEventId:'',
    }

    getActiveEventRegistrationStatus = () => {
        const {activeEventId} = this.state 
        const activeEventDetails = eventsList.find(
            event => event.id ===activeEventId,
        )
        if(activeEventDetails){
            return activeEventDetails.registrationStatus
        }
        return ''
    } 

    setActiveEventId = id => {
        this.setState({activeEventId:id})
    }

    renderEventsList  = () => {
        const {activeEventId} = this.state
        return (
            <ul className='events-list'>
                {eventsList.map(eachEvent=> (
                    <EventItem 
                    key = {eachEvent.id}
                    eventDetails = {eachEvent}
                    setActiveEventId={this.setActiveEventId}
                    isActive = {eachEvent.id===activeEventId}
                    />
                ))}
            </ul>
        )
    }

    render(){
        return (
            <div className='events-container'>
                <div className="events-content">
                   <h1 className='heading'>Events</h1>
                   {this.renderEventsList()}
                </div>
                <ActiveEventRegistrationDetails
                activeEventRegistrationStatus = {this.getActiveEventRegistrationStatus()}
                />
            </div>
        )
    }
}
export default Events