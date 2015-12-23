import React from 'react';
import TemplateStore from '../stores/TemplateStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';

class TemplateSelector extends React.Component {
    render() {
        var displayName = this.props.selectedTemplate ?
            <h4>{this.props.selectedTemplate.name}</h4>:
            <h4>New Template</h4>;


        return (
            <div>
                {displayName}
            </div>
        );
    }
}

export default handleHistory(connectToStores(
    TemplateSelector,
    [TemplateStore],
    function (context, props) {
        var templateStore = context.getStore(TemplateStore);

        console.log(context.getStore(TemplateStore));
        return {
            selectedTemplate: templateStore.getSelectedTemplate()
        };
    }
));
