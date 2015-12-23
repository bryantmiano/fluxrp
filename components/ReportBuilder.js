import React from 'react';
import TemplateSelector from './reportBuilder/TemplateSelector';
import DesignsPanel from './reportBuilder/DesignsPanel';
import PreviewPanel from './reportBuilder/PreviewPanel';

class ReportBuilder extends React.Component {
    render() {
        return (
            <div>
                <TemplateSelector />
                <DesignsPanel />
                <PreviewPanel />
            </div>
        );
    }
}

export default ReportBuilder;
