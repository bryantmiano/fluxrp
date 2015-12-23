import React from 'react';
import TemplateSelector from './reportBuilder/TemplateSelector';
import LeftPanel from './reportBuilder/LeftPanel';
import PreviewPanel from './reportBuilder/PreviewPanel';

class ReportBuilder extends React.Component {
    render() {
        return (
            <div>
                <TemplateSelector />
                <LeftPanel />
                <PreviewPanel />
            </div>
        );
    }
}

export default ReportBuilder;
