import TextInput from '../components/textInput/'
import TextArea from '../components/textArea/'
import MultiSelect from '../components/multiSelect/'
import RadioGroup from '../components/radioGroup/'

const gameBugReportForm = [
    {
        id: 1,
        title: 'Issue title',
        name: 'title', 
        placeholder: 'Enter title',
        required: true,
        type: 'text',
        minLength: 3,
        maxLength: 40,
        errorText: '* Required, enter between 3 - 40 character',
        component: TextInput,
    },
    {
        id: 2,
        title: 'Select platform',
        name: 'platform', 
        required: true,
        type: 'radio',
        options: ['Web', 'Android', 'IOS'],
        errorText: '* Select one platform',
        component: RadioGroup,
    },
        {
        id: 3,
        title: 'select a game',
        name: 'game',
        required: true,
        type: 'checkbox',
        items: [
            {name: 'June’s Journey', image: 'https://global-uploads.webflow.com/5eba64f02efe5d4548413f86/5eba64f02efe5dbb5e413fca_junes-journey-app-icon.png'},
            {name: 'Pearl’s Peril', image: 'https://global-uploads.webflow.com/5eba64f02efe5d4548413f86/5eba64f02efe5dcabe414018_230x0w.png'},
            {name: 'Tropicats', image: 'https://global-uploads.webflow.com/5eba64f02efe5d4548413f86/5eba64f02efe5d0bfa413fec_tropicats-icon-p-500.png'},
            {name: 'Diamond Dash', image: 'https://global-uploads.webflow.com/5eba64f02efe5d4548413f86/5eba64f02efe5de7df413fef_diamond-dash-icon-p-500.png'},
            {name: 'Bubble Island 2', image: 'https://global-uploads.webflow.com/5eba64f02efe5d4548413f86/5eba64f02efe5d0d02413ff2_bubble-island-2-icon-p-500.png'},
            {name: 'Jelly Splash', image: 'https://global-uploads.webflow.com/5eba64f02efe5d4548413f86/5eba64f02efe5df734413fed_jelly-splash-icon-p-500.png'},
        ],
        errorText: '* Select one or more games',
        component: MultiSelect,
    },
    {
        id: 4,
        title: 'Issue description',
        name: 'issue text',
        placeholder: 'Enter description',
        required: true,
        type: 'textarea',
        minLength: 20,
        maxLength: 400,
        errorText: '* Required, enter between 20 - 400 character',
        component: TextArea,
    },
]

/// personal message form data
export const personalMessage = [
    {
        id: 1,
        title: 'contact with',
        name: 'receiver',
        placeholder: 'Enter title',
        required: true,
        type: 'text',
        minLength: 3,
        maxLength: 40,
        errorText: '* Required, enter between 3 - 40 character',
        component: TextInput,
    },
    {
        id: 2,
        title: 'Message text',
        name: 'message text', 
        placeholder: 'Enter your message',
        required: true,
        type: 'textarea',
        minLength: 10,
        maxLength: 400,
        errorText: '* Required, enter between 10 - 400 character',
        component: TextArea,
    },
]

/// rating form data
export const ratingForm = [
    {
        id: 1,
        title: 'Select rating',
        name: 'rating', 
        required: true,
        type: 'radio',
        options: ['bad', 'not bad', 'good', 'excellent'],
        errorText: '* Select one',
        component: RadioGroup,
    }
]


export default gameBugReportForm