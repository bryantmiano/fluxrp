import React from 'react';
import toggleTemplateDropdown from '../../actions/toggleTemplateDropdown';
import readTemplates from '../../actions/readTemplates';
import selectTemplate from '../../actions/selectTemplate';
import TemplateStore from '../../stores/TemplateStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory } from 'fluxible-router';

class TemplateSelector extends React.Component {
    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    }

    onToggleDropdownClick() {
        this.context.executeAction(toggleTemplateDropdown);
    }

    onTemplateClick(template) {
        this.context.executeAction(selectTemplate, {template: template});
        this.context.executeAction(toggleTemplateDropdown);
    }

    componentDidMount() {
        this.context.executeAction(readTemplates);
    }

    render() {
        var displayName = this.props.selectedTemplate ?
            <h1>{this.props.selectedTemplate.name}</h1> :
            <h1>New Template</h1>;

        var templateList = this.props.isShowingAll ?
            this.props.templates.map(function (template) {
                return (
                    <div className="item" key={template.id} onClick={this.onTemplateClick.bind(this, template)}>
                        <div className="content">
                            <h4 className="header">{template.name}</h4>
                            <h5 className="meta">{template.description}</h5>
                        </div>
                    </div>
                )
            }, this) : null;


        return (
            <div className={this.props.className}>
                <div onClick={this.onToggleDropdownClick.bind(this)}>
                    {displayName}
                </div>
                <div className="ui items">
                    {templateList}
                </div>
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
