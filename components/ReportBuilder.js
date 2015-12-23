import React from 'react';
import TemplateSelector from './reportBuilder/TemplateSelector';
import LeftPanel from './reportBuilder/LeftPanel';

class ReportBuilder extends React.Component {
    render() {
        return (
            <div>
                <TemplateSelector />
                <LeftPanel />
            </div>
        );
    }
}

export default ReportBuilder;
