import React from 'react';
import toggleTemplateDropdown from '../actions/toggleTemplateDropdown';
import selectTemplate from '../actions/selectTemplate';
import TemplateStore from '../stores/TemplateStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';

class TemplateSelector extends React.Component {
    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    }

    onToggleDropdownClick() {
        this.context.executeAction(toggleTemplateDropdown, {});
    }

    onTemplateClick(template) {
        console.log(this);
        console.log(template);
        this.context.executeAction(selectTemplate, {template: template});
    }

    render() {
        var displayName = this.props.selectedTemplate ?
            <h4>{this.props.selectedTemplate.name}</h4> :
            <h4>New Template</h4>;

        var templateList = this.props.isShowingAll ?
            this.props.templates.map(function (template) {
                return (
                    <div key={template.id} onClick={this.onTemplateClick.bind(this, template)}>
                        <h5>{template.name}</h5>
                        <h6>{template.description}</h6>
                    </div>
                )
            }, this) : null;


        return (
            <div>
                <div onClick={this.onToggleDropdownClick.bind(this)}>
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

        return {
            selectedTemplate: templateStore.getSelectedTemplate(),
            isShowingAll: templateStore.getIsShowingAll(),
            templates: templateStore.getTemplates()
        };
    }
));
