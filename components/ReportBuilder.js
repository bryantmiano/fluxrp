import React from 'react';
import TemplateSelector from './TemplateSelector';

class ReportBuilder extends React.Component {
    render() {
        return (
            <div>
                This is the report builder
                <TemplateSelector />
            </div>
        );
    }
}

export default ReportBuilder;
