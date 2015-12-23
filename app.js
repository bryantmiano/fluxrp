import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import TemplateStore from './stores/TemplateStore';
import DesignStore from './stores/DesignStore';
import RouteStore from './stores/RouteStore';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(TemplateStore);
app.registerStore(DesignStore);

module.exports = app;
