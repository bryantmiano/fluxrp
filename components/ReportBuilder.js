import React from 'react';
import TemplateSelector from './reportBuilder/TemplateSelector';
import DesignsPanel from './reportBuilder/DesignsPanel';
import PreviewPanel from './reportBuilder/PreviewPanel';
import PropertiesPanel from './reportBuilder/PropertiesPanel';

class ReportBuilder extends React.Component {
    render() {
        return (
            <div className="ui doubling grid container">
                <TemplateSelector className="sixteen wide column" />
                <DesignsPanel className="three wide column"/>
                <PreviewPanel className="eight wide column"/>
                <PropertiesPanel className="five wide column"/>
            </div>
        );
    }
}

export default ReportBuilder;
