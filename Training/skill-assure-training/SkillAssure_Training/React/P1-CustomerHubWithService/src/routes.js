import Arpu from './views/Arpu/Arpu';
import Churn from './views/Churn/Churn';
import Customer from './views/Customer/CustomerComponent';
import Dashboard from './views/Dashboard/DasboardComponent';
import Sentiment from './views/Sentiment/Sentiment';
import Channel from './views/Channel/Channel';
import MicroInteraction from './views/MicroInteraction/MicroInteraction'
import MicroInteractionButton from './views/MicroInteraction/MicroInteractionButton'
import Unified from './views/UnifiedExperience/Unified'
import Telcolabs from './views/Telcolabs/Telcolabs';
const routes = [
    {
        path: '/customer',
        component: Customer,
        layout: "/admin"
    },
    {
        path: '/dashboard',
        component: Dashboard,
        layout: "/admin"
    }
    ,
    {
        path: '/businessReport',
        component: Arpu,
        layout: "/admin"
    }
    ,
    {
        path: '/churn',
        component: Churn,
        layout: "/admin"
    }
    ,
    {
        path: '/arpu',
        component: Arpu,
        layout: "/admin"
    }
    ,
    {
        path: '/sentiment',
        component: Sentiment,
        layout: "/admin"
    },
    {
        path: '/channel',
        component: Channel,
        layout: "/admin"
    },
    {
        path: '/micro-interaction',
        component: MicroInteraction,
        layout: "/admin"
    },
    {
        path: '/Events',
        component: MicroInteractionButton,
        layout: "/admin"
    },
    {
        path: '/Unified',
        component: Unified,
        layout: "/admin"
    },
    {
        path: '/telcolabs',
        component: Telcolabs,
        layout: "/admin"
    }
];

export default routes;