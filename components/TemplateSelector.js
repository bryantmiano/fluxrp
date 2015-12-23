import React from 'react';
import toggleTemplateDropdown from '../actions/toggleTemplateDropdown';
import TemplateStore from '../stores/TemplateStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';

class TemplateSelector extends React.Component {
    onToggleDropdownClick() {
        this.context.executeAction(toggleTemplateDropdown);
    }

    onTemplateClick() {
        //this.context.executeAction();
    }

    render() {
        var displayName = this.props.selectedTemplate ?
            <h4>{this.props.selectedTemplate.name}</h4> :
            <h4>New Template</h4>;

        var templateList = this.props.isShowingAll ?
            this.props.templates.map(function (template) {
                return (
                    <div>
                        <div onClick={this.onTemplateClick}>
                            <h5>{template.name}</h5>
                            <h6>{template.description}</h6>
                        </div>
                    </div>
                )
            }, this) : null;


        return (
            <div>
                <div onClick={this.onToggleDropdownClick}>
                    {displayName}
                </div>
                {templateList}
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
            selectedTemplate: templateStore.getSelectedTemplate(),
            isShowingAll: templateStore.getIsShowingAll(),
            templates: templateStore.getTemplates()
        };
    }
));
