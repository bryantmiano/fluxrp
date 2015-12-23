import React from 'react';
import TemplateSelector from './reportBuilder/TemplateSelector';
import DesignsPanel from './reportBuilder/DesignsPanel';
import PreviewPanel from './reportBuilder/PreviewPanel';
import PropertiesPanel from './reportBuilder/PropertiesPanel';

class ReportBuilder extends React.Component {
    render() {
        return (
            <div>
                <TemplateSelector />
                <DesignsPanel />
                <PreviewPanel />
                <PropertiesPanel />
            </div>
        );
    }
}

export default ReportBuilder;
